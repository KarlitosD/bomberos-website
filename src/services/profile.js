import { supabase } from "@/supabase.js";
export async function getData(dni) {
    const { data, error } = await supabase
    .from('associates')
    .select('*')
    .eq('dni', dni)
    return data
  }