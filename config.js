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
  url: "https://aqfxdwrjzulkvenrymgq.supabase.co/rest/v1/",      // np. "https://abcdefgh.supabase.co"
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZnhkd3JqenVsa3ZlbnJ5bWdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MjY4MDMsImV4cCI6MjA5NzEwMjgwM30.NEdToCMIk2UQcpj2pp3Z_5oqViAPQXXx4UF9YqUKw2g",
};
