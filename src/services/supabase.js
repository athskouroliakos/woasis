import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rhaepikxrzveplcjxaic.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYWVwaWt4cnp2ZXBsY2p4YWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzNDcxMTIsImV4cCI6MjAwNjkyMzExMn0.nyEB2CirWb45eFa9HUFt4EzVzAEdXbHYajk7gJ4LAEk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
