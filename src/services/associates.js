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
    const body = JSON.stringify(newAssociates.map(({ email, dni: password }) => ({ email, password })))
    const { data, error } = await supabase.from("associates").insert(newAssociates)
    const { data: user, error: createUserError } = await supabase.functions.invoke("associates", { body })
    console.log({ user, createUserError })
    if(error || createUserError) throw error || createUserError
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
