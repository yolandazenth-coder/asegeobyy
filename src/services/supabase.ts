import { createClient } from '@supabase/supabase-js';

// Access Vite environment variables safely in browser and node
const supabaseUrl = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || 
  'https://zhjixbqefnqwninqxbqd.supabase.co';

const supabaseAnonKey = 
  (typeof import.meta !== 'undefined' && (import.meta.env?.VITE_SUPABASE_ANON_KEY || import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY)) || 
  'sb_secret_aM7bmgRdIimEw790Wt3UdA_01o56E_Q';

/**
 * Primary Supabase Client instance
 * Configured with environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export const SUPABASE_URL = supabaseUrl;
export const SUPABASE_ANON_KEY = supabaseAnonKey;
