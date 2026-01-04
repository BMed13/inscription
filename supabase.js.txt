<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = "https://hhpxphszxxhtfwfiucoy.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocHhwaHN6eHhodGZ3Zml1Y295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MDg0MjYsImV4cCI6MjA4MzA4NDQyNn0.JmgsCpIvTyVEgqFrfj1DkrB80iW1T9_dQcgmudAfvuU";

  window.supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
</script>
