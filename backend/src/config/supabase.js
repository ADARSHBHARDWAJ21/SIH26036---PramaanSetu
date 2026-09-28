import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseKey = supabaseServiceRoleKey || process.env.SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  !/your-project-ref|replace|placeholder/i.test(supabaseUrl) &&
  !/your-supabase|replace|placeholder/i.test(supabaseKey)
);

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

if (isSupabaseConfigured) {
  console.log('✓ Connected to Supabase Cloud PostgreSQL & Storage at', supabaseUrl);
} else {
  console.log('ℹ Supabase credentials not set or using placeholders. Resilient embedded database engine active.');
}
