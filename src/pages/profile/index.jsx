import { useState, useEffect } from "react";
import { Redirect } from "wouter";
import { useAuth } from "@/hooks/useAuth.js"
import { getAssociate } from "@/services/associates";
import "./style.css";

export function Profile() {
  const { user } = useAuth()
  const [associate, setAssociate] = useState({})

  useEffect(() => {
    if(user)
      getAssociate(user.id).then(associate => setAssociate(associate))
  }, [])

  if(associate?.role === "admin")
    return <Redirect to="/admin" />

  return (
    <>
      <div>
        <h1>Hola</h1>
        <button>Cerrar session</button>
      </div>

      <div>
        Carnet
        <button>Descargar carnet</button>
      </div>

    </>
  );
}
