/* =========================================================================
   Konfiguracja synchronizacji w chmurze (Supabase).
   --------------------------------------------------------------------------
   1. Załóż darmowy projekt na https://supabase.com
   2. Wejdź w: Project Settings → API
   3. Skopiuj "Project URL" oraz klucz "anon public" poniżej.
   4. W zakładce SQL Editor uruchom zawartość pliku supabase-setup.sql
      (tworzy tabelę postępów + reguły bezpieczeństwa RLS).
   5. (Opcjonalnie) Authentication → Providers → Email → wyłącz "Confirm email",
      aby rejestracja działała od razu, bez potwierdzania mailem.

   UWAGA: klucz "anon public" jest BEZPIECZNY do umieszczenia w kodzie front-endu
   — to klucz publiczny, a dostęp do danych chronią reguły RLS w bazie.
   NIE wklejaj tu klucza "service_role"!
   ========================================================================= */
window.SUPABASE_CONFIG = {
  url: "YOUR_SUPABASE_URL",      // np. "https://abcdefgh.supabase.co"
  anonKey: "YOUR_SUPABASE_ANON_KEY",
};
