import "./style.css";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { supabase } from "@/supabase.js"
// import { createAssociate, getAssociates } from "@/services/associates";

export function Login() {
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn(credentials)
      if(error) throw error
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  const createHandleChange = name => event => {
    setCredentials(credentials => ({ ...credentials, [name]: event.target.value }))
  } 
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Iniciar Sesion</h1>
        <label>
          Usuario
          <input type="email" onChange={createHandleChange("email")} name="email" required />
        </label>
        <label>
          Constraseña
          <input type="password" onChange={createHandleChange("password")} name="password" minLength={6} required />
        </label>
        <button disabled={loading}>Entrar</button>
      </form>
    </>
  );
}
