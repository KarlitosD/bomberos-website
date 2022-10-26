import "./style.css";
import { Header } from "@/components/Header";
import { useState } from "react";
import { supabase } from "@/supabase.js"
import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "wouter";

export function Login() {
  const { session } = useAuth()
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

  if(session) return <Redirect to="/" />

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
