import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kozwheekpbfmywqnewrj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvendoZWVrcGJmbXl3cW5ld3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNjU3MDYsImV4cCI6MjAyMDg0MTcwNn0.hPDNHWEzsotXZxyIMuClQB2DfDl_7uaNXrhkcRhal_A';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;