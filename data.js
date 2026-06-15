/* =========================================================================
   TypeQuest — dane kursu (treść), tłumaczenia UI oraz osiągnięcia.
   Wszystko jest dwujęzyczne: { pl: "...", en: "..." }.
   ========================================================================= */

/* ---------- Tłumaczenia interfejsu (UI) ---------- */
const I18N = {
  pl: {
    bootLoading: "Ładowanie silnika TypeScript…",
    level: "Poziom",
    badges: "Odznaki",
    totalProgress: "Postęp całkowity",
    heroTitle: "Naucz się TypeScript grając",
    heroSub: "Od zera do zaawansowanego: lekcje, interaktywne laboratoria z prawdziwym kompilatorem TypeScript i quizy. Zdobywaj XP, odblokowuj poziomy i kolekcjonuj odznaki.",
    startLearning: "Rozpocznij naukę",
    continue: "Kontynuuj",
    chooseLevel: "Wybierz poziom",
    locked: "Zablokowane",
    completeToUnlock: "Ukończ poprzedni poziom",
    lessonReadDone: "Przeczytane — odbierz XP",
    runCode: "Uruchom i sprawdź",
    reset: "Resetuj kod",
    showSolution: "Pokaż rozwiązanie",
    hints: "Podpowiedzi",
    consoleTitle: "Konsola",
    next: "Dalej",
    prev: "Wstecz",
    backHome: "Strona główna",
    checkAnswers: "Sprawdź odpowiedzi",
    yourAnswer: "Twoja odpowiedź…",
    quizResult: "Wynik",
    moduleDone: "Moduł ukończony!",
    xpEarned: "Zdobyto XP",
    alreadyDone: "Ukończono wcześniej",
    levelComplete: "Poziom ukończony!",
    nextLevelUnlocked: "Odblokowano kolejny poziom!",
    resetConfirm: "Zresetować cały postęp? Tej operacji nie można cofnąć.",
    progressReset: "Postęp został zresetowany.",
    needAllTasks: "Zalicz wszystkie zadania, aby ukończyć laboratorium.",
    allTasksPass: "Świetnie! Wszystkie zadania zaliczone.",
    compileError: "Błąd kompilacji / wykonania",
    typeErrors: "Błędy typów wykryte przez kompilator:",
    lessonExample: "Przykład",
    tasksTitle: "Zadania do wykonania",
    quizPassed: "Quiz zaliczony!",
    quizFailed: "Spróbuj ponownie — popraw błędne odpowiedzi.",
    levelOf: "z",
    modules: "moduły",
    completed: "ukończono",
    startLevel: "Wejdź",
    review: "Powtórz",
    lockedMsg: "Najpierw ukończ poprzedni poziom, aby odblokować ten etap.",
    badgeUnlocked: "Odblokowano odznakę!",
    welcomeBack: "Witaj ponownie!",
    typeLesson: "Lekcja",
    typeLab: "Laboratorium",
    typeQuiz: "Quiz",
    runFirst: "Uruchom kod, aby sprawdzić rozwiązanie.",
    soFar: "Twój dotychczasowy postęp",
    sync: "Synchronizuj",
    syncTitle: "Synchronizacja w chmurze",
    syncNotConfigured: "Synchronizacja nie jest jeszcze skonfigurowana. Uzupełnij dane projektu Supabase w pliku <code>config.js</code> (Project URL oraz klucz anon public) i uruchom skrypt <code>supabase-setup.sql</code> w panelu Supabase.",
    syncIntro: "Zaloguj się tym samym kontem na każdym urządzeniu, aby Twoje postępy automatycznie się synchronizowały.",
    emailLabel: "Adres e-mail",
    passwordLabel: "Hasło (min. 6 znaków)",
    signIn: "Zaloguj się",
    signUp: "Utwórz konto",
    signOut: "Wyloguj",
    or: "lub",
    loggedInAs: "Zalogowano jako",
    lastSync: "Ostatnia synchronizacja",
    syncNow: "Synchronizuj teraz",
    never: "nigdy",
    syncing: "Synchronizowanie…",
    syncDone: "Postępy zsynchronizowane.",
    syncPulled: "Pobrano i scalono postępy z chmury.",
    signedIn: "Zalogowano — synchronizacja włączona.",
    signedUpConfirm: "Konto utworzone. Sprawdź skrzynkę i potwierdź adres e-mail, a następnie zaloguj się.",
    signedOut: "Wylogowano. Postępy zostają na tym urządzeniu.",
    fillEmailPass: "Podaj adres e-mail i hasło.",
    cloudOnBtn: "W chmurze",
    syncSecurityNote: "Twoje dane chroni mechanizm RLS — każdy użytkownik widzi wyłącznie własne postępy.",
  },
  en: {
    bootLoading: "Loading the TypeScript engine…",
    level: "Level",
    badges: "Badges",
    totalProgress: "Overall progress",
    heroTitle: "Learn TypeScript by playing",
    heroSub: "From zero to advanced: lessons, interactive labs powered by the real TypeScript compiler, and quizzes. Earn XP, unlock levels and collect badges.",
    startLearning: "Start learning",
    continue: "Continue",
    chooseLevel: "Choose a level",
    locked: "Locked",
    completeToUnlock: "Finish the previous level",
    lessonReadDone: "Read it — claim XP",
    runCode: "Run & check",
    reset: "Reset code",
    showSolution: "Show solution",
    hints: "Hints",
    consoleTitle: "Console",
    next: "Next",
    prev: "Back",
    backHome: "Home",
    checkAnswers: "Check answers",
    yourAnswer: "Your answer…",
    quizResult: "Score",
    moduleDone: "Module completed!",
    xpEarned: "XP earned",
    alreadyDone: "Already completed",
    levelComplete: "Level completed!",
    nextLevelUnlocked: "Next level unlocked!",
    resetConfirm: "Reset all progress? This cannot be undone.",
    progressReset: "Progress has been reset.",
    needAllTasks: "Pass every task to complete the lab.",
    allTasksPass: "Great! All tasks passed.",
    compileError: "Compilation / runtime error",
    typeErrors: "Type errors found by the compiler:",
    lessonExample: "Example",
    tasksTitle: "Tasks to complete",
    quizPassed: "Quiz passed!",
    quizFailed: "Try again — fix the wrong answers.",
    levelOf: "of",
    modules: "modules",
    completed: "completed",
    startLevel: "Enter",
    review: "Review",
    lockedMsg: "Finish the previous level first to unlock this stage.",
    badgeUnlocked: "Badge unlocked!",
    welcomeBack: "Welcome back!",
    typeLesson: "Lesson",
    typeLab: "Lab",
    typeQuiz: "Quiz",
    runFirst: "Run the code to check your solution.",
    soFar: "Your progress so far",
    sync: "Sync",
    syncTitle: "Cloud sync",
    syncNotConfigured: "Sync is not configured yet. Fill in your Supabase project details in <code>config.js</code> (Project URL and the anon public key) and run <code>supabase-setup.sql</code> in the Supabase dashboard.",
    syncIntro: "Sign in with the same account on every device to keep your progress in sync automatically.",
    emailLabel: "Email address",
    passwordLabel: "Password (min. 6 characters)",
    signIn: "Sign in",
    signUp: "Create account",
    signOut: "Sign out",
    or: "or",
    loggedInAs: "Signed in as",
    lastSync: "Last sync",
    syncNow: "Sync now",
    never: "never",
    syncing: "Syncing…",
    syncDone: "Progress synced.",
    syncPulled: "Pulled and merged progress from the cloud.",
    signedIn: "Signed in — sync enabled.",
    signedUpConfirm: "Account created. Check your inbox to confirm your email, then sign in.",
    signedOut: "Signed out. Your progress stays on this device.",
    fillEmailPass: "Enter an email and password.",
    cloudOnBtn: "Cloud on",
    syncSecurityNote: "Your data is protected by RLS — each user can only see their own progress.",
  },
};

/* ---------- Pomocnik do kolorowania przykładów w lekcjach ----------
   (Prosty, statyczny highlight dla bloków <pre> w treści lekcji.)        */
function hl(code) {
  // escapowanie
  let s = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Stringi i komentarze chowamy pod jednoznakowymi placeholderami z obszaru
  // Private Use Area (U+E000+). Nie są to znaki "słowne" ani cyfry, więc kolejne
  // podmiany słów kluczowych / typów / liczb nigdy w nie nie trafią ani nie zepsują
  // już wstawionego HTML-a (np. atrybutu class="...").
  const store = [];
  const stash = (html) => {
    const ch = String.fromCharCode(0xe000 + store.length);
    store.push(html);
    return ch;
  };

  // komentarze
  s = s.replace(/\/\/[^\n]*/g, (m) => stash('<span class="tok-com">' + m + "</span>"));
  // stringi
  s = s.replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g, (m) => stash('<span class="tok-str">' + m + "</span>"));
  // słowa kluczowe
  s = s.replace(/\b(const|let|var|function|return|class|interface|type|extends|implements|new|public|private|protected|readonly|async|await|if|else|for|while|of|in|import|export|from|enum|namespace|as|keyof|typeof|infer|never|void|null|undefined|true|false|this|super|get|set|static|abstract)\b/g,
    '<span class="tok-key">$1</span>');
  // typy podstawowe
  s = s.replace(/\b(string|number|boolean|any|unknown|object|Array|Promise|Record|Partial|Pick|Omit|Readonly|Required|ReturnType|Parameters)\b/g,
    '<span class="tok-type">$1</span>');
  // liczby
  s = s.replace(/\b\d+(?:\.\d+)?\b/g, (m) => '<span class="tok-num">' + m + "</span>");
  // przywracamy schowane stringi/komentarze
  s = s.replace(/[\ue000-\uf8ff]/g, (ch) => store[ch.charCodeAt(0) - 0xe000]);
  return s;
}
function codeBlock(code) {
  return '<pre class="code-block">' + hl(code.trim()) + "</pre>";
}

/* =========================================================================
   KURS
   ========================================================================= */
