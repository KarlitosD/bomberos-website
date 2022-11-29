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
    const { data: { associates }, error: createUserError } = await supabase.functions.invoke("associates", { body: JSON.stringify(newAssociates) })
    if(createUserError) throw createUserError
    
    const { data: [group], error: createGroupError } = await supabase.from("groups").insert({ responsable: associates[0].dni })
    if(createGroupError) throw createGroupError

    const { data, error: createAssociateError } = await supabase.from("associates").insert(
      associates.map(associate => ({ ...associate, groupId: group.id }))
    )
    if(createAssociateError) throw createAssociateError
    
    return { error: false }
  } catch (error) {
    console.log(error.message)
    return { error }
  }
}
export async function deleteAssociate(dni) {
  await supabase.from("associates").delete().match({ dni });
}
export async function updateAssociate(dni, updatedData) {
  const { data, error } = await supabase.from("associates").update(updatedData).match({ dni })
  if(error) console.error(error)
}

export async function approveAssociate(dni){
  await Promise.all([
    supabase.from("actions").insert({ type: "Alta", associate_dni: dni }),
    updateAssociate(dni, { approved: true })
  ])
}
