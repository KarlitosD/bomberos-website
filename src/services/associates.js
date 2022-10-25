import { supabase } from "@/supabase.js";

export async function getAssociates() {
  const { data } = await supabase.from("associates").select();
  return data;
}

const signUp = ({ email, dni: password }) => supabase.auth.signUp({ email, password})

export async function createAssociate(newAssociates) {
  try {
    const newAssociatesReversed = structuredClone(newAssociates).reverse()
    console.log("first")
    const allPromises = await Promise.allSettled([
      ...newAssociatesReversed.map(signUp),
      supabase.from("associates").insert(newAssociates)
    ]) 
    console.log(allPromises)
    const { error } = allPromises.at(-1)
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