const COURSE = [
  /* ============================ BEGINNER ============================ */
  {
    id: "beginner",
    name: { pl: "Początkujący", en: "Beginner" },
    desc: {
      pl: "Typy podstawowe, zmienne, funkcje i interfejsy. Tu zaczyna się Twoja przygoda.",
      en: "Primitive types, variables, functions and interfaces. Your journey starts here.",
    },
    modules: [
      /* --- Lesson 1 --- */
      {
        id: "b-l1",
        type: "lesson",
        xp: 20,
        title: { pl: "Czym jest TypeScript?", en: "What is TypeScript?" },
        body: {
          pl:
            "<p><b>TypeScript</b> to nadzbiór JavaScript, który dodaje <i>statyczne typy</i>. Każdy poprawny kod JavaScript jest też poprawnym TypeScriptem — ale TypeScript pozwala opisać, <b>jakiego rodzaju</b> dane przechowują zmienne, dzięki czemu kompilator wyłapie wiele błędów zanim uruchomisz program.</p>" +
            "<h3>Dlaczego warto?</h3>" +
            "<ul><li>Błędy wykrywane podczas pisania, a nie u użytkownika.</li><li>Podpowiedzi w edytorze (autouzupełnianie).</li><li>Kod łatwiejszy w utrzymaniu i czytaniu.</li></ul>" +
            "<h3>Adnotacja typu</h3>" +
            "<p>Typ dodajemy po dwukropku <code>:</code> za nazwą zmiennej.</p>" +
            codeBlock('let wiek: number = 30;\nlet imie: string = "Ada";\nlet aktywny: boolean = true;') +
            '<div class="note">TypeScript potrafi też <b>wywnioskować</b> typ. Jeśli napiszesz <code>let x = 5</code>, kompilator sam wie, że <code>x</code> to <code>number</code>.</div>',
          en:
            "<p><b>TypeScript</b> is a superset of JavaScript that adds <i>static types</i>. Every valid JavaScript program is also valid TypeScript — but TypeScript lets you describe <b>what kind</b> of data your variables hold, so the compiler can catch many bugs before you ever run the code.</p>" +
            "<h3>Why bother?</h3>" +
            "<ul><li>Bugs caught while typing, not by your users.</li><li>Great editor hints (autocompletion).</li><li>Easier to maintain and read.</li></ul>" +
            "<h3>Type annotation</h3>" +
            "<p>We add a type after a colon <code>:</code> following the variable name.</p>" +
            codeBlock('let age: number = 30;\nlet name: string = "Ada";\nlet active: boolean = true;') +
            '<div class="note">TypeScript can also <b>infer</b> types. If you write <code>let x = 5</code>, it already knows <code>x</code> is a <code>number</code>.</div>',
        },
      },
      /* --- Lab 1 --- */
      {
        id: "b-lab1",
        type: "lab",
        xp: 35,
        title: { pl: "Zmienne z typami", en: "Typed variables" },
        prompt: {
          pl: "Zadeklaruj trzy zmienne z poprawnymi adnotacjami typów. To Twój pierwszy kod w TypeScript!",
          en: "Declare three variables with correct type annotations. This is your very first TypeScript code!",
        },
        tasks: [
          {
            desc: { pl: "Zmienna imie typu string równa \"Ada\"", en: "Variable name of type string equal to \"Ada\"" },
            test: 'assert(typeof imie === "string", "imie powinno być typu string"); assert(imie === "Ada", "imie powinno być równe \\"Ada\\"");',
          },
          {
            desc: { pl: "Zmienna wiek typu number równa 30", en: "Variable age of type number equal to 30" },
            test: 'assert(typeof wiek === "number", "wiek powinno być liczbą"); assert(wiek === 30, "wiek powinno być równe 30");',
          },
          {
            desc: { pl: "Zmienna aktywny typu boolean równa true", en: "Variable active of type boolean equal to true" },
            test: 'assert(typeof aktywny === "boolean", "aktywny powinno być typu boolean"); assert(aktywny === true, "aktywny powinno być true");',
          },
        ],
        starter:
          "// Uzupełnij adnotacje typów i wartości.\n// Fill in the type annotations and values.\n\nlet imie: string = \"\";\nlet wiek: number = 0;\nlet aktywny: boolean = false;\n",
        solution: 'let imie: string = "Ada";\nlet wiek: number = 30;\nlet aktywny: boolean = true;',
        hints: [
          { pl: "Tekst zapisujemy w cudzysłowie: \"Ada\".", en: "Text goes in quotes: \"Ada\"." },
          { pl: "Liczby piszemy bez cudzysłowu: 30.", en: "Numbers are written without quotes: 30." },
          { pl: "Wartości logiczne to true albo false.", en: "Boolean values are true or false." },
        ],
      },
      /* --- Lesson 2 --- */
      {
        id: "b-l2",
        type: "lesson",
        xp: 20,
        title: { pl: "Funkcje i ich typy", en: "Functions and their types" },
        body: {
          pl:
            "<p>W funkcjach typujemy <b>parametry</b> oraz <b>wartość zwracaną</b>.</p>" +
            codeBlock("function dodaj(a: number, b: number): number {\n  return a + b;\n}\n\nconst suma = dodaj(2, 3); // 5") +
            "<h3>Funkcje strzałkowe</h3>" +
            codeBlock("const podwoj = (x: number): number => x * 2;") +
            "<h3>Parametry opcjonalne i domyślne</h3>" +
            codeBlock('function powitaj(imie: string, znak: string = "!"): string {\n  return "Cześć " + imie + znak;\n}') +
            '<div class="note warn">Jeśli funkcja nic nie zwraca, jej typ zwracany to <code>void</code>.</div>',
          en:
            "<p>In functions we type the <b>parameters</b> and the <b>return value</b>.</p>" +
            codeBlock("function add(a: number, b: number): number {\n  return a + b;\n}\n\nconst sum = add(2, 3); // 5") +
            "<h3>Arrow functions</h3>" +
            codeBlock("const double = (x: number): number => x * 2;") +
            "<h3>Optional & default parameters</h3>" +
            codeBlock('function greet(name: string, mark: string = "!"): string {\n  return "Hi " + name + mark;\n}') +
            '<div class="note warn">If a function returns nothing, its return type is <code>void</code>.</div>',
        },
      },
      /* --- Lab 2 --- */
      {
        id: "b-lab2",
        type: "lab",
        xp: 40,
        title: { pl: "Napisz funkcję", en: "Write a function" },
        prompt: {
          pl: "Napisz funkcję <code>poleProstokata</code>, która przyjmuje szerokość i wysokość (liczby) i zwraca ich iloczyn.",
          en: "Write a function <code>rectangleArea</code> that takes width and height (numbers) and returns their product.",
        },
        tasks: [
          {
            desc: { pl: "poleProstokata(4, 5) zwraca 20", en: "rectangleArea(4, 5) returns 20" },
            test: 'assert(typeof poleProstokata === "function", "Zdefiniuj funkcję poleProstokata"); assert(poleProstokata(4,5) === 20, "Dla 4 i 5 wynik to 20");',
          },
          {
            desc: { pl: "poleProstokata(3, 3) zwraca 9", en: "rectangleArea(3, 3) returns 9" },
            test: 'assert(poleProstokata(3,3) === 9, "Dla 3 i 3 wynik to 9");',
          },
        ],
        starter:
          "// Dokończ funkcję tak, aby zwracała pole prostokąta.\n// Finish the function so it returns the rectangle area.\n\nfunction poleProstokata(szerokosc: number, wysokosc: number): number {\n  // tutaj Twój kod / your code here\n}\n",
        solution:
          "function poleProstokata(szerokosc: number, wysokosc: number): number {\n  return szerokosc * wysokosc;\n}",
        hints: [
          { pl: "Pole prostokąta to szerokość pomnożona przez wysokość.", en: "Rectangle area is width multiplied by height." },
          { pl: "Użyj słowa kluczowego return.", en: "Use the return keyword." },
        ],
      },
      /* --- Quiz 1 --- */
      {
        id: "b-q1",
        type: "quiz",
        xp: 30,
        title: { pl: "Quiz: podstawy", en: "Quiz: the basics" },
        passRatio: 0.6,
        questions: [
          {
            type: "mc",
            q: { pl: "Jaki typ ma zmienna: <code>let x = 5;</code>?", en: "What type does this have: <code>let x = 5;</code>?" },
            options: [
              { pl: "<code>string</code>", en: "<code>string</code>" },
              { pl: "<code>number</code>", en: "<code>number</code>" },
              { pl: "<code>boolean</code>", en: "<code>boolean</code>" },
              { pl: "<code>any</code>", en: "<code>any</code>" },
            ],
            answer: 1,
            explain: {
              pl: "TypeScript wywnioskuje typ <code>number</code> na podstawie wartości 5.",
              en: "TypeScript infers the type <code>number</code> from the value 5.",
            },
          },
          {
            type: "mc",
            q: { pl: "Który symbol oddziela nazwę zmiennej od jej typu?", en: "Which symbol separates a variable name from its type?" },
            options: [
              { pl: "Przecinek <code>,</code>", en: "Comma <code>,</code>" },
              { pl: "Dwukropek <code>:</code>", en: "Colon <code>:</code>" },
              { pl: "Średnik <code>;</code>", en: "Semicolon <code>;</code>" },
              { pl: "Strzałka <code>=&gt;</code>", en: "Arrow <code>=&gt;</code>" },
            ],
            answer: 1,
            explain: { pl: "Adnotację typu dodajemy po dwukropku, np. <code>let imie: string</code>.", en: "We add a type annotation after a colon, e.g. <code>let name: string</code>." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij typ zwracany funkcji, która nic nie zwraca: <code>function log(): ___ {}</code>", en: "Fill in the return type of a function that returns nothing: <code>function log(): ___ {}</code>" },
            answer: ["void"],
            explain: { pl: "Funkcja bez zwracanej wartości ma typ <code>void</code>.", en: "A function with no return value has type <code>void</code>." },
          },
        ],
      },
      /* --- Lesson 3 --- */
      {
        id: "b-l3",
        type: "lesson",
        xp: 20,
        title: { pl: "Obiekty i interfejsy", en: "Objects and interfaces" },
        body: {
          pl:
            "<p>Interfejs opisuje <b>kształt</b> obiektu — jakie pola i jakich typów powinien zawierać.</p>" +
            codeBlock("interface Uzytkownik {\n  imie: string;\n  wiek: number;\n  email?: string; // pole opcjonalne\n}\n\nconst u: Uzytkownik = {\n  imie: \"Ada\",\n  wiek: 30,\n};") +
            "<h3>Pola tylko do odczytu</h3>" +
            codeBlock("interface Punkt {\n  readonly x: number;\n  readonly y: number;\n}") +
            '<div class="note">Znak <code>?</code> oznacza pole opcjonalne, a <code>readonly</code> blokuje zmianę wartości po utworzeniu obiektu.</div>',
          en:
            "<p>An interface describes the <b>shape</b> of an object — which fields it should have and of which types.</p>" +
            codeBlock("interface User {\n  name: string;\n  age: number;\n  email?: string; // optional field\n}\n\nconst u: User = {\n  name: \"Ada\",\n  age: 30,\n};") +
            "<h3>Read-only fields</h3>" +
            codeBlock("interface Point {\n  readonly x: number;\n  readonly y: number;\n}") +
            '<div class="note">The <code>?</code> marks an optional field, while <code>readonly</code> prevents changing the value after the object is created.</div>',
        },
      },
      /* --- Lab 3 --- */
      {
        id: "b-lab3",
        type: "lab",
        xp: 45,
        title: { pl: "Interfejs i obiekt", en: "Interface and object" },
        prompt: {
          pl: "Zdefiniuj interfejs <code>Ksiazka</code> z polami <code>tytul</code> (string) i <code>strony</code> (number), a następnie utwórz obiekt <code>mojaKsiazka</code> tego typu.",
          en: "Define an interface <code>Book</code> with fields <code>title</code> (string) and <code>pages</code> (number), then create an object <code>myBook</code> of that type.",
        },
        tasks: [
          {
            desc: { pl: "Obiekt mojaKsiazka ma pole tytul typu string", en: "Object myBook has field title of type string" },
            test: 'assert(typeof mojaKsiazka === "object" && mojaKsiazka !== null, "Utwórz obiekt mojaKsiazka"); assert(typeof mojaKsiazka.tytul === "string", "tytul powinno być stringiem");',
          },
          {
            desc: { pl: "Obiekt mojaKsiazka ma pole strony typu number", en: "Object myBook has field pages of type number" },
            test: 'assert(typeof mojaKsiazka.strony === "number", "strony powinno być liczbą");',
          },
        ],
        starter:
          "interface Ksiazka {\n  // dodaj pola / add fields\n}\n\nconst mojaKsiazka: Ksiazka = {\n  // uzupełnij / fill in\n};\n",
        solution:
          "interface Ksiazka {\n  tytul: string;\n  strony: number;\n}\n\nconst mojaKsiazka: Ksiazka = {\n  tytul: \"Pan Tadeusz\",\n  strony: 380,\n};",
        hints: [
          { pl: "W interfejsie pola oddzielamy średnikiem lub przecinkiem.", en: "In an interface, separate fields with a semicolon or comma." },
          { pl: "Obiekt musi zawierać wszystkie wymagane pola interfejsu.", en: "The object must include all required fields of the interface." },
        ],
      },
    ],
  },

  /* ============================ INTERMEDIATE ============================ */
  {
    id: "intermediate",
    name: { pl: "Średnio zaawansowany", en: "Intermediate" },
    desc: {
      pl: "Klasy, generyki, union types oraz programowanie asynchroniczne (async/await).",
      en: "Classes, generics, union types and asynchronous programming (async/await).",
    },
    modules: [
      /* --- Lesson --- */
      {
        id: "i-l1",
        type: "lesson",
        xp: 25,
        title: { pl: "Klasy", en: "Classes" },
        body: {
          pl:
            "<p>Klasy łączą dane (pola) i zachowanie (metody). W TypeScript pola mają typy, a do dyspozycji są modyfikatory dostępu: <code>public</code>, <code>private</code>, <code>protected</code>.</p>" +
            codeBlock("class Konto {\n  private saldo: number;\n\n  constructor(poczatkowe: number) {\n    this.saldo = poczatkowe;\n  }\n\n  wplac(kwota: number): void {\n    this.saldo += kwota;\n  }\n\n  stan(): number {\n    return this.saldo;\n  }\n}\n\nconst k = new Konto(100);\nk.wplac(50);\nk.stan(); // 150") +
            '<div class="note">Skrót: parametr konstruktora z modyfikatorem (np. <code>constructor(private saldo: number)</code>) automatycznie tworzy i przypisuje pole.</div>',
          en:
            "<p>Classes bundle data (fields) and behavior (methods). In TypeScript fields have types, and you can use access modifiers: <code>public</code>, <code>private</code>, <code>protected</code>.</p>" +
            codeBlock("class Account {\n  private balance: number;\n\n  constructor(initial: number) {\n    this.balance = initial;\n  }\n\n  deposit(amount: number): void {\n    this.balance += amount;\n  }\n\n  state(): number {\n    return this.balance;\n  }\n}\n\nconst a = new Account(100);\na.deposit(50);\na.state(); // 150") +
            '<div class="note">Shortcut: a constructor parameter with a modifier (e.g. <code>constructor(private balance: number)</code>) automatically creates and assigns the field.</div>',
        },
      },
      /* --- Lab --- */
      {
        id: "i-lab1",
        type: "lab",
        xp: 50,
        title: { pl: "Klasa Licznik", en: "Counter class" },
        prompt: {
          pl: "Stwórz klasę <code>Licznik</code> z prywatnym polem <code>wartosc</code> (startuje od 0), metodą <code>zwieksz()</code> dodającą 1 oraz metodą <code>pobierz()</code> zwracającą aktualną wartość.",
          en: "Create a <code>Counter</code> class with a private field <code>value</code> (starts at 0), a method <code>increment()</code> adding 1, and a method <code>get()</code> returning the current value.",
        },
        tasks: [
          {
            desc: { pl: "new Licznik().pobierz() === 0", en: "new Counter().get() === 0" },
            test: 'const l = new Licznik(); assert(l.pobierz() === 0, "Licznik powinien startować od 0");',
          },
          {
            desc: { pl: "Po dwóch zwieksz() wartość to 2", en: "After two increments the value is 2" },
            test: 'const l2 = new Licznik(); l2.zwieksz(); l2.zwieksz(); assert(l2.pobierz() === 2, "Po dwóch zwiększeniach wynik to 2");',
          },
        ],
        starter:
          "class Licznik {\n  // zdefiniuj pole, metodę zwieksz() i pobierz()\n  // define a field, increment() and get()\n}\n",
        solution:
          "class Licznik {\n  private wartosc: number = 0;\n  zwieksz(): void { this.wartosc += 1; }\n  pobierz(): number { return this.wartosc; }\n}",
        hints: [
          { pl: "Pole możesz zainicjalizować od razu: <code>private wartosc: number = 0;</code>", en: "You can initialize the field directly: <code>private value: number = 0;</code>" },
          { pl: "W metodach odwołuj się do pola przez <code>this</code>.", en: "Refer to the field via <code>this</code> inside methods." },
        ],
      },
      /* --- Lesson --- */
      {
        id: "i-l2",
        type: "lesson",
        xp: 25,
        title: { pl: "Generyki", en: "Generics" },
        body: {
          pl:
            "<p>Generyki pozwalają pisać kod, który działa z <b>dowolnym typem</b>, zachowując bezpieczeństwo typów. Typ podajemy w nawiasach ostrokątnych <code>&lt;T&gt;</code>.</p>" +
            codeBlock("function pierwszy<T>(tablica: T[]): T {\n  return tablica[0];\n}\n\nconst liczba = pierwszy([1, 2, 3]);   // number\nconst tekst  = pierwszy([\"a\", \"b\"]);  // string") +
            "<h3>Generyczne interfejsy</h3>" +
            codeBlock("interface Pudelko<T> {\n  zawartosc: T;\n}\nconst p: Pudelko<string> = { zawartosc: \"hej\" };") +
            '<div class="note">Litera <code>T</code> to konwencja (od <i>Type</i>), ale możesz użyć dowolnej nazwy.</div>',
          en:
            "<p>Generics let you write code that works with <b>any type</b> while keeping type safety. We pass the type in angle brackets <code>&lt;T&gt;</code>.</p>" +
            codeBlock("function first<T>(arr: T[]): T {\n  return arr[0];\n}\n\nconst n = first([1, 2, 3]);   // number\nconst t = first([\"a\", \"b\"]);  // string") +
            "<h3>Generic interfaces</h3>" +
            codeBlock("interface Box<T> {\n  content: T;\n}\nconst b: Box<string> = { content: \"hi\" };") +
            '<div class="note">The letter <code>T</code> is a convention (for <i>Type</i>), but you may use any name.</div>',
        },
      },
      /* --- Lab --- */
      {
        id: "i-lab2",
        type: "lab",
        xp: 55,
        title: { pl: "Generyczna funkcja", en: "Generic function" },
        prompt: {
          pl: "Napisz generyczną funkcję <code>ostatni&lt;T&gt;</code>, która zwraca ostatni element tablicy dowolnego typu.",
          en: "Write a generic function <code>last&lt;T&gt;</code> that returns the last element of an array of any type.",
        },
        tasks: [
          {
            desc: { pl: "ostatni([1,2,3]) === 3", en: "last([1,2,3]) === 3" },
            test: 'assert(ostatni([1,2,3]) === 3, "Powinno zwrócić ostatni element 3");',
          },
          {
            desc: { pl: 'ostatni(["a","b"]) === "b"', en: 'last(["a","b"]) === "b"' },
            test: 'assert(ostatni(["a","b"]) === "b", "Powinno działać też dla stringów");',
          },
        ],
        starter:
          "function ostatni<T>(tablica: T[]): T {\n  // zwróć ostatni element / return the last element\n}\n",
        solution:
          "function ostatni<T>(tablica: T[]): T {\n  return tablica[tablica.length - 1];\n}",
        hints: [
          { pl: "Ostatni indeks tablicy to <code>length - 1</code>.", en: "The last index of an array is <code>length - 1</code>." },
        ],
      },
      /* --- Lesson --- */
      {
        id: "i-l3",
        type: "lesson",
        xp: 25,
        title: { pl: "Union types i literały", en: "Union types and literals" },
        body: {
          pl:
            "<p>Typ unii (<code>|</code>) oznacza „jedno z kilku”. Świetnie sprawdza się z typami literalnymi.</p>" +
            codeBlock('type Status = "aktywny" | "zawieszony" | "usuniety";\n\nfunction ustaw(status: Status) { /* ... */ }\nustaw("aktywny"); // OK\n// ustaw("inny"); // BŁĄD') +
            "<h3>Zawężanie typów (narrowing)</h3>" +
            codeBlock('function formatuj(x: string | number): string {\n  if (typeof x === "number") {\n    return x.toFixed(2);\n  }\n  return x.toUpperCase();\n}') +
            '<div class="note">Dzięki <code>typeof</code> kompilator wie, w której gałęzi <code>x</code> jest liczbą, a w której tekstem.</div>',
          en:
            "<p>A union type (<code>|</code>) means “one of several”. It pairs perfectly with literal types.</p>" +
            codeBlock('type Status = "active" | "suspended" | "deleted";\n\nfunction setStatus(status: Status) { /* ... */ }\nsetStatus("active"); // OK\n// setStatus("other"); // ERROR') +
            "<h3>Type narrowing</h3>" +
            codeBlock('function format(x: string | number): string {\n  if (typeof x === "number") {\n    return x.toFixed(2);\n  }\n  return x.toUpperCase();\n}') +
            '<div class="note">Thanks to <code>typeof</code>, the compiler knows in which branch <code>x</code> is a number and in which it is text.</div>',
        },
      },
      /* --- Quiz --- */
      {
        id: "i-q1",
        type: "quiz",
        xp: 35,
        title: { pl: "Quiz: klasy, generyki, unie", en: "Quiz: classes, generics, unions" },
        passRatio: 0.6,
        questions: [
          {
            type: "mc",
            q: { pl: "Który modyfikator ukrywa pole przed dostępem z zewnątrz klasy?", en: "Which modifier hides a field from outside the class?" },
            options: [
              { pl: "<code>public</code>", en: "<code>public</code>" },
              { pl: "<code>private</code>", en: "<code>private</code>" },
              { pl: "<code>readonly</code>", en: "<code>readonly</code>" },
              { pl: "<code>static</code>", en: "<code>static</code>" },
            ],
            answer: 1,
            explain: { pl: "<code>private</code> ogranicza dostęp do wnętrza klasy.", en: "<code>private</code> restricts access to inside the class." },
          },
          {
            type: "mc",
            q: { pl: "Co oznacza typ <code>string | number</code>?", en: "What does the type <code>string | number</code> mean?" },
            options: [
              { pl: "Wartość jest jednocześnie tekstem i liczbą", en: "The value is text and number at once" },
              { pl: "Wartość jest tekstem LUB liczbą", en: "The value is text OR number" },
              { pl: "Tablica tekstów i liczb", en: "An array of text and numbers" },
              { pl: "Błąd składni", en: "A syntax error" },
            ],
            answer: 1,
            explain: { pl: "Pionowa kreska to typ unii — „jedno z”.", en: "The vertical bar is a union — “one of”." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij parametr typu generycznego: <code>function id&lt;___&gt;(x: T): T</code>", en: "Fill in the generic type parameter: <code>function id&lt;___&gt;(x: T): T</code>" },
            answer: ["T"],
            explain: { pl: "Deklarujemy parametr typu <code>T</code> w nawiasach ostrokątnych.", en: "We declare the type parameter <code>T</code> in angle brackets." },
          },
        ],
      },
      /* --- Lesson async --- */
      {
        id: "i-l4",
        type: "lesson",
        xp: 25,
        title: { pl: "async / await", en: "async / await" },
        body: {
          pl:
            "<p>Operacje asynchroniczne (np. pobieranie danych) zwracają <code>Promise</code>. Słowo <code>async</code> sprawia, że funkcja zwraca Promise, a <code>await</code> czeka na wynik.</p>" +
            codeBlock("function poczekaj(ms: number): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"gotowe\"), ms);\n  });\n}\n\nasync function uruchom(): Promise<void> {\n  const wynik = await poczekaj(100);\n  console.log(wynik); // \"gotowe\"\n}") +
            '<div class="note warn"><code>await</code> można używać tylko wewnątrz funkcji oznaczonej <code>async</code>.</div>',
          en:
            "<p>Asynchronous operations (e.g. fetching data) return a <code>Promise</code>. The <code>async</code> keyword makes a function return a Promise, and <code>await</code> waits for the result.</p>" +
            codeBlock("function wait(ms: number): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"done\"), ms);\n  });\n}\n\nasync function run(): Promise<void> {\n  const result = await wait(100);\n  console.log(result); // \"done\"\n}") +
            '<div class="note warn">You can only use <code>await</code> inside a function marked <code>async</code>.</div>',
        },
      },
      /* --- Lab async --- */
      {
        id: "i-lab3",
        type: "lab",
        xp: 60,
        title: { pl: "Asynchroniczna funkcja", en: "Async function" },
        prompt: {
          pl: "Napisz <code>async</code> funkcję <code>podwojonyPo</code>, która przyjmuje liczbę i zwraca <code>Promise</code> z jej podwojoną wartością. Użyj <code>await</code> na pomocniczej funkcji <code>daj</code>.",
          en: "Write an <code>async</code> function <code>doubledOf</code> that takes a number and returns a <code>Promise</code> with its doubled value. Use <code>await</code> on the helper <code>give</code>.",
        },
        tasks: [
          {
            desc: { pl: "await podwojonyPo(5) === 10", en: "await doubledOf(5) === 10" },
            test: 'const r = await podwojonyPo(5); assert(r === 10, "Dla 5 wynik to 10");',
          },
          {
            desc: { pl: "podwojonyPo zwraca Promise", en: "doubledOf returns a Promise" },
            test: 'assert(podwojonyPo(1) instanceof Promise, "Funkcja powinna zwracać Promise");',
          },
        ],
        asyncTest: true,
        starter:
          "function daj(x: number): Promise<number> {\n  return Promise.resolve(x);\n}\n\nasync function podwojonyPo(n: number): Promise<number> {\n  // użyj await na daj(n) i zwróć podwojoną wartość\n  // use await on daj(n) and return the doubled value\n}\n",
        solution:
          "function daj(x: number): Promise<number> {\n  return Promise.resolve(x);\n}\n\nasync function podwojonyPo(n: number): Promise<number> {\n  const v = await daj(n);\n  return v * 2;\n}",
        hints: [
          { pl: "Pobierz wartość: <code>const v = await daj(n);</code>", en: "Get the value: <code>const v = await give(n);</code>" },
          { pl: "Następnie zwróć <code>v * 2</code>.", en: "Then return <code>v * 2</code>." },
        ],
      },
    ],
  },

  /* ============================ ADVANCED ============================ */
  {
    id: "advanced",
    name: { pl: "Zaawansowany", en: "Advanced" },
    desc: {
      pl: "Utility types, typy warunkowe i mapowane, dekoratory oraz zaawansowane wzorce.",
      en: "Utility types, conditional & mapped types, decorators and advanced patterns.",
    },
    modules: [
      /* --- Lesson utility types --- */
      {
        id: "a-l1",
        type: "lesson",
        xp: 30,
        title: { pl: "Utility Types", en: "Utility Types" },
        body: {
          pl:
            "<p>TypeScript dostarcza gotowe typy pomocnicze, które przekształcają inne typy.</p>" +
            "<ul><li><code>Partial&lt;T&gt;</code> — wszystkie pola opcjonalne</li><li><code>Required&lt;T&gt;</code> — wszystkie pola wymagane</li><li><code>Readonly&lt;T&gt;</code> — wszystkie pola tylko do odczytu</li><li><code>Pick&lt;T, K&gt;</code> — wybrane pola</li><li><code>Omit&lt;T, K&gt;</code> — wszystkie pola oprócz wskazanych</li><li><code>Record&lt;K, V&gt;</code> — obiekt o kluczach K i wartościach V</li></ul>" +
            codeBlock("interface Uzytkownik {\n  id: number;\n  imie: string;\n  email: string;\n}\n\ntype NowyUzytkownik = Omit<Uzytkownik, \"id\">;\ntype Podglad = Pick<Uzytkownik, \"id\" | \"imie\">;\ntype Mapa = Record<string, number>;") +
            '<div class="note">Utility types oszczędzają mnóstwo powtarzania — zamiast definiować nowy interfejs, przekształcasz istniejący.</div>',
          en:
            "<p>TypeScript ships with ready-made utility types that transform other types.</p>" +
            "<ul><li><code>Partial&lt;T&gt;</code> — all fields optional</li><li><code>Required&lt;T&gt;</code> — all fields required</li><li><code>Readonly&lt;T&gt;</code> — all fields read-only</li><li><code>Pick&lt;T, K&gt;</code> — selected fields</li><li><code>Omit&lt;T, K&gt;</code> — all fields except the listed ones</li><li><code>Record&lt;K, V&gt;</code> — object with keys K and values V</li></ul>" +
            codeBlock("interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype NewUser = Omit<User, \"id\">;\ntype Preview = Pick<User, \"id\" | \"name\">;\ntype Map = Record<string, number>;") +
            '<div class="note">Utility types save tons of repetition — instead of defining a new interface you transform an existing one.</div>',
        },
      },
      /* --- Lab utility / picking --- */
      {
        id: "a-lab1",
        type: "lab",
        xp: 65,
        title: { pl: "Funkcja wybierająca pola", en: "Field-picking function" },
        prompt: {
          pl: "Zaimplementuj generyczną funkcję <code>wybierz</code>, która działa jak <code>Pick</code> w czasie wykonania: przyjmuje obiekt i tablicę kluczy, a zwraca nowy obiekt zawierający tylko wskazane klucze.",
          en: "Implement a generic function <code>pick</code> that behaves like <code>Pick</code> at runtime: it takes an object and a list of keys and returns a new object containing only those keys.",
        },
        tasks: [
          {
            desc: { pl: 'wybierz({a:1,b:2,c:3}, ["a","c"]) → {a:1,c:3}', en: 'pick({a:1,b:2,c:3}, ["a","c"]) → {a:1,c:3}' },
            test: 'const o = wybierz({a:1,b:2,c:3} as any, ["a","c"] as any); assert(JSON.stringify(o) === JSON.stringify({a:1,c:3}), "Powinno zwrócić tylko a i c");',
          },
          {
            desc: { pl: "Oryginalny obiekt nie zawiera pominiętych kluczy", en: "Result has no other keys" },
            test: 'const o2 = wybierz({x:10,y:20} as any, ["y"] as any); assert(!("x" in o2), "Klucz x nie powinien istnieć"); assert((o2 as any).y === 20, "y powinno być 20");',
          },
        ],
        starter:
          "function wybierz<T, K extends keyof T>(obiekt: T, klucze: K[]): Pick<T, K> {\n  // zbuduj i zwróć nowy obiekt z wybranymi kluczami\n  // build and return a new object with the selected keys\n}\n",
        solution:
          "function wybierz<T, K extends keyof T>(obiekt: T, klucze: K[]): Pick<T, K> {\n  const wynik = {} as Pick<T, K>;\n  for (const k of klucze) {\n    wynik[k] = obiekt[k];\n  }\n  return wynik;\n}",
        hints: [
          { pl: "Stwórz pusty obiekt, a potem przejdź pętlą po tablicy kluczy.", en: "Create an empty object, then loop over the keys array." },
          { pl: "Kopiuj wartość: <code>wynik[k] = obiekt[k];</code>", en: "Copy the value: <code>result[k] = object[k];</code>" },
        ],
      },
      /* --- Lesson conditional / mapped --- */
      {
        id: "a-l2",
        type: "lesson",
        xp: 30,
        title: { pl: "Typy warunkowe i mapowane", en: "Conditional & mapped types" },
        body: {
          pl:
            "<p><b>Typy warunkowe</b> przypominają operator trójargumentowy, ale działają na typach.</p>" +
            codeBlock("type CzyTablica<T> = T extends any[] ? \"tak\" : \"nie\";\ntype A = CzyTablica<number[]>; // \"tak\"\ntype B = CzyTablica<number>;   // \"nie\"") +
            "<h3>Słowo kluczowe infer</h3>" +
            codeBlock("type ElementTablicy<T> = T extends (infer U)[] ? U : never;\ntype E = ElementTablicy<string[]>; // string") +
            "<h3>Typy mapowane</h3>" +
            codeBlock("type Opcjonalne<T> = {\n  [K in keyof T]?: T[K];\n};") +
            '<div class="note">To dokładnie tak działa wbudowany <code>Partial&lt;T&gt;</code>.</div>',
          en:
            "<p><b>Conditional types</b> resemble the ternary operator, but they work on types.</p>" +
            codeBlock("type IsArray<T> = T extends any[] ? \"yes\" : \"no\";\ntype A = IsArray<number[]>; // \"yes\"\ntype B = IsArray<number>;   // \"no\"") +
            "<h3>The infer keyword</h3>" +
            codeBlock("type ElementOf<T> = T extends (infer U)[] ? U : never;\ntype E = ElementOf<string[]>; // string") +
            "<h3>Mapped types</h3>" +
            codeBlock("type Optional<T> = {\n  [K in keyof T]?: T[K];\n};") +
            '<div class="note">This is exactly how the built-in <code>Partial&lt;T&gt;</code> works.</div>',
        },
      },
      /* --- Quiz advanced types --- */
      {
        id: "a-q1",
        type: "quiz",
        xp: 40,
        title: { pl: "Quiz: zaawansowane typy", en: "Quiz: advanced types" },
        passRatio: 0.66,
        questions: [
          {
            type: "mc",
            q: { pl: "Który utility type tworzy typ ze wszystkimi polami opcjonalnymi?", en: "Which utility type makes all fields optional?" },
            options: [
              { pl: "<code>Required&lt;T&gt;</code>", en: "<code>Required&lt;T&gt;</code>" },
              { pl: "<code>Partial&lt;T&gt;</code>", en: "<code>Partial&lt;T&gt;</code>" },
              { pl: "<code>Readonly&lt;T&gt;</code>", en: "<code>Readonly&lt;T&gt;</code>" },
              { pl: "<code>Pick&lt;T&gt;</code>", en: "<code>Pick&lt;T&gt;</code>" },
            ],
            answer: 1,
            explain: { pl: "<code>Partial&lt;T&gt;</code> zamienia wszystkie pola na opcjonalne.", en: "<code>Partial&lt;T&gt;</code> turns all fields optional." },
          },
          {
            type: "mc",
            q: { pl: "Czego dotyczy słowo kluczowe <code>infer</code>?", en: "What is the <code>infer</code> keyword used for?" },
            options: [
              { pl: "Importu modułów", en: "Importing modules" },
              { pl: "Wnioskowania (wyciągania) typu w typie warunkowym", en: "Inferring (extracting) a type inside a conditional type" },
              { pl: "Deklaracji zmiennej", en: "Declaring a variable" },
              { pl: "Rzutowania wartości", en: "Casting a value" },
            ],
            answer: 1,
            explain: { pl: "<code>infer</code> pozwala „złapać” fragment typu w gałęzi warunkowej.", en: "<code>infer</code> lets you capture a piece of a type in a conditional branch." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij, by usunąć pole z typu: <code>type T = ___&lt;User, \"id\"&gt;</code>", en: "Fill in to remove a field from a type: <code>type T = ___&lt;User, \"id\"&gt;</code>" },
            answer: ["Omit"],
            explain: { pl: "<code>Omit&lt;T, K&gt;</code> usuwa wskazane klucze.", en: "<code>Omit&lt;T, K&gt;</code> removes the listed keys." },
          },
        ],
      },
      /* --- Lesson decorators --- */
      {
        id: "a-l3",
        type: "lesson",
        xp: 30,
        title: { pl: "Dekoratory", en: "Decorators" },
        body: {
          pl:
            "<p>Dekoratory to funkcje, które „opakowują” klasy, metody lub pola, dodając do nich dodatkowe zachowanie. Aby ich użyć, włącz opcję <code>experimentalDecorators</code> (w naszych laboratoriach jest już włączona).</p>" +
            "<h3>Dekorator metody</h3>" +
            codeBlock("function loguj(target: any, klucz: string, opis: PropertyDescriptor) {\n  const oryginal = opis.value;\n  opis.value = function (...args: any[]) {\n    console.log(\"Wywołano: \" + klucz);\n    return oryginal.apply(this, args);\n  };\n}\n\nclass Serwis {\n  @loguj\n  pobierz() { return 42; }\n}") +
            '<div class="note">Dekorator metody dostaje obiekt, nazwę metody i jej <code>PropertyDescriptor</code>. Podmieniając <code>opis.value</code>, zmieniamy działanie metody.</div>',
          en:
            "<p>Decorators are functions that “wrap” classes, methods or fields, adding extra behavior. To use them, enable <code>experimentalDecorators</code> (already enabled in our labs).</p>" +
            "<h3>Method decorator</h3>" +
            codeBlock("function log(target: any, key: string, desc: PropertyDescriptor) {\n  const original = desc.value;\n  desc.value = function (...args: any[]) {\n    console.log(\"Called: \" + key);\n    return original.apply(this, args);\n  };\n}\n\nclass Service {\n  @log\n  fetch() { return 42; }\n}") +
            '<div class="note">A method decorator receives the object, the method name and its <code>PropertyDescriptor</code>. By swapping <code>desc.value</code> we change how the method behaves.</div>',
        },
      },
      /* --- Lab decorators --- */
      {
        id: "a-lab2",
        type: "lab",
        xp: 80,
        title: { pl: "Dekorator zliczający wywołania", en: "Call-counting decorator" },
        prompt: {
          pl: "Napisz dekorator metody <code>zliczaj</code>, który przy każdym wywołaniu metody zwiększa licznik zapisywany na instancji w polu <code>liczbaWywolan</code>.",
          en: "Write a method decorator <code>countCalls</code> that increments a counter stored on the instance in a field <code>callCount</code> on every method call.",
        },
        decorators: true,
        tasks: [
          {
            desc: { pl: "Po 3 wywołaniach metody liczbaWywolan === 3", en: "After 3 calls callCount === 3" },
            test: 'const s = new Robot(); s.skacz(); s.skacz(); s.skacz(); assert((s as any).liczbaWywolan === 3, "Licznik powinien wynosić 3");',
          },
          {
            desc: { pl: "Metoda nadal zwraca swój oryginalny wynik", en: "The method still returns its original value" },
            test: 'const s2 = new Robot(); assert(s2.skacz() === "hop", "Metoda powinna zwracać \\"hop\\"");',
          },
        ],
        starter:
          "function zliczaj(target: any, klucz: string, opis: PropertyDescriptor) {\n  // opakuj opis.value tak, aby zliczać wywołania na instancji\n  // wrap opis.value so it counts calls on the instance\n}\n\nclass Robot {\n  @zliczaj\n  skacz(): string {\n    return \"hop\";\n  }\n}\n",
        solution:
          "function zliczaj(target: any, klucz: string, opis: PropertyDescriptor) {\n  const oryginal = opis.value;\n  opis.value = function (...args: any[]) {\n    this.liczbaWywolan = (this.liczbaWywolan || 0) + 1;\n    return oryginal.apply(this, args);\n  };\n}\n\nclass Robot {\n  @zliczaj\n  skacz(): string {\n    return \"hop\";\n  }\n}",
        hints: [
          { pl: "Zapamiętaj oryginalną metodę: <code>const oryginal = opis.value;</code>", en: "Remember the original method: <code>const original = desc.value;</code>" },
          { pl: "W nowej funkcji: <code>this.liczbaWywolan = (this.liczbaWywolan || 0) + 1;</code> a potem <code>return oryginal.apply(this, args);</code>", en: "In the new function: <code>this.callCount = (this.callCount || 0) + 1;</code> then <code>return original.apply(this, args);</code>" },
        ],
      },
      /* --- Final quiz --- */
      {
        id: "a-q2",
        type: "quiz",
        xp: 50,
        title: { pl: "Egzamin końcowy", en: "Final exam" },
        passRatio: 0.7,
        questions: [
          {
            type: "mc",
            q: { pl: "Co włącza opcja <code>experimentalDecorators</code>?", en: "What does <code>experimentalDecorators</code> enable?" },
            options: [
              { pl: "Generyki", en: "Generics" },
              { pl: "Składnię dekoratorów <code>@</code>", en: "The <code>@</code> decorator syntax" },
              { pl: "async/await", en: "async/await" },
              { pl: "Union types", en: "Union types" },
            ],
            answer: 1,
            explain: { pl: "Bez tej opcji składnia <code>@dekorator</code> nie skompiluje się.", en: "Without it the <code>@decorator</code> syntax won't compile." },
          },
          {
            type: "mc",
            q: { pl: "Co zwróci <code>ReturnType&lt;() =&gt; string&gt;</code>?", en: "What does <code>ReturnType&lt;() =&gt; string&gt;</code> produce?" },
            options: [
              { pl: "<code>void</code>", en: "<code>void</code>" },
              { pl: "<code>string</code>", en: "<code>string</code>" },
              { pl: "<code>Function</code>", en: "<code>Function</code>" },
              { pl: "<code>never</code>", en: "<code>never</code>" },
            ],
            answer: 1,
            explain: { pl: "<code>ReturnType</code> wyciąga typ zwracany funkcji — tutaj <code>string</code>.", en: "<code>ReturnType</code> extracts a function's return type — here <code>string</code>." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij operator unii typów: <code>type Id = string ___ number</code>", en: "Fill in the union operator: <code>type Id = string ___ number</code>" },
            answer: ["|"],
            explain: { pl: "Typ unii zapisujemy pionową kreską <code>|</code>.", en: "A union type uses the vertical bar <code>|</code>." },
          },
          {
            type: "mc",
            q: { pl: "Które słowo kluczowe daje dostęp do kluczy typu <code>T</code>?", en: "Which keyword gives access to the keys of type <code>T</code>?" },
            options: [
              { pl: "<code>typeof</code>", en: "<code>typeof</code>" },
              { pl: "<code>keyof</code>", en: "<code>keyof</code>" },
              { pl: "<code>infer</code>", en: "<code>infer</code>" },
              { pl: "<code>in</code>", en: "<code>in</code>" },
            ],
            answer: 1,
            explain: { pl: "<code>keyof T</code> daje unię nazw kluczy typu <code>T</code>.", en: "<code>keyof T</code> gives the union of key names of type <code>T</code>." },
          },
        ],
      },
    ],
  },

  /* ============================ TYPESCRIPT PRO ============================ */
  {
    id: "pro",
    name: { pl: "TypeScript Pro", en: "TypeScript Pro" },
    desc: {
      pl: "Type guards, zawężanie typów, unknown, zaawansowane generyki i obsługa błędów — fundament profesjonalnego, bezpiecznego kodu.",
      en: "Type guards, narrowing, unknown, advanced generics and error handling — the foundation of professional, safe code.",
    },
    modules: [
      {
        id: "p-l1",
        type: "lesson",
        xp: 30,
        title: { pl: "Enumy i const assertions", en: "Enums & const assertions" },
        body: {
          pl:
            "<p>Do zbiorów stałych wartości (statusy testów, role, środowiska) używamy <b>enumów</b> albo — częściej w nowoczesnym kodzie — tablic/obiektów z <code>as const</code>.</p>" +
            codeBlock("enum Status {\n  Passed = \"passed\",\n  Failed = \"failed\",\n}\n\n// Nowoczesne podejście: literały + as const\nconst ROLE = [\"admin\", \"user\", \"guest\"] as const;\ntype Rola = typeof ROLE[number]; // \"admin\" | \"user\" | \"guest\"") +
            "<p><code>as const</code> „zamraża\" wartości i zawęża ich typ do dokładnych literałów. Idealne do danych testowych i konfiguracji.</p>" +
            '<div class="note">W automatyzacji testów literały (np. lista dozwolonych statusów) pozwalają kompilatorowi wyłapać literówkę, zanim test się uruchomi.</div>',
          en:
            "<p>For fixed sets of values (test statuses, roles, environments) we use <b>enums</b> or — more often in modern code — arrays/objects with <code>as const</code>.</p>" +
            codeBlock("enum Status {\n  Passed = \"passed\",\n  Failed = \"failed\",\n}\n\n// Modern approach: literals + as const\nconst ROLE = [\"admin\", \"user\", \"guest\"] as const;\ntype Role = typeof ROLE[number]; // \"admin\" | \"user\" | \"guest\"") +
            "<p><code>as const</code> freezes the values and narrows their type to exact literals. Perfect for test data and config.</p>" +
            '<div class="note">In test automation, literals (e.g. a list of allowed statuses) let the compiler catch a typo before the test even runs.</div>',
        },
      },
      {
        id: "p-lab1",
        type: "lab",
        xp: 55,
        title: { pl: "Dozwolone statusy", en: "Allowed statuses" },
        prompt: {
          pl: "Utwórz stałą <code>STATUSY</code> (z <code>as const</code>) z wartościami <code>\"passed\"</code>, <code>\"failed\"</code>, <code>\"skipped\"</code> oraz funkcję <code>czyStatus(x)</code> zwracającą, czy podany tekst jest jednym z dozwolonych statusów.",
          en: "Create a constant <code>STATUSES</code> (with <code>as const</code>) holding <code>\"passed\"</code>, <code>\"failed\"</code>, <code>\"skipped\"</code> and a function <code>isStatus(x)</code> returning whether a given text is one of the allowed statuses.",
        },
        tasks: [
          { desc: { pl: "STATUSY ma 3 elementy", en: "STATUSES has 3 items" }, test: 'assert(Array.isArray(STATUSY) && STATUSY.length === 3, "STATUSY powinno mieć 3 elementy");' },
          { desc: { pl: 'czyStatus("passed") === true', en: 'isStatus("passed") === true' }, test: 'assert(czyStatus("passed") === true, "passed jest dozwolonym statusem");' },
          { desc: { pl: 'czyStatus("nieznany") === false', en: 'isStatus("unknown") === false' }, test: 'assert(czyStatus("nieznany") === false, "nieznany nie jest statusem");' },
        ],
        starter:
          "const STATUSY = [] as const;\n\nfunction czyStatus(x: string): boolean {\n  // sprawdź, czy x jest jednym ze STATUSY\n  // check whether x is one of STATUSY\n  return false;\n}\n",
        solution:
          "const STATUSY = [\"passed\", \"failed\", \"skipped\"] as const;\n\nfunction czyStatus(x: string): boolean {\n  return (STATUSY as readonly string[]).includes(x);\n}",
        hints: [
          { pl: "Tablica ma metodę <code>includes(x)</code>.", en: "Arrays have an <code>includes(x)</code> method." },
          { pl: "Aby użyć includes na tablicy <code>as const</code>, rzutuj ją na <code>readonly string[]</code>.", en: "To use includes on an <code>as const</code> array, cast it to <code>readonly string[]</code>." },
        ],
      },
      {
        id: "p-l2",
        type: "lesson",
        xp: 32,
        title: { pl: "Zawężanie typów i type guards", en: "Narrowing & type guards" },
        body: {
          pl:
            "<p>Zawężanie (narrowing) to proces, w którym kompilator zacieśnia typ na podstawie sprawdzeń: <code>typeof</code>, <code>instanceof</code>, <code>in</code> oraz <b>discriminated unions</b>.</p>" +
            codeBlock("function opis(x: string | number): string {\n  if (typeof x === \"number\") return x.toFixed(1);\n  return x.trim(); // tutaj x to już string\n}") +
            "<h3>Discriminated union + wyczerpanie (never)</h3>" +
            codeBlock("type Zdarzenie =\n  | { typ: \"klik\"; x: number; y: number }\n  | { typ: \"klawisz\"; kod: string };\n\nfunction obsluz(e: Zdarzenie): string | number {\n  switch (e.typ) {\n    case \"klik\": return e.x + e.y;\n    case \"klawisz\": return e.kod;\n    default:\n      const _w: never = e; // błąd kompilacji, gdy dodasz nowy wariant\n      return _w;\n  }\n}") +
            "<h3>Własny strażnik typu (type predicate)</h3>" +
            codeBlock("function jestTablica(x: unknown): x is unknown[] {\n  return Array.isArray(x);\n}") +
            '<div class="note">Zwrot <code>x is T</code> mówi kompilatorowi: „jeśli ta funkcja zwróci true, traktuj x jak typ T\". To filar bezpiecznej pracy z danymi z API.</div>',
          en:
            "<p>Narrowing is when the compiler tightens a type based on checks: <code>typeof</code>, <code>instanceof</code>, <code>in</code> and <b>discriminated unions</b>.</p>" +
            codeBlock("function describe(x: string | number): string {\n  if (typeof x === \"number\") return x.toFixed(1);\n  return x.trim(); // here x is already string\n}") +
            "<h3>Discriminated union + exhaustiveness (never)</h3>" +
            codeBlock("type Event =\n  | { type: \"click\"; x: number; y: number }\n  | { type: \"key\"; code: string };\n\nfunction handle(e: Event): string | number {\n  switch (e.type) {\n    case \"click\": return e.x + e.y;\n    case \"key\": return e.code;\n    default:\n      const _e: never = e; // compile error when you add a new variant\n      return _e;\n  }\n}") +
            "<h3>Custom type guard (type predicate)</h3>" +
            codeBlock("function isArray(x: unknown): x is unknown[] {\n  return Array.isArray(x);\n}") +
            '<div class="note">Returning <code>x is T</code> tells the compiler: “if this returns true, treat x as type T\". A pillar of safely handling API data.</div>',
        },
      },
      {
        id: "p-lab2",
        type: "lab",
        xp: 60,
        title: { pl: "Discriminated union", en: "Discriminated union" },
        prompt: {
          pl: "Mamy typ <code>Figura</code> = koło lub prostokąt. Napisz funkcję <code>pole(f)</code>, która na podstawie pola <code>kind</code> liczy pole figury (koło: <code>π·r²</code>, prostokąt: <code>w·h</code>).",
          en: "We have a type <code>Shape</code> = circle or rectangle. Write a function <code>area(f)</code> that, based on the <code>kind</code> field, computes the area (circle: <code>π·r²</code>, rectangle: <code>w·h</code>).",
        },
        tasks: [
          { desc: { pl: 'pole({kind:"kolo", r:2}) ≈ π·4', en: 'area({kind:"circle", r:2}) ≈ π·4' }, test: 'assert(Math.abs(pole({ kind: "kolo", r: 2 }) - Math.PI * 4) < 1e-9, "Pole koła dla r=2");' },
          { desc: { pl: 'pole({kind:"prostokat", w:3, h:4}) === 12', en: 'area({kind:"rect", w:3, h:4}) === 12' }, test: 'assert(pole({ kind: "prostokat", w: 3, h: 4 }) === 12, "Pole prostokąta 3×4 = 12");' },
        ],
        starter:
          "type Figura =\n  | { kind: \"kolo\"; r: number }\n  | { kind: \"prostokat\"; w: number; h: number };\n\nfunction pole(f: Figura): number {\n  // rozróżnij warianty po f.kind\n  // switch on f.kind\n  return 0;\n}\n",
        solution:
          "type Figura =\n  | { kind: \"kolo\"; r: number }\n  | { kind: \"prostokat\"; w: number; h: number };\n\nfunction pole(f: Figura): number {\n  switch (f.kind) {\n    case \"kolo\": return Math.PI * f.r * f.r;\n    case \"prostokat\": return f.w * f.h;\n  }\n}",
        hints: [
          { pl: "Użyj <code>switch (f.kind)</code> — w każdej gałęzi TypeScript zna dokładny kształt obiektu.", en: "Use <code>switch (f.kind)</code> — in each branch TypeScript knows the exact shape." },
          { pl: "Pole koła to <code>Math.PI * r * r</code>.", en: "Circle area is <code>Math.PI * r * r</code>." },
        ],
      },
      {
        id: "p-lab3",
        type: "lab",
        xp: 60,
        title: { pl: "Strażnik typu", en: "Type guard" },
        prompt: {
          pl: "Napisz strażnik <code>jestTekstem(x): x is string</code> oraz funkcję <code>bezpiecznyUpper(x)</code>, która zwraca tekst wielkimi literami, gdy <code>x</code> jest stringiem, a w przeciwnym razie pusty string.",
          en: "Write a guard <code>isText(x): x is string</code> and a function <code>safeUpper(x)</code> that returns the uppercased text when <code>x</code> is a string, otherwise an empty string.",
        },
        tasks: [
          { desc: { pl: 'jestTekstem("abc") === true, jestTekstem(123) === false', en: 'isText("abc") === true, isText(123) === false' }, test: 'assert(jestTekstem("abc") === true && jestTekstem(123) === false, "Strażnik powinien rozpoznawać tylko string");' },
          { desc: { pl: 'bezpiecznyUpper("abc") === "ABC"', en: 'safeUpper("abc") === "ABC"' }, test: 'assert(bezpiecznyUpper("abc") === "ABC", "Dla tekstu wielkie litery");' },
          { desc: { pl: 'bezpiecznyUpper(123) === ""', en: 'safeUpper(123) === ""' }, test: 'assert(bezpiecznyUpper(123) === "", "Dla nie-tekstu pusty string");' },
        ],
        starter:
          "function jestTekstem(x: unknown): x is string {\n  // zwróć true tylko dla stringa\n  return false;\n}\n\nfunction bezpiecznyUpper(x: unknown): string {\n  // użyj strażnika, by bezpiecznie wywołać toUpperCase()\n  return \"\";\n}\n",
        solution:
          "function jestTekstem(x: unknown): x is string {\n  return typeof x === \"string\";\n}\n\nfunction bezpiecznyUpper(x: unknown): string {\n  return jestTekstem(x) ? x.toUpperCase() : \"\";\n}",
        hints: [
          { pl: "Strażnik: <code>return typeof x === \"string\";</code>", en: "Guard: <code>return typeof x === \"string\";</code>" },
          { pl: "Po sprawdzeniu strażnikiem możesz bezpiecznie wołać <code>x.toUpperCase()</code>.", en: "After the guard check you can safely call <code>x.toUpperCase()</code>." },
        ],
      },
      {
        id: "p-q1",
        type: "quiz",
        xp: 40,
        title: { pl: "Quiz: zawężanie i strażniki", en: "Quiz: narrowing & guards" },
        passRatio: 0.66,
        questions: [
          {
            type: "mc",
            q: { pl: "Jak nazywa się wspólne pole, po którym rozróżniamy warianty w discriminated union?", en: "What is the shared field used to distinguish variants in a discriminated union called?" },
            options: [
              { pl: "Dyskryminator (np. <code>kind</code>/<code>type</code>)", en: "Discriminant (e.g. <code>kind</code>/<code>type</code>)" },
              { pl: "Konstruktor", en: "Constructor" },
              { pl: "Dekorator", en: "Decorator" },
              { pl: "Generyk", en: "Generic" },
            ],
            answer: 0,
            explain: { pl: "To pole-dyskryminator (np. literał w <code>kind</code>) pozwala kompilatorowi zawęzić typ w każdej gałęzi.", en: "The discriminant field (e.g. a literal in <code>kind</code>) lets the compiler narrow the type in each branch." },
          },
          {
            type: "mc",
            q: { pl: "Co daje przypisanie <code>const _w: never = e;</code> w gałęzi <code>default</code> switcha?", en: "What does <code>const _e: never = e;</code> in a switch <code>default</code> give you?" },
            options: [
              { pl: "Przyspiesza działanie", en: "Speeds things up" },
              { pl: "Sprawdzenie wyczerpania — błąd, gdy zapomnisz obsłużyć nowy wariant", en: "Exhaustiveness check — an error if you forget to handle a new variant" },
              { pl: "Tworzy nowy typ", en: "Creates a new type" },
              { pl: "Nic, to błąd", en: "Nothing, it's a bug" },
            ],
            answer: 1,
            explain: { pl: "Jeśli dodasz nowy wariant unii i go nie obsłużysz, <code>e</code> nie będzie <code>never</code> i kompilator zgłosi błąd.", en: "If you add a new union variant and don't handle it, <code>e</code> won't be <code>never</code> and the compiler errors." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij sygnaturę strażnika typu: <code>function isFoo(x: unknown): x ___ Foo</code>", en: "Fill in the type guard signature: <code>function isFoo(x: unknown): x ___ Foo</code>" },
            answer: ["is"],
            explain: { pl: "Predykat typu zapisujemy jako <code>x is T</code>.", en: "A type predicate is written as <code>x is T</code>." },
          },
        ],
      },
      {
        id: "p-l3",
        type: "lesson",
        xp: 32,
        title: { pl: "unknown vs any i walidacja danych", en: "unknown vs any & data validation" },
        body: {
          pl:
            "<p><code>any</code> wyłącza sprawdzanie typów — to „ucieczka\", która rozsadza bezpieczeństwo. <code>unknown</code> jest bezpieczną wersją: też przyjmie wszystko, ale <b>zanim go użyjesz, musisz zawęzić typ</b>.</p>" +
            codeBlock("const dane: unknown = JSON.parse(odpowiedz);\n\n// dane.imie;  // BŁĄD — unknown trzeba najpierw zawęzić\nif (typeof dane === \"object\" && dane !== null && \"imie\" in dane) {\n  // dopiero teraz bezpieczny dostęp\n}") +
            '<div class="note warn">Dane z API, <code>JSON.parse</code>, parametry CLI — traktuj je jako <code>unknown</code> i waliduj. To różnica między testem, który pada z czytelnym komunikatem, a takim, który „cicho\" robi coś złego.</div>' +
            "<p>W produkcyjnych frameworkach do walidacji używa się bibliotek jak <code>zod</code>, ale zasada jest ta sama: nieufne dane → walidacja → typ.</p>",
          en:
            "<p><code>any</code> turns off type checking — an “escape hatch\" that blows up safety. <code>unknown</code> is its safe version: it also accepts anything, but <b>you must narrow the type before using it</b>.</p>" +
            codeBlock("const data: unknown = JSON.parse(response);\n\n// data.name;  // ERROR — unknown must be narrowed first\nif (typeof data === \"object\" && data !== null && \"name\" in data) {\n  // only now is access safe\n}") +
            '<div class="note warn">API data, <code>JSON.parse</code>, CLI args — treat them as <code>unknown</code> and validate. That is the difference between a test that fails with a clear message and one that silently does the wrong thing.</div>' +
            "<p>Production frameworks use validation libraries like <code>zod</code>, but the principle is the same: untrusted data → validation → type.</p>",
        },
      },
      {
        id: "p-lab4",
        type: "lab",
        xp: 70,
        title: { pl: "Walidacja odpowiedzi", en: "Response validation" },
        prompt: {
          pl: "Napisz <code>parseUzytkownik(dane: unknown)</code>, który sprawdza, że <code>dane</code> to obiekt z polem <code>imie</code> (string) i <code>wiek</code> (number). Gdy dane są poprawne — zwróć obiekt; gdy nie — rzuć <code>Error</code>.",
          en: "Write <code>parseUser(data: unknown)</code> that checks <code>data</code> is an object with <code>name</code> (string) and <code>age</code> (number). When valid — return the object; otherwise — throw an <code>Error</code>.",
        },
        tasks: [
          { desc: { pl: "Poprawne dane zwracają obiekt", en: "Valid data returns the object" }, test: 'const u = parseUzytkownik({ imie: "Ada", wiek: 30 }); assert(u.imie === "Ada" && u.wiek === 30, "Powinno zwrócić poprawny obiekt");' },
          { desc: { pl: "Brak pola wiek → wyjątek", en: "Missing age → throws" }, test: 'let z = false; try { parseUzytkownik({ imie: "Ada" }); } catch (e) { z = true; } assert(z, "Brak pola wiek powinien rzucić błąd");' },
          { desc: { pl: "Wartość nie-obiektowa → wyjątek", en: "Non-object value → throws" }, test: 'let z2 = false; try { parseUzytkownik("tekst"); } catch (e) { z2 = true; } assert(z2, "Nie-obiekt powinien rzucić błąd");' },
        ],
        starter:
          "function parseUzytkownik(dane: unknown): { imie: string; wiek: number } {\n  // 1) sprawdź, że dane to obiekt (i nie null)\n  // 2) sprawdź typy pól imie i wiek\n  // 3) zwróć obiekt lub rzuć Error\n  throw new Error(\"Niezaimplementowane\");\n}\n",
        solution:
          "function parseUzytkownik(dane: unknown): { imie: string; wiek: number } {\n  if (typeof dane !== \"object\" || dane === null) {\n    throw new Error(\"Oczekiwano obiektu\");\n  }\n  const o = dane as Record<string, unknown>;\n  if (typeof o.imie !== \"string\") throw new Error(\"Pole imie musi być tekstem\");\n  if (typeof o.wiek !== \"number\") throw new Error(\"Pole wiek musi być liczbą\");\n  return { imie: o.imie, wiek: o.wiek };\n}",
        hints: [
          { pl: "Najpierw: <code>if (typeof dane !== \"object\" || dane === null) throw ...</code>", en: "First: <code>if (typeof data !== \"object\" || data === null) throw ...</code>" },
          { pl: "Rzutuj na <code>Record&lt;string, unknown&gt;</code>, by odczytać pola, a potem sprawdź ich <code>typeof</code>.", en: "Cast to <code>Record&lt;string, unknown&gt;</code> to read fields, then check their <code>typeof</code>." },
        ],
      },
      {
        id: "p-l4",
        type: "lesson",
        xp: 33,
        title: { pl: "Zaawansowane generyki", en: "Advanced generics" },
        body: {
          pl:
            "<p>Generyki w praktyce: <b>ograniczenia</b> (<code>extends</code>), <b>typy domyślne</b> i <b>klasy generyczne</b> — to one budują wielorazowe utilsy w frameworku testowym.</p>" +
            codeBlock("// Ograniczenie: T musi być obiektem\nfunction pierwszyKlucz<T extends object>(o: T): keyof T {\n  return Object.keys(o)[0] as keyof T;\n}\n\n// Typ domyślny generyka\nclass Kolejka<T = string> {\n  private items: T[] = [];\n  dodaj(x: T): void { this.items.push(x); }\n  pobierz(): T | undefined { return this.items.shift(); }\n}") +
            '<div class="note">Ograniczenie <code>K extends keyof T</code> jest sercem typowanych helperów (jak <code>get(obj, key)</code>) — gwarantuje, że klucz naprawdę istnieje w obiekcie.</div>',
          en:
            "<p>Generics in practice: <b>constraints</b> (<code>extends</code>), <b>default types</b> and <b>generic classes</b> — these build reusable utilities in a test framework.</p>" +
            codeBlock("// Constraint: T must be an object\nfunction firstKey<T extends object>(o: T): keyof T {\n  return Object.keys(o)[0] as keyof T;\n}\n\n// Default generic type\nclass Queue<T = string> {\n  private items: T[] = [];\n  add(x: T): void { this.items.push(x); }\n  take(): T | undefined { return this.items.shift(); }\n}") +
            '<div class="note">The constraint <code>K extends keyof T</code> is the heart of typed helpers (like <code>get(obj, key)</code>) — it guarantees the key really exists on the object.</div>',
        },
      },
      {
        id: "p-lab5",
        type: "lab",
        xp: 70,
        title: { pl: "Generyczny stos", en: "Generic stack" },
        prompt: {
          pl: "Zaimplementuj generyczną klasę <code>Stos&lt;T&gt;</code> z metodami: <code>push(x)</code>, <code>pop()</code> (zwraca <code>T | undefined</code>), <code>peek()</code> (podgląd szczytu) i <code>rozmiar()</code>.",
          en: "Implement a generic class <code>Stack&lt;T&gt;</code> with methods: <code>push(x)</code>, <code>pop()</code> (returns <code>T | undefined</code>), <code>peek()</code> (look at the top) and <code>size()</code>.",
        },
        tasks: [
          { desc: { pl: "Po dwóch push rozmiar() === 2", en: "After two pushes size() === 2" }, test: 'const s = new Stos<number>(); s.push(1); s.push(2); assert(s.rozmiar() === 2, "Rozmiar powinien być 2");' },
          { desc: { pl: "peek() zwraca szczyt, nie usuwając", en: "peek() returns the top without removing" }, test: 'const s2 = new Stos<number>(); s2.push(10); assert(s2.peek() === 10 && s2.rozmiar() === 1, "peek nie powinien usuwać");' },
          { desc: { pl: "pop() zdejmuje element; pop pustego → undefined", en: "pop() removes the item; pop of empty → undefined" }, test: 'const s3 = new Stos<string>(); s3.push("a"); assert(s3.pop() === "a", "pop zwraca element"); assert(s3.pop() === undefined, "pop pustego to undefined");' },
        ],
        starter:
          "class Stos<T> {\n  private elementy: T[] = [];\n  // zaimplementuj push, pop, peek, rozmiar\n}\n",
        solution:
          "class Stos<T> {\n  private elementy: T[] = [];\n  push(x: T): void { this.elementy.push(x); }\n  pop(): T | undefined { return this.elementy.pop(); }\n  peek(): T | undefined { return this.elementy[this.elementy.length - 1]; }\n  rozmiar(): number { return this.elementy.length; }\n}",
        hints: [
          { pl: "Trzymaj dane w prywatnej tablicy i deleguj do jej metod <code>push</code>/<code>pop</code>.", en: "Keep data in a private array and delegate to its <code>push</code>/<code>pop</code>." },
          { pl: "Szczyt to <code>elementy[elementy.length - 1]</code>.", en: "The top is <code>items[items.length - 1]</code>." },
        ],
      },
      {
        id: "p-l5",
        type: "lesson",
        xp: 33,
        title: { pl: "Obsługa błędów i wzorzec Result", en: "Error handling & the Result pattern" },
        body: {
          pl:
            "<p>Profesjonalny kod nie tylko rzuca wyjątki — modeluje błędy w typach. Dwa filary: <b>własne klasy błędów</b> i <b>wzorzec Result</b>.</p>" +
            codeBlock("class BladWalidacji extends Error {\n  constructor(public pole: string) {\n    super(\"Niepoprawne pole: \" + pole);\n    this.name = \"BladWalidacji\";\n  }\n}\n\n// Result: błąd jako wartość, nie wyjątek\ntype Wynik<T> =\n  | { ok: true; dane: T }\n  | { ok: false; blad: string };") +
            "<p>Dzięki <code>Wynik&lt;T&gt;</code> wywołujący <b>musi</b> sprawdzić <code>ok</code>, zanim sięgnie po dane — kompilator go do tego zmusza.</p>" +
            '<div class="note">W testach to złoto: zamiast łapać wyjątki w wielu miejscach, zwracasz przewidywalny obiekt wyniku i czytelnie go asercjonujesz.</div>',
          en:
            "<p>Professional code doesn't just throw — it models errors in types. Two pillars: <b>custom error classes</b> and the <b>Result pattern</b>.</p>" +
            codeBlock("class ValidationError extends Error {\n  constructor(public field: string) {\n    super(\"Invalid field: \" + field);\n    this.name = \"ValidationError\";\n  }\n}\n\n// Result: error as a value, not an exception\ntype Result<T> =\n  | { ok: true; data: T }\n  | { ok: false; error: string };") +
            "<p>With <code>Result&lt;T&gt;</code> the caller <b>must</b> check <code>ok</code> before touching the data — the compiler forces it.</p>" +
            '<div class="note">In tests this is gold: instead of catching exceptions everywhere, you return a predictable result object and assert on it cleanly.</div>',
        },
      },
      {
        id: "p-lab6",
        type: "lab",
        xp: 75,
        title: { pl: "Bezpieczny JSON (Result)", en: "Safe JSON (Result)" },
        prompt: {
          pl: "Zaimplementuj <code>bezpiecznyJSON&lt;T&gt;(tekst)</code>, który próbuje sparsować JSON. Sukces → <code>{ ok: true, dane }</code>; błąd → <code>{ ok: false, blad }</code> (komunikat błędu). Bez rzucania wyjątku na zewnątrz.",
          en: "Implement <code>safeJSON&lt;T&gt;(text)</code> that tries to parse JSON. Success → <code>{ ok: true, data }</code>; failure → <code>{ ok: false, error }</code> (the error message). Without throwing to the outside.",
        },
        tasks: [
          { desc: { pl: "Poprawny JSON → ok:true i sparsowane dane", en: "Valid JSON → ok:true and parsed data" }, test: 'const r = bezpiecznyJSON("{\\"a\\":1}"); assert(r.ok === true, "ok powinno być true"); assert(r.ok === true && r.dane.a === 1, "Powinno sparsować pole a");' },
          { desc: { pl: "Niepoprawny JSON → ok:false i komunikat", en: "Invalid JSON → ok:false and a message" }, test: 'const r2 = bezpiecznyJSON("{zepsuty}"); assert(r2.ok === false, "ok powinno być false"); assert(r2.ok === false && typeof r2.blad === "string" && r2.blad.length > 0, "Powinien być komunikat błędu");' },
        ],
        starter:
          "type Wynik<T> = { ok: true; dane: T } | { ok: false; blad: string };\n\nfunction bezpiecznyJSON<T>(tekst: string): Wynik<T> {\n  // użyj try/catch wokół JSON.parse\n  return { ok: false, blad: \"Niezaimplementowane\" };\n}\n",
        solution:
          "type Wynik<T> = { ok: true; dane: T } | { ok: false; blad: string };\n\nfunction bezpiecznyJSON<T>(tekst: string): Wynik<T> {\n  try {\n    return { ok: true, dane: JSON.parse(tekst) as T };\n  } catch (e) {\n    return { ok: false, blad: (e as Error).message };\n  }\n}",
        hints: [
          { pl: "Owiń <code>JSON.parse(tekst)</code> w <code>try { ... } catch (e) { ... }</code>.", en: "Wrap <code>JSON.parse(text)</code> in <code>try { ... } catch (e) { ... }</code>." },
          { pl: "W catch zwróć <code>{ ok: false, blad: (e as Error).message }</code>.", en: "In catch return <code>{ ok: false, error: (e as Error).message }</code>." },
        ],
      },
      {
        id: "p-q2",
        type: "quiz",
        xp: 45,
        title: { pl: "Quiz: profesjonalny TypeScript", en: "Quiz: professional TypeScript" },
        passRatio: 0.7,
        questions: [
          {
            type: "mc",
            q: { pl: "Czym różni się <code>unknown</code> od <code>any</code>?", en: "How does <code>unknown</code> differ from <code>any</code>?" },
            options: [
              { pl: "Niczym — to synonimy", en: "Nothing — they're synonyms" },
              { pl: "<code>unknown</code> wymaga zawężenia typu, zanim go użyjesz; <code>any</code> wyłącza kontrolę", en: "<code>unknown</code> requires narrowing before use; <code>any</code> disables checking" },
              { pl: "<code>unknown</code> jest tylko dla liczb", en: "<code>unknown</code> is only for numbers" },
              { pl: "<code>any</code> jest bezpieczniejszy", en: "<code>any</code> is safer" },
            ],
            answer: 1,
            explain: { pl: "<code>unknown</code> to bezpieczny odpowiednik <code>any</code> — zmusza do walidacji przed użyciem.", en: "<code>unknown</code> is the safe counterpart of <code>any</code> — it forces validation before use." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij ograniczenie generyka „T musi być obiektem\": <code>&lt;T ___ object&gt;</code>", en: "Fill in the generic constraint “T must be an object\": <code>&lt;T ___ object&gt;</code>" },
            answer: ["extends"],
            explain: { pl: "Ograniczenia generyków zapisujemy słowem <code>extends</code>.", en: "Generic constraints use the <code>extends</code> keyword." },
          },
          {
            type: "mc",
            q: { pl: "Jak zamodelować „albo sukces z danymi, albo błąd\" bez rzucania wyjątku?", en: "How do you model “either success with data, or an error\" without throwing?" },
            options: [
              { pl: "Zwracać <code>any</code>", en: "Return <code>any</code>" },
              { pl: "Typem unii (wzorzec Result), np. <code>{ ok: true; dane } | { ok: false; blad }</code>", en: "A union type (Result pattern), e.g. <code>{ ok: true; data } | { ok: false; error }</code>" },
              { pl: "Globalną zmienną", en: "A global variable" },
              { pl: "Dekoratorem", en: "A decorator" },
            ],
            answer: 1,
            explain: { pl: "Wzorzec Result modeluje błąd jako wartość — wywołujący musi sprawdzić <code>ok</code>.", en: "The Result pattern models the error as a value — the caller must check <code>ok</code>." },
          },
          {
            type: "mc",
            q: { pl: "Po co tworzyć własną klasę dziedziczącą po <code>Error</code> (np. <code>BladWalidacji</code>)?", en: "Why create a custom class extending <code>Error</code> (e.g. <code>ValidationError</code>)?" },
            options: [
              { pl: "Żeby kod był dłuższy", en: "To make the code longer" },
              { pl: "Aby rozróżniać rodzaje błędów (np. przez <code>instanceof</code>) i dołączać dodatkowe dane", en: "To distinguish error kinds (e.g. via <code>instanceof</code>) and attach extra data" },
              { pl: "To wymóg składni", en: "It's a syntax requirement" },
              { pl: "Żeby wyłączyć typy", en: "To disable types" },
            ],
            answer: 1,
            explain: { pl: "Własne klasy błędów pozwalają precyzyjnie reagować na konkretny typ błędu i nieść kontekst (np. nazwę pola).", en: "Custom error classes let you react precisely to a specific error type and carry context (e.g. a field name)." },
          },
        ],
      },
    ],
  },

  /* ============================ QA AUTOMATION ============================ */
  {
    id: "qa",
    name: { pl: "Automatyzacja QA", en: "QA Automation" },
    desc: {
      pl: "Wzorce w TypeScript niezbędne w automatyzacji testów: async, retry/polling, Page Object Model, fixture'y i typowane asercje.",
      en: "TypeScript patterns essential for test automation: async, retry/polling, Page Object Model, fixtures and typed assertions.",
    },
    modules: [
      {
        id: "q-l1",
        type: "lesson",
        xp: 33,
        title: { pl: "Asynchroniczność w testach", en: "Asynchrony in tests" },
        body: {
          pl:
            "<p>Testy automatyczne to przede wszystkim kod asynchroniczny. Musisz świadomie wybierać między równoległością a kolejnością.</p>" +
            codeBlock("// Równolegle — szybciej, gdy zadania są niezależne:\nconst [a, b] = await Promise.all([poborA(), poborB()]);\n\n// allSettled — nie przerywa, gdy któraś odrzuci:\nconst wyniki = await Promise.allSettled([t1(), t2()]);\n\n// Sekwencyjnie — gdy kolejność ma znaczenie:\nfor (const zadanie of zadania) {\n  await zadanie();\n}") +
            "<ul><li><code>Promise.all</code> — czeka na wszystkie, ale <b>odrzuca natychmiast</b>, gdy pierwsza padnie.</li><li><code>Promise.allSettled</code> — czeka na wszystkie i zwraca status każdej (idealne do raportów).</li><li><code>Promise.race</code> — wynik pierwszej zakończonej (np. do timeoutów).</li></ul>" +
            '<div class="note warn">Najczęstszy błąd początkujących: pętla <code>forEach</code> z <code>await</code> w środku <b>nie</b> czeka. Używaj klasycznego <code>for...of</code>.</div>',
          en:
            "<p>Test automation is mostly asynchronous code. You must deliberately choose between parallelism and ordering.</p>" +
            codeBlock("// Parallel — faster when tasks are independent:\nconst [a, b] = await Promise.all([fetchA(), fetchB()]);\n\n// allSettled — doesn't abort when one rejects:\nconst results = await Promise.allSettled([t1(), t2()]);\n\n// Sequential — when ordering matters:\nfor (const task of tasks) {\n  await task();\n}") +
            "<ul><li><code>Promise.all</code> — waits for all, but <b>rejects immediately</b> when the first fails.</li><li><code>Promise.allSettled</code> — waits for all and returns each one's status (great for reports).</li><li><code>Promise.race</code> — the first settled result (e.g. for timeouts).</li></ul>" +
            '<div class="note warn">A classic beginner bug: a <code>forEach</code> loop with <code>await</code> inside does <b>not</b> wait. Use a plain <code>for...of</code>.</div>',
        },
      },
      {
        id: "q-lab1",
        type: "lab",
        xp: 75,
        title: { pl: "Timeout dla obietnicy", en: "Promise timeout" },
        prompt: {
          pl: "Napisz <code>zTimeoutem&lt;T&gt;(p, ms)</code>, które zwraca wartość obietnicy <code>p</code>, jeśli zdąży w <code>ms</code> milisekund, a w przeciwnym razie odrzuca z błędem. Użyj <code>Promise.race</code>.",
          en: "Write <code>withTimeout&lt;T&gt;(p, ms)</code> that returns the value of promise <code>p</code> if it settles within <code>ms</code> milliseconds, otherwise rejects with an error. Use <code>Promise.race</code>.",
        },
        tasks: [
          { desc: { pl: "Szybka obietnica zwraca wartość", en: "A fast promise returns its value" }, test: 'const v = await zTimeoutem(Promise.resolve(7), 50); assert(v === 7, "Powinno zwrócić 7, gdy zdąży");' },
          { desc: { pl: "Wolna obietnica → odrzucenie (timeout)", en: "A slow promise → rejection (timeout)" }, test: 'let z = false; try { await zTimeoutem(new Promise(function () {}), 10); } catch (e) { z = true; } assert(z, "Powinno odrzucić po przekroczeniu czasu");' },
        ],
        starter:
          "function zTimeoutem<T>(p: Promise<T>, ms: number): Promise<T> {\n  // Promise.race z obietnicą, która odrzuca po ms\n  return p;\n}\n",
        solution:
          "function zTimeoutem<T>(p: Promise<T>, ms: number): Promise<T> {\n  return Promise.race([\n    p,\n    new Promise<T>((_, reject) =>\n      setTimeout(() => reject(new Error(\"timeout\")), ms)\n    ),\n  ]);\n}",
        hints: [
          { pl: "Druga obietnica w wyścigu odrzuca w <code>setTimeout</code> po <code>ms</code>.", en: "The second racer rejects inside <code>setTimeout</code> after <code>ms</code>." },
          { pl: "<code>Promise.race</code> kończy się wynikiem pierwszej zakończonej obietnicy.", en: "<code>Promise.race</code> settles with the first promise that settles." },
        ],
      },
      {
        id: "q-l2",
        type: "lesson",
        xp: 33,
        title: { pl: "Retry i polling (waitFor)", en: "Retry & polling (waitFor)" },
        body: {
          pl:
            "<p>Aplikacje są asynchroniczne i bywają niestabilne. Dwie techniki ratują testy przed <b>flakiness</b> (losowymi padami):</p>" +
            "<ul><li><b>Retry</b> — powtórz akcję, gdy się nie powiedzie.</li><li><b>Polling / waitFor</b> — odpytuj warunek co interwał, aż będzie spełniony (lub minie timeout).</li></ul>" +
            codeBlock("async function ponow<T>(fn: () => Promise<T>, proby: number): Promise<T> {\n  let ostatni: unknown;\n  for (let i = 0; i < proby; i++) {\n    try { return await fn(); }\n    catch (e) { ostatni = e; }\n  }\n  throw ostatni;\n}") +
            '<div class="note warn">Nigdy nie czekaj „na sztywno\" przez <code>sleep(5000)</code>. Czekaj na <b>warunek</b> (np. aż element się pojawi) — testy będą szybsze i stabilniejsze.</div>',
          en:
            "<p>Apps are asynchronous and sometimes unstable. Two techniques save tests from <b>flakiness</b> (random failures):</p>" +
            "<ul><li><b>Retry</b> — repeat an action when it fails.</li><li><b>Polling / waitFor</b> — check a condition every interval until it's met (or a timeout passes).</li></ul>" +
            codeBlock("async function retry<T>(fn: () => Promise<T>, attempts: number): Promise<T> {\n  let last: unknown;\n  for (let i = 0; i < attempts; i++) {\n    try { return await fn(); }\n    catch (e) { last = e; }\n  }\n  throw last;\n}") +
            '<div class="note warn">Never wait “hard\" with <code>sleep(5000)</code>. Wait for a <b>condition</b> (e.g. until an element appears) — tests get faster and more stable.</div>',
        },
      },
      {
        id: "q-lab2",
        type: "lab",
        xp: 80,
        title: { pl: "Funkcja retry", en: "Retry function" },
        prompt: {
          pl: "Napisz <code>ponow&lt;T&gt;(fn, proby)</code>: wywołuj asynchroniczne <code>fn</code>; jeśli rzuci, ponawiaj aż do <code>proby</code> razy. Gdy się uda — zwróć wynik; gdy wszystkie próby zawiodą — rzuć ostatni błąd.",
          en: "Write <code>retry&lt;T&gt;(fn, attempts)</code>: call the async <code>fn</code>; if it throws, retry up to <code>attempts</code> times. On success — return the value; if all attempts fail — throw the last error.",
        },
        tasks: [
          { desc: { pl: "Sukces po kilku porażkach", en: "Success after a few failures" }, test: 'let n = 0; const fn = async function () { n++; if (n < 3) throw new Error("jeszcze nie"); return "ok"; }; const r = await ponow(fn, 5); assert(r === "ok", "Powinno zwrócić ok"); assert(n === 3, "Powinno wywołać dokładnie 3 razy");' },
          { desc: { pl: "Wszystkie próby zawodzą → wyjątek", en: "All attempts fail → throws" }, test: 'let z = false; const bad = async function () { throw new Error("zawsze"); }; try { await ponow(bad, 3); } catch (e) { z = true; } assert(z, "Powinno odrzucić, gdy wszystkie próby zawiodą");' },
        ],
        starter:
          "async function ponow<T>(fn: () => Promise<T>, proby: number): Promise<T> {\n  // pętla prób z try/catch; na końcu rzuć ostatni błąd\n  throw new Error(\"Niezaimplementowane\");\n}\n",
        solution:
          "async function ponow<T>(fn: () => Promise<T>, proby: number): Promise<T> {\n  let ostatni: unknown;\n  for (let i = 0; i < proby; i++) {\n    try {\n      return await fn();\n    } catch (e) {\n      ostatni = e;\n    }\n  }\n  throw ostatni;\n}",
        hints: [
          { pl: "W pętli <code>for</code> spróbuj <code>return await fn();</code> w bloku <code>try</code>.", en: "In a <code>for</code> loop try <code>return await fn();</code> inside <code>try</code>." },
          { pl: "Zapamiętuj błąd w zmiennej i rzuć go po wyczerpaniu prób.", en: "Store the error in a variable and throw it after attempts run out." },
        ],
      },
      {
        id: "q-lab3",
        type: "lab",
        xp: 85,
        title: { pl: "Polling — czekajAz", en: "Polling — waitFor" },
        prompt: {
          pl: "Napisz <code>czekajAz(warunek, timeoutMs, intervalMs)</code>: odpytuj <code>warunek()</code> co <code>intervalMs</code>, aż zwróci <code>true</code> (wtedy zakończ). Jeśli minie <code>timeoutMs</code> — rzuć <code>Error</code>.",
          en: "Write <code>waitFor(condition, timeoutMs, intervalMs)</code>: poll <code>condition()</code> every <code>intervalMs</code> until it returns <code>true</code> (then finish). If <code>timeoutMs</code> passes — throw an <code>Error</code>.",
        },
        tasks: [
          { desc: { pl: "Kończy się, gdy warunek staje się prawdą", en: "Resolves once the condition becomes true" }, test: 'let licznik = 0; const warunek = function () { licznik++; return licznik >= 3; }; await czekajAz(warunek, 1000, 5); assert(licznik >= 3, "Powinno poczekać aż warunek spełniony");' },
          { desc: { pl: "Rzuca po przekroczeniu timeoutu", en: "Throws after the timeout" }, test: 'let z = false; try { await czekajAz(function () { return false; }, 30, 5); } catch (e) { z = true; } assert(z, "Powinno rzucić po timeout");' },
        ],
        starter:
          "function sleep(ms: number): Promise<void> {\n  return new Promise((r) => setTimeout(r, ms));\n}\n\nasync function czekajAz(\n  warunek: () => boolean,\n  timeoutMs: number,\n  intervalMs: number\n): Promise<void> {\n  // odpytuj warunek co interwał aż do skutku lub timeoutu\n}\n",
        solution:
          "function sleep(ms: number): Promise<void> {\n  return new Promise((r) => setTimeout(r, ms));\n}\n\nasync function czekajAz(\n  warunek: () => boolean,\n  timeoutMs: number,\n  intervalMs: number\n): Promise<void> {\n  const koniec = Date.now() + timeoutMs;\n  while (Date.now() < koniec) {\n    if (warunek()) return;\n    await sleep(intervalMs);\n  }\n  throw new Error(\"Przekroczono czas oczekiwania\");\n}",
        hints: [
          { pl: "Policz moment końca: <code>const koniec = Date.now() + timeoutMs;</code>", en: "Compute the deadline: <code>const end = Date.now() + timeoutMs;</code>" },
          { pl: "W pętli <code>while</code>: jeśli warunek spełniony — <code>return</code>; w przeciwnym razie <code>await sleep(intervalMs)</code>.", en: "In a <code>while</code> loop: if the condition holds — <code>return</code>; otherwise <code>await sleep(intervalMs)</code>." },
        ],
      },
      {
        id: "q-l3",
        type: "lesson",
        xp: 33,
        title: { pl: "Page Object Model", en: "Page Object Model" },
        body: {
          pl:
            "<p><b>Page Object Model (POM)</b> to najważniejszy wzorzec w automatyzacji UI: każdą stronę/komponent opisujesz klasą, która enkapsuluje <b>selektory</b> i <b>akcje</b>. Testy stają się czytelne i odporne na zmiany interfejsu.</p>" +
            codeBlock("class StronaBazowa {\n  constructor(protected selektory: Record<string, string>) {}\n\n  selektor(nazwa: string): string {\n    const s = this.selektory[nazwa];\n    if (!s) throw new Error(\"Brak selektora: \" + nazwa);\n    return s;\n  }\n}\n\nclass StronaLogowania extends StronaBazowa {\n  constructor() {\n    super({ login: \"#login\", haslo: \"#haslo\" });\n  }\n}") +
            '<div class="note">Gdy zmieni się selektor w UI, poprawiasz go w <b>jednym</b> miejscu (page object), a nie w dziesiątkach testów. To esencja utrzymywalności.</div>',
          en:
            "<p>The <b>Page Object Model (POM)</b> is the most important UI automation pattern: you describe each page/component with a class that encapsulates <b>selectors</b> and <b>actions</b>. Tests become readable and resilient to UI changes.</p>" +
            codeBlock("class BasePage {\n  constructor(protected selectors: Record<string, string>) {}\n\n  selector(name: string): string {\n    const s = this.selectors[name];\n    if (!s) throw new Error(\"No selector: \" + name);\n    return s;\n  }\n}\n\nclass LoginPage extends BasePage {\n  constructor() {\n    super({ login: \"#login\", password: \"#password\" });\n  }\n}") +
            '<div class="note">When a selector changes in the UI, you fix it in <b>one</b> place (the page object), not in dozens of tests. That is the essence of maintainability.</div>',
        },
      },
      {
        id: "q-lab4",
        type: "lab",
        xp: 80,
        title: { pl: "Page Object", en: "Page Object" },
        prompt: {
          pl: "Dokończ klasę bazową <code>StronaBazowa</code> (metoda <code>selektor(nazwa)</code> zwraca selektor lub rzuca błąd dla nieznanej nazwy) oraz <code>StronaLogowania</code> z selektorami <code>login</code> = <code>\"#login\"</code> i <code>haslo</code> = <code>\"#haslo\"</code>.",
          en: "Finish the base class <code>BasePage</code> (method <code>selector(name)</code> returns the selector or throws for an unknown name) and <code>LoginPage</code> with selectors <code>login</code> = <code>\"#login\"</code> and <code>password</code> = <code>\"#password\"</code>.",
        },
        tasks: [
          { desc: { pl: 'selektor("login") === "#login"', en: 'selector("login") === "#login"' }, test: 'const p = new StronaLogowania(); assert(p.selektor("login") === "#login", "Selektor login powinien być #login");' },
          { desc: { pl: 'selektor("haslo") === "#haslo"', en: 'selector("password") === "#password"' }, test: 'const p2 = new StronaLogowania(); assert(p2.selektor("haslo") === "#haslo", "Selektor haslo powinien być #haslo");' },
          { desc: { pl: "Nieznany selektor → wyjątek", en: "Unknown selector → throws" }, test: 'let z = false; try { new StronaLogowania().selektor("nieistnieje"); } catch (e) { z = true; } assert(z, "Nieznany selektor powinien rzucić błąd");' },
        ],
        starter:
          "class StronaBazowa {\n  constructor(protected selektory: Record<string, string>) {}\n\n  selektor(nazwa: string): string {\n    // zwróć selektor lub rzuć błąd, gdy nie istnieje\n    return \"\";\n  }\n}\n\nclass StronaLogowania extends StronaBazowa {\n  constructor() {\n    // przekaż selektory do klasy bazowej\n    super({});\n  }\n}\n",
        solution:
          "class StronaBazowa {\n  constructor(protected selektory: Record<string, string>) {}\n\n  selektor(nazwa: string): string {\n    const s = this.selektory[nazwa];\n    if (!s) throw new Error(\"Brak selektora: \" + nazwa);\n    return s;\n  }\n}\n\nclass StronaLogowania extends StronaBazowa {\n  constructor() {\n    super({ login: \"#login\", haslo: \"#haslo\" });\n  }\n}",
        hints: [
          { pl: "W <code>selektor</code>: pobierz wartość z <code>this.selektory[nazwa]</code> i rzuć błąd, gdy jej brak.", en: "In <code>selector</code>: read <code>this.selectors[name]</code> and throw when missing." },
          { pl: "W konstruktorze <code>StronaLogowania</code> przekaż obiekt selektorów do <code>super(...)</code>.", en: "In <code>LoginPage</code>'s constructor pass the selectors object to <code>super(...)</code>." },
        ],
      },
      {
        id: "q-l4",
        type: "lesson",
        xp: 33,
        title: { pl: "Fixture'y i builder danych", en: "Fixtures & data builders" },
        body: {
          pl:
            "<p>Dobre testy nie powtarzają tworzenia danych. <b>Fabryka/builder</b> z domyślnymi wartościami i nadpisaniami przez <code>Partial&lt;T&gt;</code> to standard.</p>" +
            codeBlock("interface Uzytkownik {\n  id: number;\n  imie: string;\n  aktywny: boolean;\n}\n\nfunction zbudujUzytkownika(\n  nadpisania: Partial<Uzytkownik> = {}\n): Uzytkownik {\n  return { id: 1, imie: \"Test\", aktywny: true, ...nadpisania };\n}\n\nconst wylaczony = zbudujUzytkownika({ aktywny: false });") +
            '<div class="note">Test podaje tylko to, co istotne dla <b>danego</b> przypadku (np. <code>{ aktywny: false }</code>), a reszta pól ma sensowne domyślne wartości. Mniej szumu, większa czytelność.</div>',
          en:
            "<p>Good tests don't repeat data creation. A <b>factory/builder</b> with defaults and overrides via <code>Partial&lt;T&gt;</code> is the standard.</p>" +
            codeBlock("interface User {\n  id: number;\n  name: string;\n  active: boolean;\n}\n\nfunction buildUser(\n  overrides: Partial<User> = {}\n): User {\n  return { id: 1, name: \"Test\", active: true, ...overrides };\n}\n\nconst disabled = buildUser({ active: false });") +
            '<div class="note">A test only specifies what matters for <b>that</b> case (e.g. <code>{ active: false }</code>); the rest get sensible defaults. Less noise, more readability.</div>',
        },
      },
      {
        id: "q-lab5",
        type: "lab",
        xp: 75,
        title: { pl: "Fabryka danych testowych", en: "Test data factory" },
        prompt: {
          pl: "Napisz <code>zbudujUzytkownika(nadpisania?)</code>, który zwraca obiekt <code>Uzytkownik</code> z domyślnymi wartościami (<code>id: 1</code>, <code>imie: \"Test\"</code>, <code>aktywny: true</code>) scalonymi z przekazanymi nadpisaniami (<code>Partial&lt;Uzytkownik&gt;</code>).",
          en: "Write <code>buildUser(overrides?)</code> that returns a <code>User</code> object with defaults (<code>id: 1</code>, <code>name: \"Test\"</code>, <code>active: true</code>) merged with the given overrides (<code>Partial&lt;User&gt;</code>).",
        },
        tasks: [
          { desc: { pl: "Bez argumentów → wartości domyślne", en: "No args → defaults" }, test: 'const u = zbudujUzytkownika(); assert(u.id === 1 && u.imie === "Test" && u.aktywny === true, "Powinny być wartości domyślne");' },
          { desc: { pl: "Nadpisanie pojedynczego pola, reszta domyślna", en: "Override one field, rest defaults" }, test: 'const u2 = zbudujUzytkownika({ imie: "Ada" }); assert(u2.imie === "Ada", "imie powinno być nadpisane"); assert(u2.id === 1 && u2.aktywny === true, "Reszta pól domyślna");' },
          { desc: { pl: "Nadpisanie aktywny: false działa", en: "Override active: false works" }, test: 'const u3 = zbudujUzytkownika({ aktywny: false }); assert(u3.aktywny === false, "aktywny powinno być false");' },
        ],
        starter:
          "interface Uzytkownik {\n  id: number;\n  imie: string;\n  aktywny: boolean;\n}\n\nfunction zbudujUzytkownika(nadpisania: Partial<Uzytkownik> = {}): Uzytkownik {\n  // zwróć obiekt z domyślnymi wartościami + nadpisania\n  return { id: 0, imie: \"\", aktywny: false };\n}\n",
        solution:
          "interface Uzytkownik {\n  id: number;\n  imie: string;\n  aktywny: boolean;\n}\n\nfunction zbudujUzytkownika(nadpisania: Partial<Uzytkownik> = {}): Uzytkownik {\n  return { id: 1, imie: \"Test\", aktywny: true, ...nadpisania };\n}",
        hints: [
          { pl: "Użyj rozszczepienia (spread): <code>{ ...domyslne, ...nadpisania }</code>.", en: "Use spread: <code>{ ...defaults, ...overrides }</code>." },
          { pl: "Nadpisania muszą być <b>po</b> domyślnych wartościach, by je przesłonić.", en: "Overrides must come <b>after</b> the defaults to take precedence." },
        ],
      },
      {
        id: "q-l5",
        type: "lesson",
        xp: 33,
        title: { pl: "Typowane asercje", en: "Typed assertions" },
        body: {
          pl:
            "<p>Asercje to serce testu. W TypeScript funkcja asercji może <b>zawężać typ</b> dzięki sygnaturze <code>asserts</code>.</p>" +
            codeBlock("function assert(warunek: boolean, komunikat: string): asserts warunek {\n  if (!warunek) throw new Error(komunikat);\n}\n\nfunction sprawdzRowne(a: unknown, b: unknown): void {\n  if (JSON.stringify(a) !== JSON.stringify(b)) {\n    throw new Error(\"Oczekiwano \" + JSON.stringify(b) + \", otrzymano \" + JSON.stringify(a));\n  }\n}") +
            '<div class="note">Po wywołaniu <code>assert(x !== null, ...)</code> kompilator wie, że dalej <code>x</code> nie jest <code>null</code>. To <code>asserts</code> w akcji — dokładnie tak działają matchery w bibliotekach testowych.</div>' +
            '<div class="note warn">Porównanie przez <code>JSON.stringify</code> jest proste, ale ma pułapki (kolejność kluczy, brak obsługi <code>undefined</code>). W prawdziwych testach używaj <code>expect(...).toEqual(...)</code>.</div>',
          en:
            "<p>Assertions are the heart of a test. In TypeScript an assertion function can <b>narrow the type</b> via the <code>asserts</code> signature.</p>" +
            codeBlock("function assert(condition: boolean, message: string): asserts condition {\n  if (!condition) throw new Error(message);\n}\n\nfunction expectEqual(a: unknown, b: unknown): void {\n  if (JSON.stringify(a) !== JSON.stringify(b)) {\n    throw new Error(\"Expected \" + JSON.stringify(b) + \", got \" + JSON.stringify(a));\n  }\n}") +
            '<div class="note">After calling <code>assert(x !== null, ...)</code> the compiler knows <code>x</code> is no longer <code>null</code>. That is <code>asserts</code> in action — exactly how matchers in test libraries work.</div>' +
            '<div class="note warn">Comparing via <code>JSON.stringify</code> is simple but has traps (key order, no <code>undefined</code> handling). In real tests use <code>expect(...).toEqual(...)</code>.</div>',
        },
      },
      {
        id: "q-lab6",
        type: "lab",
        xp: 80,
        title: { pl: "Własny matcher równości", en: "Custom equality matcher" },
        prompt: {
          pl: "Napisz <code>sprawdzRowne(a, b)</code>, które porównuje dwie wartości głęboko (po zserializowaniu). Gdy są równe — nic nie robi; gdy różne — rzuca <code>Error</code> z czytelnym komunikatem.",
          en: "Write <code>expectEqual(a, b)</code> that deep-compares two values (after serialization). When equal — do nothing; when different — throw an <code>Error</code> with a clear message.",
        },
        tasks: [
          { desc: { pl: "Równe obiekty nie rzucają błędu", en: "Equal objects don't throw" }, test: 'sprawdzRowne({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] }); assert(true, "Równe wartości przechodzą");' },
          { desc: { pl: "Różne obiekty rzucają błąd", en: "Different objects throw" }, test: 'let z = false; try { sprawdzRowne({ a: 1 }, { a: 2 }); } catch (e) { z = true; } assert(z, "Różne wartości powinny rzucić błąd");' },
          { desc: { pl: "Różne tablice rzucają błąd", en: "Different arrays throw" }, test: 'let z2 = false; try { sprawdzRowne([1, 2, 3], [1, 2]); } catch (e) { z2 = true; } assert(z2, "Różne tablice powinny rzucić błąd");' },
        ],
        starter:
          "function sprawdzRowne(a: unknown, b: unknown): void {\n  // porównaj głęboko i rzuć Error, gdy różne\n}\n",
        solution:
          "function sprawdzRowne(a: unknown, b: unknown): void {\n  if (JSON.stringify(a) !== JSON.stringify(b)) {\n    throw new Error(\n      \"Oczekiwano \" + JSON.stringify(b) + \", otrzymano \" + JSON.stringify(a)\n    );\n  }\n}",
        hints: [
          { pl: "Najprostsze głębokie porównanie: <code>JSON.stringify(a) !== JSON.stringify(b)</code>.", en: "Simplest deep compare: <code>JSON.stringify(a) !== JSON.stringify(b)</code>." },
          { pl: "Gdy wartości się różnią — <code>throw new Error(...)</code>.", en: "When values differ — <code>throw new Error(...)</code>." },
        ],
      },
      {
        id: "q-q1",
        type: "quiz",
        xp: 55,
        title: { pl: "Egzamin: Automatyzacja QA", en: "Exam: QA Automation" },
        passRatio: 0.7,
        questions: [
          {
            type: "mc",
            q: { pl: "Która metoda czeka aż <b>wszystkie</b> obietnice się zakończą, nawet jeśli któraś odrzuci?", en: "Which method waits for <b>all</b> promises to settle, even if one rejects?" },
            options: [
              { pl: "<code>Promise.all</code>", en: "<code>Promise.all</code>" },
              { pl: "<code>Promise.race</code>", en: "<code>Promise.race</code>" },
              { pl: "<code>Promise.allSettled</code>", en: "<code>Promise.allSettled</code>" },
              { pl: "<code>Promise.any</code>", en: "<code>Promise.any</code>" },
            ],
            answer: 2,
            explain: { pl: "<code>allSettled</code> nigdy nie przerywa — zwraca status każdej obietnicy.", en: "<code>allSettled</code> never short-circuits — it returns each promise's status." },
          },
          {
            type: "mc",
            q: { pl: "Dlaczego w testach E2E/integracyjnych stosujemy retry i polling?", en: "Why do we use retry and polling in E2E/integration tests?" },
            options: [
              { pl: "Aby kod był krótszy", en: "To make code shorter" },
              { pl: "Bo UI/API są asynchroniczne i bywają niestabilne — ogranicza to flaky testy", en: "Because UI/API are asynchronous and sometimes unstable — it reduces flaky tests" },
              { pl: "Bo wymaga tego TypeScript", en: "Because TypeScript requires it" },
              { pl: "Aby zwiększyć zużycie pamięci", en: "To increase memory usage" },
            ],
            answer: 1,
            explain: { pl: "Czekanie na warunek zamiast „na sztywno\" stabilizuje testy zależne od czasu odpowiedzi.", en: "Waiting for a condition rather than a fixed sleep stabilizes tests that depend on response time." },
          },
          {
            type: "mc",
            q: { pl: "Do czego służy Page Object Model?", en: "What is the Page Object Model for?" },
            options: [
              { pl: "Do stylowania stron", en: "Styling pages" },
              { pl: "Do enkapsulacji selektorów i akcji strony, by testy były czytelne i odporne na zmiany UI", en: "Encapsulating a page's selectors and actions so tests are readable and resilient to UI changes" },
              { pl: "Do kompilacji TypeScript", en: "Compiling TypeScript" },
              { pl: "Do zarządzania bazą danych", en: "Managing a database" },
            ],
            answer: 1,
            explain: { pl: "POM trzyma selektory w jednym miejscu — zmiana UI = poprawka w jednej klasie.", en: "POM keeps selectors in one place — a UI change means a fix in a single class." },
          },
          {
            type: "fill",
            q: { pl: "Uzupełnij typ pozwalający nadpisać tylko część pól fixture'a: <code>___&lt;Uzytkownik&gt;</code>", en: "Fill in the type that lets you override only some fixture fields: <code>___&lt;User&gt;</code>" },
            answer: ["Partial"],
            explain: { pl: "<code>Partial&lt;T&gt;</code> czyni wszystkie pola opcjonalnymi — idealne do nadpisań.", en: "<code>Partial&lt;T&gt;</code> makes all fields optional — perfect for overrides." },
          },
          {
            type: "mc",
            q: { pl: "Czym jest „flaky test\"?", en: "What is a “flaky test\"?" },
            options: [
              { pl: "Test, który zawsze przechodzi", en: "A test that always passes" },
              { pl: "Test, który raz przechodzi, a raz pada bez zmiany kodu (niedeterministyczny)", en: "A test that sometimes passes and sometimes fails without code changes (non-deterministic)" },
              { pl: "Test napisany w innym języku", en: "A test written in another language" },
              { pl: "Test bez asercji", en: "A test with no assertions" },
            ],
            answer: 1,
            explain: { pl: "Flaky test daje różne wyniki przy tym samym kodzie — zwykle przez warunki wyścigu lub złe czekanie.", en: "A flaky test yields different results for the same code — usually due to race conditions or bad waiting." },
          },
        ],
      },
    ],
  },
];

/* ---------- Osiągnięcia / odznaki ---------- */
const ACHIEVEMENTS = [
  { id: "first-steps", icon: "👣", title: { pl: "Pierwsze kroki", en: "First steps" }, desc: { pl: "Ukończ swój pierwszy moduł.", en: "Complete your first module." } },
  { id: "beginner-done", icon: "🌱", title: { pl: "Adept", en: "Adept" }, desc: { pl: "Ukończ poziom Początkujący.", en: "Finish the Beginner level." } },
  { id: "intermediate-done", icon: "⚙️", title: { pl: "Rzemieślnik", en: "Craftsman" }, desc: { pl: "Ukończ poziom Średnio zaawansowany.", en: "Finish the Intermediate level." } },
  { id: "advanced-done", icon: "🧠", title: { pl: "Mistrz typów", en: "Type master" }, desc: { pl: "Ukończ poziom Zaawansowany.", en: "Finish the Advanced level." } },
  { id: "pro-done", icon: "🛡️", title: { pl: "Profesjonalista", en: "Professional" }, desc: { pl: "Ukończ poziom TypeScript Pro.", en: "Finish the TypeScript Pro level." } },
  { id: "qa-done", icon: "🤖", title: { pl: "Automatyk QA", en: "QA Automator" }, desc: { pl: "Ukończ poziom Automatyzacja QA.", en: "Finish the QA Automation level." } },
  { id: "streak-5", icon: "🔥", title: { pl: "Na fali", en: "On fire" }, desc: { pl: "Zdobądź serię 5 poprawnych zaliczeń.", en: "Reach a streak of 5 correct completions." } },
  { id: "lab-ace", icon: "🧪", title: { pl: "Laborant", en: "Lab ace" }, desc: { pl: "Zalicz 5 laboratoriów.", en: "Pass 5 labs." } },
  { id: "perfect-quiz", icon: "💯", title: { pl: "Perfekcjonista", en: "Perfectionist" }, desc: { pl: "Zalicz quiz bez żadnego błędu.", en: "Pass a quiz with no mistakes." } },
  { id: "graduate", icon: "🎓", title: { pl: "Absolwent", en: "Graduate" }, desc: { pl: "Ukończ cały kurs TypeQuest.", en: "Complete the entire TypeQuest course." } },
];

/* XP wymagane na kolejne poziomy gracza (skala) */
const XP_PER_LEVEL = 120;
