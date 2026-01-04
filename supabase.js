// Configuration Supabase (JS PUR, sans HTML)
const SUPABASE_URL = "https://hhpxphszxxhtfwfiucoy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocHhwaHN6eHhodGZ3Zml1Y295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MDg0MjYsImV4cCI6MjA4MzA4NDQyNn0.JmgsCpIvTyVEgqFrfj1DkrB80iW1T9_dQcgmudAfvuU";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

