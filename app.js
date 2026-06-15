/* =========================================================================
   TypeQuest — logika aplikacji (silnik gry).
   Zależności globalne: COURSE, I18N, ACHIEVEMENTS, XP_PER_LEVEL (data.js),
   window.ts (kompilator TypeScript), window.require (loader Monaco).
   ========================================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "typequest_state_v1";

  /* ---------- Stan gry ---------- */
  const defaultState = () => ({
    lang: "pl",
    xp: 0,
    completed: {},      // { moduleId: true }
    achievements: {},   // { achievementId: true }
    streak: 0,
    bestStreak: 0,
    labsPassed: 0,
  });

  let state = loadState();
  let route = { view: "home" };
  let editor = null;
  let editorModel = null;
  let monacoReady = false;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {}
    return defaultState();
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    schedulePush();
  }

  /* ---------- i18n ---------- */
  function t(key) {
    const lang = state.lang;
    return (I18N[lang] && I18N[lang][key]) || (I18N.pl[key]) || key;
  }
  function L(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] != null ? obj[state.lang] : obj.pl;
  }

  /* ---------- Pomocnicze: DOM ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  function el(tag, props, children) {
    const node = document.createElement(tag);
    if (props) {
      for (const k in props) {
        if (k === "class") node.className = props[k];
        else if (k === "html") node.innerHTML = props[k];
        else if (k === "text") node.textContent = props[k];
        else if (k.startsWith("on") && typeof props[k] === "function") node.addEventListener(k.slice(2), props[k]);
        else if (k === "dataset") Object.assign(node.dataset, props[k]);
        else node.setAttribute(k, props[k]);
      }
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  /* ---------- Progresja / odblokowania ---------- */
  function isModuleDone(id) { return !!state.completed[id]; }

  function levelCompleted(levelIdx) {
    return COURSE[levelIdx].modules.every((m) => isModuleDone(m.id));
  }
  function isLevelUnlocked(levelIdx) {
    if (levelIdx === 0) return true;
    return levelCompleted(levelIdx - 1);
  }
  function isModuleUnlocked(levelIdx, modIdx) {
    if (!isLevelUnlocked(levelIdx)) return false;
    if (modIdx === 0) return true;
    const prev = COURSE[levelIdx].modules[modIdx - 1];
    return isModuleDone(prev.id);
  }

  function totalModules() { return COURSE.reduce((n, lv) => n + lv.modules.length, 0); }
  function doneModules() { return COURSE.reduce((n, lv) => n + lv.modules.filter((m) => isModuleDone(m.id)).length, 0); }

  function playerLevel() { return Math.floor(state.xp / XP_PER_LEVEL) + 1; }

  /* ---------- XP / ukończenie ---------- */
  function completeModule(mod, opts) {
    opts = opts || {};
    const already = isModuleDone(mod.id);
    if (!already) {
      state.completed[mod.id] = true;
      state.xp += mod.xp || 0;
      if (mod.type === "lab") state.labsPassed += 1;
      bumpStreak();
      toast(t("moduleDone"), "+" + (mod.xp || 0) + " XP — " + L(mod.title), "xp");
    } else {
      toast(t("alreadyDone"), L(mod.title), "");
    }
    checkAchievements();
    saveState();
    updateTopbar();
    renderNav();
    return !already;
  }

  function bumpStreak() {
    state.streak += 1;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;
  }
  function resetStreak() { state.streak = 0; saveState(); updateTopbar(); }

  /* ---------- Osiągnięcia ---------- */
  function unlockAchievement(id) {
    if (state.achievements[id]) return;
    state.achievements[id] = true;
    const a = ACHIEVEMENTS.find((x) => x.id === id);
    if (a) toast("🏅 " + t("badgeUnlocked"), L(a.title) + " — " + L(a.desc), "badge");
    saveState();
  }
  function checkAchievements() {
    if (doneModules() >= 1) unlockAchievement("first-steps");
    if (levelCompleted(0)) unlockAchievement("beginner-done");
    if (levelCompleted(1)) unlockAchievement("intermediate-done");
    if (levelCompleted(2)) unlockAchievement("advanced-done");
    if (state.bestStreak >= 5) unlockAchievement("streak-5");
    if (state.labsPassed >= 5) unlockAchievement("lab-ace");
    if (COURSE.every((_, i) => levelCompleted(i))) unlockAchievement("graduate");
  }

  /* ---------- Topbar ---------- */
  function updateTopbar() {
    $("#playerLevel").textContent = playerLevel();
    $("#playerXp").textContent = state.xp;
    $("#streakValue").textContent = state.streak;
    const within = state.xp % XP_PER_LEVEL;
    $("#xpMiniFill").style.width = (within / XP_PER_LEVEL) * 100 + "%";
    const pct = Math.round((doneModules() / totalModules()) * 100);
    $("#overallPct").textContent = pct + "%";
    $("#overallFill").style.width = pct + "%";
    $$("[data-i18n]").forEach((n) => { n.textContent = t(n.getAttribute("data-i18n")); });
    if (typeof updateSyncBtn === "function") updateSyncBtn();
  }

  /* ---------- Toasty ---------- */
  function toast(title, body, kind) {
    const stack = $("#toastStack");
    const node = el("div", { class: "toast " + (kind || "") }, [
      el("h5", { text: title }),
      body ? el("p", { text: body }) : null,
    ]);
    stack.appendChild(node);
    setTimeout(() => {
      node.classList.add("out");
      setTimeout(() => node.remove(), 320);
    }, 3600);
  }

  /* ---------- Nawigacja boczna ---------- */
  function renderNav() {
    const nav = $("#nav");
    nav.innerHTML = "";
    COURSE.forEach((level, li) => {
      const unlocked = isLevelUnlocked(li);
      const done = level.modules.filter((m) => isModuleDone(m.id)).length;
      const head = el("div", { class: "nav-level-head" + (unlocked ? "" : " locked") }, [
        el("span", { class: "level-dot " + level.id }),
        el("span", { text: L(level.name) }),
        el("span", { class: "chip", text: done + "/" + level.modules.length }),
      ]);
      nav.appendChild(head);

      const modWrap = el("div", { class: "nav-modules" });
      level.modules.forEach((mod, mi) => {
        const mUnlocked = isModuleUnlocked(li, mi);
        const active = route.view === "module" && route.levelIdx === li && route.modIdx === mi;
        const typeIcon = mod.type === "lesson" ? "📘" : mod.type === "lab" ? "🧪" : "❓";
        const item = el("div", {
          class: "nav-module" + (active ? " active" : "") + (mUnlocked ? "" : " locked"),
        }, [
          el("span", { class: "m-type", text: typeIcon }),
          el("span", { text: L(mod.title) }),
          isModuleDone(mod.id)
            ? el("span", { class: "m-check", text: "✓" })
            : (!mUnlocked ? el("span", { class: "m-lock", text: "🔒" }) : null),
        ]);
        if (mUnlocked) item.addEventListener("click", () => goTo({ view: "module", levelIdx: li, modIdx: mi }));
        else item.addEventListener("click", () => toast(t("locked"), t("lockedMsg"), ""));
        modWrap.appendChild(item);
      });
      head.addEventListener("click", () => {
        modWrap.style.display = modWrap.style.display === "none" ? "" : "none";
      });
      nav.appendChild(modWrap);
    });
  }

  /* ---------- Routing ---------- */
  function goTo(r) {
    disposeEditor();
    route = r;
    render();
    renderNav();
    $("#content").scrollTo(0, 0);
    window.scrollTo(0, 0);
    if (window.innerWidth <= 900) $("#sidebar").classList.remove("open");
  }

  function findNextModule(levelIdx, modIdx) {
    const lv = COURSE[levelIdx];
    if (modIdx + 1 < lv.modules.length) return { view: "module", levelIdx, modIdx: modIdx + 1 };
    if (levelIdx + 1 < COURSE.length) return { view: "module", levelIdx: levelIdx + 1, modIdx: 0 };
    return { view: "home" };
  }
  function findPrevModule(levelIdx, modIdx) {
    if (modIdx - 1 >= 0) return { view: "module", levelIdx, modIdx: modIdx - 1 };
    if (levelIdx - 1 >= 0) return { view: "module", levelIdx: levelIdx - 1, modIdx: COURSE[levelIdx - 1].modules.length - 1 };
    return { view: "home" };
  }

  /* ---------- Render główny ---------- */
  function render() {
    updateTopbar();
    const content = $("#content");
    content.innerHTML = "";
    if (route.view === "home") return renderHome(content);
    const level = COURSE[route.levelIdx];
    const mod = level.modules[route.modIdx];
    if (!isModuleUnlocked(route.levelIdx, route.modIdx)) { route = { view: "home" }; return renderHome(content); }
    if (mod.type === "lesson") renderLesson(content, level, mod);
    else if (mod.type === "lab") renderLab(content, level, mod);
    else if (mod.type === "quiz") renderQuiz(content, level, mod);
  }

  /* ---------- Strona główna ---------- */
  function renderHome(content) {
    const hero = el("div", { class: "hero" }, [
      el("h1", { text: t("heroTitle") }),
      el("p", { text: t("heroSub") }),
      el("div", { class: "hero-actions" }, [
        el("button", {
          class: "btn",
          text: doneModules() > 0 ? t("continue") : t("startLearning"),
          onclick: () => startOrContinue(),
        }),
        el("button", { class: "btn secondary", text: t("chooseLevel"), onclick: () => $("#levelsAnchor").scrollIntoView({ behavior: "smooth" }) }),
      ]),
    ]);
    content.appendChild(hero);

    const anchor = el("div", { id: "levelsAnchor" });
    content.appendChild(anchor);

    const grid = el("div", { class: "levels-grid" });
    COURSE.forEach((level, li) => {
      const unlocked = isLevelUnlocked(li);
      const done = level.modules.filter((m) => isModuleDone(m.id)).length;
      const card = el("div", {
        class: "level-card " + level.id + (unlocked ? "" : " locked"),
        dataset: { locktext: t("completeToUnlock") },
      }, [
        el("span", { class: "lc-badge", text: L(level.name) }),
        el("h3", { text: L(level.name) }),
        el("p", { text: L(level.desc) }),
        el("div", { class: "lc-foot" }, [
          el("span", { class: "lc-prog", text: done + "/" + level.modules.length + " " + t("modules") }),
          el("button", {
            class: "btn " + (done === level.modules.length ? "success" : "secondary"),
            text: done === level.modules.length ? t("review") : t("startLevel"),
            onclick: () => goTo({ view: "module", levelIdx: li, modIdx: firstUnlockedInLevel(li) }),
          }),
        ]),
      ]);
      grid.appendChild(card);
    });
    content.appendChild(grid);
  }

  function firstUnlockedInLevel(li) {
    const mods = COURSE[li].modules;
    for (let i = 0; i < mods.length; i++) if (!isModuleDone(mods[i].id)) return i;
    return 0;
  }
  function startOrContinue() {
    for (let li = 0; li < COURSE.length; li++) {
      if (!isLevelUnlocked(li)) continue;
      for (let mi = 0; mi < COURSE[li].modules.length; mi++) {
        if (!isModuleDone(COURSE[li].modules[mi].id) && isModuleUnlocked(li, mi)) {
          return goTo({ view: "module", levelIdx: li, modIdx: mi });
        }
      }
    }
    goTo({ view: "module", levelIdx: 0, modIdx: 0 });
  }

  /* ---------- Nagłówek modułu ---------- */
  function moduleHead(level, mod) {
    const typeLabel = mod.type === "lesson" ? t("typeLesson") : mod.type === "lab" ? t("typeLab") : t("typeQuiz");
    return el("div", { class: "page-head" }, [
      el("div", { class: "crumbs", text: L(level.name) + " · " + typeLabel + " · +" + mod.xp + " XP" }),
      el("h1", { class: "page-title", text: L(mod.title) }),
    ]);
  }

  function moduleFooter(level, mod) {
    const prev = findPrevModule(route.levelIdx, route.modIdx);
    const next = findNextModule(route.levelIdx, route.modIdx);
    const nextUnlocked = next.view === "home" || isModuleUnlocked(next.levelIdx, next.modIdx);
    return el("div", { class: "module-foot" }, [
      el("button", { class: "btn secondary", text: "← " + t("prev"), onclick: () => goTo(prev) }),
      el("button", {
        class: "btn",
        text: t("next") + " →",
        disabled: nextUnlocked ? null : "true",
        onclick: () => { if (nextUnlocked) goTo(next); else toast(t("locked"), t("lockedMsg"), ""); },
      }),
    ]);
  }

  /* ---------- Lekcja ---------- */
  function renderLesson(content, level, mod) {
    content.appendChild(moduleHead(level, mod));
    const card = el("div", { class: "card" }, [
      el("div", { class: "lesson-body", html: L(mod.body) }),
    ]);
    content.appendChild(card);

    const doneBtn = el("button", {
      class: "btn success",
      text: isModuleDone(mod.id) ? "✓ " + t("alreadyDone") : t("lessonReadDone"),
      onclick: () => {
        completeModule(mod);
        doneBtn.textContent = "✓ " + t("alreadyDone");
        render();
      },
    });
    content.appendChild(el("div", { class: "lab-actions" }, [doneBtn]));
    content.appendChild(moduleFooter(level, mod));
  }

  /* ---------- Laboratorium ---------- */
  function renderLab(content, level, mod) {
    content.appendChild(moduleHead(level, mod));

    const promptCard = el("div", { class: "card lab-prompt" }, [
      el("p", { html: L(mod.prompt) }),
      el("div", { html: "<b style='display:block;margin-top:8px'>" + t("tasksTitle") + ":</b>" }),
      (function () {
        const ul = el("ul", { class: "lab-tasklist" });
        mod.tasks.forEach((task, i) => {
          ul.appendChild(el("li", { id: "task-" + i, text: L(task.desc) }));
        });
        return ul;
      })(),
    ]);
    content.appendChild(promptCard);

    // Editor
    const editorCard = el("div", { class: "card" }, [
      el("div", { class: "editor-wrap" }, [
        el("div", { class: "editor-toolbar" }, [
          el("span", { class: "lang-tag", text: "TypeScript" }),
          el("span", { class: "spacer" }),
          el("button", { class: "mini-btn", text: "↺ " + t("reset"), onclick: () => { if (editor) editor.setValue(mod.starter); } }),
          el("button", { class: "mini-btn", text: "💡 " + t("showSolution"), onclick: () => { if (editor && mod.solution) editor.setValue(mod.solution); } }),
        ]),
        el("div", { class: "monaco-host", id: "monacoHost" }),
      ]),
      el("div", { class: "lab-actions" }, [
        el("button", { class: "btn", id: "runBtn", text: "▶ " + t("runCode"), onclick: () => runLab(mod) }),
      ]),
      el("div", { class: "result-banner", id: "labBanner" }),
      el("div", { class: "console-out", id: "labConsole", text: t("runFirst") }),
    ]);
    content.appendChild(editorCard);

    // Hints
    if (mod.hints && mod.hints.length) {
      const hintWrap = el("div", { class: "card hint-box" }, [
        el("b", { text: "💡 " + t("hints") }),
      ]);
      mod.hints.forEach((h, i) => {
        hintWrap.appendChild(el("details", {}, [
          el("summary", { text: t("hints") + " " + (i + 1) }),
          el("p", { text: L(h) }),
        ]));
      });
      content.appendChild(hintWrap);
    }

    content.appendChild(moduleFooter(level, mod));

    mountEditor(mod.starter);
  }

  /* ---------- Monaco ---------- */
  function mountEditor(code) {
    const host = $("#monacoHost");
    if (!host) return;
    if (!monacoReady || !window.monaco) {
      host.innerHTML = '<div style="padding:16px;color:#9aa6c4;font-family:monospace">Edytor się ładuje…</div>';
      const wait = setInterval(() => {
        if (monacoReady && window.monaco && $("#monacoHost")) { clearInterval(wait); mountEditor(code); }
      }, 150);
      return;
    }
    disposeEditor();
    editorModel = monaco.editor.createModel(code, "typescript", monaco.Uri.parse("file:///lab" + Date.now() + ".ts"));
    editor = monaco.editor.create(host, {
      model: editorModel,
      theme: "tq-dark",
      fontSize: 14,
      fontFamily: "JetBrains Mono, monospace",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      padding: { top: 12, bottom: 12 },
      lineNumbersMinChars: 3,
    });
  }
  function disposeEditor() {
    if (editor) { editor.dispose(); editor = null; }
    if (editorModel) { editorModel.dispose(); editorModel = null; }
  }

  /* ---------- Diagnostyka typów (Monaco worker) ---------- */
  async function getTypeDiagnostics() {
    try {
      if (!window.monaco || !editorModel) return [];
      const getWorker = await monaco.languages.typescript.getTypeScriptWorker();
      const client = await getWorker(editorModel.uri);
      const uriStr = editorModel.uri.toString();
      const [syn, sem] = await Promise.all([
        client.getSyntacticDiagnostics(uriStr),
        client.getSemanticDiagnostics(uriStr),
      ]);
      return [].concat(syn || [], sem || []);
    } catch (e) { return []; }
  }
  function flattenDiag(messageText) {
    if (typeof messageText === "string") return messageText;
    let out = messageText.messageText || "";
    return out;
  }

  /* ---------- Uruchamianie kodu laboratorium ---------- */
  function transpile(tsCode, useDecorators) {
    const options = {
      target: window.ts.ScriptTarget.ES2017,
      experimentalDecorators: !!useDecorators,
      emitDecoratorMetadata: false,
      removeComments: false,
    };
    return window.ts.transpile(tsCode, options);
  }

  async function runLab(mod) {
    const banner = $("#labBanner");
    const out = $("#labConsole");
    banner.className = "result-banner";
    out.innerHTML = "";
    const userCode = editor ? editor.getValue() : mod.starter;

    // 1) Diagnostyka typów — pokazujemy edukacyjnie (nie blokuje, jeśli logika działa)
    const diags = await getTypeDiagnostics();
    const realErrors = diags.filter((d) => d.category === 1); // 1 = Error

    const logLines = [];
    const sandboxConsole = {
      log: (...a) => logLines.push({ k: "log", s: a.map(fmt).join(" ") }),
      info: (...a) => logLines.push({ k: "log", s: a.map(fmt).join(" ") }),
      warn: (...a) => logLines.push({ k: "info", s: a.map(fmt).join(" ") }),
      error: (...a) => logLines.push({ k: "err", s: a.map(fmt).join(" ") }),
    };
    function fmt(v) {
      if (typeof v === "string") return v;
      try { return JSON.stringify(v); } catch (e) { return String(v); }
    }

    const taskResults = [];
    let hadFatal = false;
    let fatalMsg = "";

    for (let i = 0; i < mod.tasks.length; i++) {
      const task = mod.tasks[i];
      const fullTs = userCode + "\n;(function(){})();\n" + task.test + "\n";
      try {
        const js = transpile(fullTs, !!mod.decorators);
        const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
        const runner = new AsyncFunction("console", "assert", '"use strict";\n' + js);
        const assertFn = (cond, msg) => { if (!cond) throw new Error(msg || "Assertion failed"); };
        await runner(sandboxConsole, assertFn);
        taskResults.push({ ok: true });
      } catch (err) {
        taskResults.push({ ok: false, msg: (err && err.message) || String(err) });
        if (err && /is not defined|Cannot read|is not a function|Unexpected|SyntaxError/i.test(err.message || "")) {
          // błąd "fatalny" — często cały kod nie działa
        }
      }
    }

    // aktualizacja checklisty
    mod.tasks.forEach((task, i) => {
      const li = $("#task-" + i);
      if (!li) return;
      li.classList.remove("pass", "fail");
      li.classList.add(taskResults[i].ok ? "pass" : "fail");
    });

    // konsola
    if (logLines.length === 0 && realErrors.length === 0) {
      out.appendChild(el("div", { class: "line-info", text: "— " + t("consoleTitle") + " —" }));
    }
    logLines.forEach((l) => out.appendChild(el("div", { class: "line-" + l.k, text: l.s })));

    if (realErrors.length) {
      out.appendChild(el("div", { class: "line-info", text: "» " + t("typeErrors") }));
      realErrors.slice(0, 6).forEach((d) => {
        out.appendChild(el("div", { class: "line-err", text: "  TS" + d.code + ": " + flattenDiag(d.messageText) }));
      });
    }

    const allPass = taskResults.every((r) => r.ok);
    if (allPass && realErrors.length === 0) {
      banner.className = "result-banner ok show";
      banner.innerHTML = "✅ <b>" + t("allTasksPass") + "</b>";
      completeModule(mod);
    } else {
      banner.className = "result-banner err show";
      const firstFail = taskResults.find((r) => !r.ok);
      let msg = "❌ <b>" + t("needAllTasks") + "</b>";
      if (firstFail && firstFail.msg) msg += "<small>" + escapeHtml(firstFail.msg) + "</small>";
      else if (realErrors.length) msg += "<small>" + escapeHtml(flattenDiag(realErrors[0].messageText)) + "</small>";
      banner.innerHTML = msg;
      resetStreak();
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ---------- Quiz ---------- */
  function renderQuiz(content, level, mod) {
    content.appendChild(moduleHead(level, mod));
    const card = el("div", { class: "card" });
    const answers = {};

    mod.questions.forEach((q, qi) => {
      const qWrap = el("div", { class: "quiz-q" });
      qWrap.appendChild(el("div", { class: "q-text", html: (qi + 1) + ". " + L(q.q) }));

      if (q.type === "mc") {
        const opts = el("div", { class: "quiz-options" });
        q.options.forEach((opt, oi) => {
          const optNode = el("label", { class: "quiz-option" }, [
            el("span", { class: "opt-marker", text: String.fromCharCode(65 + oi) }),
            el("span", { html: L(opt) }),
          ]);
          optNode.addEventListener("click", () => {
            if (qWrap.dataset.locked) return;
            answers[qi] = oi;
            $$(".quiz-option", opts).forEach((n) => n.classList.remove("selected"));
            optNode.classList.add("selected");
          });
          opts.appendChild(optNode);
        });
        qWrap.appendChild(opts);
      } else if (q.type === "fill") {
        const input = el("input", { class: "fill-input", type: "text", placeholder: t("yourAnswer") });
        input.addEventListener("input", () => { answers[qi] = input.value; });
        qWrap.appendChild(input);
      }
      qWrap.appendChild(el("div", { class: "q-explain", id: "explain-" + qi, html: L(q.explain) }));
      card.appendChild(qWrap);
    });

    const scoreNode = el("span", { class: "quiz-score" });
    const checkBtn = el("button", { class: "btn", text: t("checkAnswers") });
    const foot = el("div", { class: "quiz-foot" }, [checkBtn, scoreNode]);
    card.appendChild(foot);
    content.appendChild(card);

    checkBtn.addEventListener("click", () => {
      let correct = 0;
      mod.questions.forEach((q, qi) => {
        const qWrap = card.children[qi];
        qWrap.dataset.locked = "1";
        const explain = $("#explain-" + qi);
        explain.classList.add("show");
        let isCorrect = false;
        if (q.type === "mc") {
          const chosen = answers[qi];
          isCorrect = chosen === q.answer;
          $$(".quiz-option", qWrap).forEach((n, oi) => {
            n.classList.remove("selected");
            if (oi === q.answer) n.classList.add("correct");
            else if (oi === chosen) n.classList.add("wrong");
          });
        } else if (q.type === "fill") {
          const val = (answers[qi] || "").trim().toLowerCase();
          isCorrect = q.answer.some((a) => a.toLowerCase() === val);
          const input = $(".fill-input", qWrap);
          input.classList.add(isCorrect ? "correct" : "wrong");
          input.disabled = true;
        }
        if (isCorrect) correct++;
      });

      const ratio = correct / mod.questions.length;
      const passed = ratio >= (mod.passRatio || 0.6);
      scoreNode.textContent = t("quizResult") + ": " + correct + "/" + mod.questions.length;
      scoreNode.style.color = passed ? "var(--good)" : "var(--bad)";

      const banner = el("div", { class: "result-banner show " + (passed ? "ok" : "err") });
      if (passed) {
        banner.innerHTML = "🎉 <b>" + t("quizPassed") + "</b>";
        const wasNew = completeModule(mod);
        if (correct === mod.questions.length) unlockAchievement("perfect-quiz");
      } else {
        banner.innerHTML = "🔁 <b>" + t("quizFailed") + "</b>";
        resetStreak();
      }
      // usuń stary banner jeśli istnieje
      const old = $(".quiz-result-banner", card);
      if (old) old.remove();
      banner.classList.add("quiz-result-banner");
      foot.after(banner);
      checkBtn.textContent = t("checkAnswers");
    });

    content.appendChild(moduleFooter(level, mod));
  }

  /* ---------- Osiągnięcia: modal ---------- */
  function renderAchievementsModal() {
    const list = $("#achievementsList");
    list.innerHTML = "";
    ACHIEVEMENTS.forEach((a) => {
      const unlocked = !!state.achievements[a.id];
      list.appendChild(el("div", { class: "badge-row" + (unlocked ? "" : " locked") }, [
        el("div", { class: "badge-ico", text: a.icon }),
        el("div", {}, [
          el("h4", { text: L(a.title) }),
          el("p", { text: L(a.desc) }),
        ]),
        el("div", { style: "margin-left:auto;font-size:18px", text: unlocked ? "✓" : "🔒" }),
      ]));
    });
  }

  /* =======================================================================
     SYNCHRONIZACJA W CHMURZE (Supabase)
     ======================================================================= */
  const cloud = { client: null, user: null, syncing: false, lastSync: 0, pushTimer: null, suspend: false };

  function isSyncConfigured() {
    const c = window.SUPABASE_CONFIG;
    return !!(c && c.url && c.anonKey && !/YOUR_/.test(c.url) && !/YOUR_/.test(c.anonKey));
  }
  function normalizeUrl(raw) {
    // Akceptuj wklejony Project URL nawet z nadmiarowym "/rest/v1" lub ukośnikami.
    return String(raw || "")
      .trim()
      .replace(/\/+$/, "")        // usuń końcowe ukośniki
      .replace(/\/rest\/v1$/i, "") // usuń endpoint REST, jeśli ktoś go skopiował
      .replace(/\/auth\/v1$/i, "")
      .replace(/\/+$/, "");
  }
  function getSb() {
    if (cloud.client) return cloud.client;
    if (!isSyncConfigured() || !window.supabase) return null;
    cloud.client = window.supabase.createClient(normalizeUrl(window.SUPABASE_CONFIG.url), String(window.SUPABASE_CONFIG.anonKey).trim());
    return cloud.client;
  }

  function serializableState() {
    return {
      lang: state.lang,
      xp: state.xp,
      completed: state.completed,
      achievements: state.achievements,
      streak: state.streak,
      bestStreak: state.bestStreak,
      labsPassed: state.labsPassed,
    };
  }

  // Przelicza pochodne liczniki ze zbioru ukończonych modułów (deterministycznie),
  // dzięki czemu scalanie postępów z dwóch urządzeń nigdy nie zdublowuje XP.
  function recomputeDerived(s) {
    let xp = 0, labs = 0;
    COURSE.forEach((lv) => lv.modules.forEach((m) => {
      if (s.completed && s.completed[m.id]) { xp += m.xp || 0; if (m.type === "lab") labs++; }
    }));
    s.xp = xp;
    s.labsPassed = labs;
  }
  function mergeStates(localS, remoteS) {
    const out = Object.assign({}, localS);
    out.completed = Object.assign({}, localS.completed || {}, remoteS.completed || {});
    out.achievements = Object.assign({}, localS.achievements || {}, remoteS.achievements || {});
    out.bestStreak = Math.max(localS.bestStreak || 0, remoteS.bestStreak || 0);
    out.streak = Math.max(localS.streak || 0, remoteS.streak || 0);
    out.lang = localS.lang || remoteS.lang || "pl";
    recomputeDerived(out);
    return out;
  }

  function schedulePush() {
    if (!cloud.user || cloud.suspend) return;
    if (cloud.pushTimer) clearTimeout(cloud.pushTimer);
    cloud.pushTimer = setTimeout(pushNow, 800);
  }
  async function pushNow() {
    const sb = getSb();
    if (!sb || !cloud.user) return;
    cloud.syncing = true; updateSyncUI();
    try {
      const { error } = await sb.from("progress").upsert({
        user_id: cloud.user.id,
        state: serializableState(),
        updated_at: new Date().toISOString(),
      });
      if (!error) cloud.lastSync = Date.now();
      else console.warn("Sync push error:", error.message);
    } catch (e) { console.warn(e); }
    cloud.syncing = false; updateSyncUI();
  }
  async function pullAndMerge() {
    const sb = getSb();
    if (!sb || !cloud.user) return;
    cloud.syncing = true; updateSyncUI();
    try {
      const { data, error } = await sb.from("progress").select("state").eq("user_id", cloud.user.id).maybeSingle();
      if (error) throw error;
      cloud.suspend = true;
      if (data && data.state) {
        state = mergeStates(state, data.state);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
        checkAchievements();
        toast(t("syncTitle"), t("syncPulled"), "");
      }
      cloud.suspend = false;
      await pushNow(); // odeślij scalony stan, aby chmura też miała pełną sumę
      cloud.lastSync = Date.now();
    } catch (e) {
      console.warn("Sync pull error:", e && e.message);
    }
    cloud.syncing = false;
    updateTopbar(); renderNav(); render(); updateSyncUI();
  }

  async function sbSignIn(email, pass) {
    const sb = getSb(); if (!sb) return { error: "config" };
    const { data, error } = await sb.auth.signInWithPassword({ email: email, password: pass });
    if (error) return { error: error.message };
    cloud.user = data.user; await pullAndMerge(); return { ok: true };
  }
  async function sbSignUp(email, pass) {
    const sb = getSb(); if (!sb) return { error: "config" };
    const { data, error } = await sb.auth.signUp({ email: email, password: pass });
    if (error) return { error: error.message };
    if (data.session) { cloud.user = data.user; await pullAndMerge(); return { ok: true }; }
    return { ok: true, confirm: true };
  }
  async function sbSignOut() {
    const sb = getSb(); if (!sb) return;
    try { await sb.auth.signOut(); } catch (e) {}
    cloud.user = null; cloud.lastSync = 0;
    updateSyncUI();
  }

  async function sbInit() {
    const sb = getSb();
    updateSyncBtn();
    if (!sb) return;
    sb.auth.onAuthStateChange((_event, session) => {
      cloud.user = session ? session.user : null;
      updateSyncBtn();
    });
    try {
      const { data } = await sb.auth.getSession();
      if (data && data.session) { cloud.user = data.session.user; await pullAndMerge(); }
    } catch (e) {}
    updateSyncBtn();
  }

  function updateSyncBtn() {
    const label = $("#syncBtnLabel");
    const btn = $("#syncBtn");
    if (!label || !btn) return;
    if (cloud.user) { label.textContent = t("cloudOnBtn"); btn.classList.add("synced"); }
    else { label.textContent = t("sync"); btn.classList.remove("synced"); }
  }

  function fmtTime(ts) {
    if (!ts) return t("never");
    const d = new Date(ts);
    return d.toLocaleTimeString(state.lang === "pl" ? "pl-PL" : "en-US", { hour: "2-digit", minute: "2-digit" });
  }

  function renderSyncModal() {
    const body = $("#syncBody");
    body.innerHTML = "";

    if (!isSyncConfigured()) {
      body.appendChild(el("div", { class: "sync-note", html: t("syncNotConfigured") }));
      return;
    }

    if (cloud.user) {
      body.appendChild(el("div", { class: "sync-status" }, [
        el("span", { class: "dot" + (cloud.syncing ? "" : "") }),
        el("div", {}, [
          el("div", {}, [el("span", { class: "meta", text: t("loggedInAs") + ": " }), el("span", { class: "who", text: cloud.user.email || "—" })]),
          el("div", { class: "meta", text: t("lastSync") + ": " + (cloud.syncing ? t("syncing") : fmtTime(cloud.lastSync)) }),
        ]),
      ]));
      const msg = el("div", { class: "sync-msg" });
      body.appendChild(el("div", { class: "sync-actions" }, [
        el("button", { class: "btn", text: "↻ " + t("syncNow"), onclick: async () => { msg.className = "sync-msg info show"; msg.textContent = t("syncing"); await pullAndMerge(); msg.className = "sync-msg ok show"; msg.textContent = t("syncDone"); } }),
        el("button", { class: "btn secondary", text: t("signOut"), onclick: async () => { await sbSignOut(); toast(t("syncTitle"), t("signedOut"), ""); renderSyncModal(); } }),
      ]));
      body.appendChild(msg);
      body.appendChild(el("div", { class: "sync-note", style: "margin-top:12px", text: t("syncSecurityNote") }));
      return;
    }

    // formularz logowania / rejestracji
    body.appendChild(el("p", { class: "sync-note", text: t("syncIntro") }));
    const emailIn = el("input", { class: "sync-input", type: "email", autocomplete: "email", placeholder: "you@example.com" });
    const passIn = el("input", { class: "sync-input", type: "password", autocomplete: "current-password", placeholder: "••••••••" });
    const msg = el("div", { class: "sync-msg" });

    function showMsg(kind, text) { msg.className = "sync-msg show " + kind; msg.textContent = text; }
    async function doAuth(mode) {
      const email = emailIn.value.trim();
      const pass = passIn.value;
      if (!email || !pass) { showMsg("err", t("fillEmailPass")); return; }
      showMsg("info", t("syncing"));
      const res = mode === "in" ? await sbSignIn(email, pass) : await sbSignUp(email, pass);
      if (res && res.error) { showMsg("err", res.error); return; }
      if (res && res.confirm) { showMsg("ok", t("signedUpConfirm")); return; }
      toast(t("syncTitle"), t("signedIn"), "xp");
      renderSyncModal();
      updateSyncBtn();
    }

    const form = el("div", { class: "sync-form" }, [
      el("div", { class: "sync-field" }, [el("label", { text: t("emailLabel") }), emailIn]),
      el("div", { class: "sync-field" }, [el("label", { text: t("passwordLabel") }), passIn]),
      el("div", { class: "sync-actions" }, [
        el("button", { class: "btn", text: t("signIn"), onclick: () => doAuth("in") }),
        el("button", { class: "btn secondary", text: t("signUp"), onclick: () => doAuth("up") }),
      ]),
      msg,
    ]);
    passIn.addEventListener("keydown", (e) => { if (e.key === "Enter") doAuth("in"); });
    body.appendChild(form);
    body.appendChild(el("div", { class: "sync-note", style: "margin-top:12px", text: t("syncSecurityNote") }));
  }

  function updateSyncUI() {
    updateSyncBtn();
    const modal = $("#syncModal");
    if (modal && !modal.hidden) renderSyncModal();
  }

  /* ---------- Inicjalizacja UI / zdarzenia ---------- */
  function bindUI() {
    $("#brandHome").addEventListener("click", () => goTo({ view: "home" }));

    $("#langToggle").addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      state.lang = btn.dataset.lang;
      document.documentElement.lang = state.lang;
      $$("#langToggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === state.lang));
      saveState();
      render();
      renderNav();
      updateSyncBtn();
    });
    $$("#langToggle button").forEach((b) => b.classList.toggle("active", b.dataset.lang === state.lang));

    $("#achievementsBtn").addEventListener("click", () => {
      renderAchievementsModal();
      $("#achievementsModal").hidden = false;
    });
    $("#closeAchievements").addEventListener("click", () => { $("#achievementsModal").hidden = true; });
    $("#achievementsModal").addEventListener("click", (e) => { if (e.target.id === "achievementsModal") e.target.hidden = true; });

    $("#syncBtn").addEventListener("click", () => {
      renderSyncModal();
      $("#syncModal").hidden = false;
    });
    $("#closeSync").addEventListener("click", () => { $("#syncModal").hidden = true; });
    $("#syncModal").addEventListener("click", (e) => { if (e.target.id === "syncModal") e.target.hidden = true; });

    $("#resetBtn").addEventListener("click", () => {
      if (confirm(t("resetConfirm"))) {
        state = defaultState();
        saveState();
        goTo({ view: "home" });
        toast(t("progressReset"), "", "");
      }
    });

    document.documentElement.lang = state.lang;
  }

  /* ---------- Ładowanie Monaco ---------- */
  function loadMonaco(onProgress) {
    return new Promise((resolve) => {
      if (!window.require) { resolve(false); return; }
      window.require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs" } });
      onProgress && onProgress(0.55);
      window.require(["vs/editor/editor.main"], function () {
        // motyw
        monaco.editor.defineTheme("tq-dark", {
          base: "vs-dark",
          inherit: true,
          rules: [],
          colors: {
            "editor.background": "#0a0d18",
            "editor.lineHighlightBackground": "#12172a",
            "editorLineNumber.foreground": "#3a4566",
            "editorGutter.background": "#0a0d18",
          },
        });
        // opcje kompilatora TS dla edytora (diagnostyka)
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          target: monaco.languages.typescript.ScriptTarget.ES2017,
          experimentalDecorators: true,
          noImplicitAny: false,
          strict: false,
          allowNonTsExtensions: true,
          moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        });
        monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);
        monacoReady = true;
        onProgress && onProgress(1);
        resolve(true);
      });
    });
  }

  /* ---------- Boot ---------- */
  async function boot() {
    bindUI();
    updateTopbar();
    renderNav();
    render();

    const fill = $("#bootBarFill");
    const setBoot = (p) => { if (fill) fill.style.width = Math.round(p * 100) + "%"; };
    setBoot(0.2);

    // czekamy aż pojawi się globalny kompilator ts
    let tries = 0;
    while (!window.ts && tries < 60) { await sleep(100); tries++; }
    setBoot(0.45);

    await loadMonaco(setBoot);

    // synchronizacja w chmurze (jeśli skonfigurowana) — nie blokuje startu
    sbInit().catch((e) => console.warn("Sync init:", e));

    setBoot(1);
    await sleep(250);
    const boot = $("#boot");
    boot.classList.add("hide");
    setTimeout(() => { boot.style.display = "none"; }, 450);

    if (doneModules() > 0) toast(t("welcomeBack"), t("soFar") + ": " + doneModules() + "/" + totalModules(), "");
  }
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  document.addEventListener("DOMContentLoaded", boot);
})();
