
-- Contact form submissions
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  location text not null,
  sector text not null,
  project_type text not null,
  budget text not null,
  timeline text not null,
  message text,
  file_paths text[] not null default '{}',
  status text not null default 'new'
);

alter table public.contact_submissions enable row level security;

-- Public form: anyone can insert, no one can read (service role bypasses)
create policy "anyone can submit"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

-- No select policy = no one can read via API. Admin reads via service role.

-- Storage bucket for uploaded photos/drawings (private)
insert into storage.buckets (id, name, public)
values ('contact-uploads', 'contact-uploads', false)
on conflict (id) do nothing;

create policy "anyone can upload to contact-uploads"
on storage.objects for insert
to anon, authenticated
with check (bucket_id = 'contact-uploads');
