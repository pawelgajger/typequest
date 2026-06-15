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
];

/* ---------- Osiągnięcia / odznaki ---------- */
const ACHIEVEMENTS = [
  { id: "first-steps", icon: "👣", title: { pl: "Pierwsze kroki", en: "First steps" }, desc: { pl: "Ukończ swój pierwszy moduł.", en: "Complete your first module." } },
  { id: "beginner-done", icon: "🌱", title: { pl: "Adept", en: "Adept" }, desc: { pl: "Ukończ poziom Początkujący.", en: "Finish the Beginner level." } },
  { id: "intermediate-done", icon: "⚙️", title: { pl: "Rzemieślnik", en: "Craftsman" }, desc: { pl: "Ukończ poziom Średnio zaawansowany.", en: "Finish the Intermediate level." } },
  { id: "advanced-done", icon: "🧠", title: { pl: "Mistrz typów", en: "Type master" }, desc: { pl: "Ukończ poziom Zaawansowany.", en: "Finish the Advanced level." } },
  { id: "streak-5", icon: "🔥", title: { pl: "Na fali", en: "On fire" }, desc: { pl: "Zdobądź serię 5 poprawnych zaliczeń.", en: "Reach a streak of 5 correct completions." } },
  { id: "lab-ace", icon: "🧪", title: { pl: "Laborant", en: "Lab ace" }, desc: { pl: "Zalicz 5 laboratoriów.", en: "Pass 5 labs." } },
  { id: "perfect-quiz", icon: "💯", title: { pl: "Perfekcjonista", en: "Perfectionist" }, desc: { pl: "Zalicz quiz bez żadnego błędu.", en: "Pass a quiz with no mistakes." } },
  { id: "graduate", icon: "🎓", title: { pl: "Absolwent", en: "Graduate" }, desc: { pl: "Ukończ cały kurs TypeQuest.", en: "Complete the entire TypeQuest course." } },
];

/* XP wymagane na kolejne poziomy gracza (skala) */
const XP_PER_LEVEL = 120;
