import { supabase } from "@/supabase.js";
export async function getAssociates() {
  const { data } = await supabase.from("associates").select();
  return data;
}
export async function createAssociate(newAssociate) {
  await supabase.from("associates").insert([newAssociate]).single();
}
export async function deleteAssociate(dni) {
  await supabase.from("associates").delete().match({ dni });
}
export async function updateAssociate(updatedData) {
  console.log("hola :)");
}
