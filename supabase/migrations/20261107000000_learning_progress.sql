-- Tiến độ học của bé, mỗi tài khoản (phụ huynh) một dòng.
create table if not exists public.learning_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  progress jsonb not null default '{}'::jsonb,
  exercise_best_stars jsonb not null default '{}'::jsonb,
  mascot text not null default 'chiikawa',
  updated_at timestamptz not null default now()
);

alter table public.learning_progress enable row level security;

-- Mỗi người dùng chỉ đọc/ghi được dòng của chính mình.
drop policy if exists "learning_progress_select_own" on public.learning_progress;
create policy "learning_progress_select_own" on public.learning_progress
  for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "learning_progress_insert_own" on public.learning_progress;
create policy "learning_progress_insert_own" on public.learning_progress
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "learning_progress_update_own" on public.learning_progress;
create policy "learning_progress_update_own" on public.learning_progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

grant select, insert, update on public.learning_progress to authenticated;
revoke all on public.learning_progress from anon;
