import { useState, useEffect } from "react";
import { Redirect } from "wouter";
import { supabase } from "@/supabase"
import { useAuth } from "@/hooks/useAuth.js"
import { getAssociate } from "@/services/associates";
import "./style.css";

export function Profile() {
  const { user = true } = useAuth()
  const [associate, setAssociate] = useState({})

  useEffect(() => {
    if(user)
      getAssociate(user.id).then(associate => setAssociate(associate))
  }, [])

  if(!user)
    return <Redirect to="/admin" />

  if(associate?.role === "admin")
    return <Redirect to="/admin" />

  return (
    <>
      <div>
        <h1>Hola</h1>
        <button onClick={() => supabase.auth.signOut()}>Cerrar session</button>
      </div>

      <div>
        Carnet
        <button>Descargar carnet</button>
      </div>
    </>
  );
}
