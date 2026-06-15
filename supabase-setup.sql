-- =========================================================================
-- TypeQuest — konfiguracja bazy Supabase do synchronizacji postępów.
-- Uruchom całość w panelu Supabase: SQL Editor → New query → Run.
-- =========================================================================

-- Tabela przechowująca stan gry każdego użytkownika (jedna wiersz na konto).
create table if not exists public.progress (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  state      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Włącz Row Level Security: domyślnie nikt nie ma dostępu...
alter table public.progress enable row level security;

-- ...a poniższe reguły pozwalają KAŻDEMU użytkownikowi czytać i zapisywać
-- WYŁĄCZNIE swój własny wiersz (auth.uid() = identyfikator zalogowanego usera).
drop policy if exists "progress_select_own" on public.progress;
create policy "progress_select_own" on public.progress
  for select using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.progress;
create policy "progress_insert_own" on public.progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.progress;
create policy "progress_update_own" on public.progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
