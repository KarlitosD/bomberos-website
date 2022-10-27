import { supabase } from "@/supabase.js";

export async function getAssociates() {
  const { data } = await supabase.from("associates").select();
  return data;
}

export async function getAssociate(userId) {
  const { data } = await supabase.from("associates").select().match({ userId })
  return data
}

export async function createAssociate(newAssociates) {
  try {
    const { data, error } = await supabase.from("associates").insert(newAssociates)
    if(error) throw error
    return { error: false }
  } catch (error) {
    console.log(error.message)
    return { error }
  }
}
export async function deleteAssociate(dni) {
  await supabase.from("associates").delete().match({ dni });
}
export async function updateAssociate(updatedData) {
  console.log("hola :)");
}
