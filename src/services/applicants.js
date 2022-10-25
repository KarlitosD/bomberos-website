import { supabase } from "@/supabase.js";
export async function getApplicants() {
  const { data } = await supabase.from("applicants").select();
  return data;
}
export async function createApplicant(newApplicant) {
  const response = await supabase
    .from("applicants")
    .insert([newApplicant])
    .single();
    console.log(response.error)
}
export async function deleteApplicant(dni) {
  await supabase.from("applicants").delete().match({ dni });
}
export async function updateAssociate(updatedData) {
  console.log("hola :)");
}
