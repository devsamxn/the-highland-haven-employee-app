import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://txbyuyvsjuxgeerwooyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4Ynl1eXZzanV4Z2Vlcndvb3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MjgyODcsImV4cCI6MjAzOTQwNDI4N30.I8Eoh58fuGV8yhwyLbwfpUmYdXkdkegm5vwXtwhKSFI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
