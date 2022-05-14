import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://lcrcrofnitpoaipaoace.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjcmNyb2ZuaXRwb2FpcGFvYWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI0NzUzMDcsImV4cCI6MTk2ODA1MTMwN30.2rnxExubTgFO_et5QoQyNR4ekpN1TGqbZ7ThPLphnL4'
);
