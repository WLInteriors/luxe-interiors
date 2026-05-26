
-- contact_submissions: deny all client access. The contact form API uses the
-- service_role admin client (which bypasses RLS) to insert rows server-side.
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

CREATE POLICY "Deny all client access to contact submissions"
ON public.contact_submissions
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (false)
WITH CHECK (false);

-- storage.objects policies for the private 'contact-uploads' bucket.
-- All uploads/reads go through the server using the service_role client.
CREATE POLICY "Deny anon access to contact-uploads"
ON storage.objects
AS RESTRICTIVE
FOR ALL
TO anon, authenticated
USING (bucket_id <> 'contact-uploads')
WITH CHECK (bucket_id <> 'contact-uploads');
