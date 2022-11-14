import styles from "./style.module.css";
import { useState } from "react";
import { supabase } from "@/supabase.js";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom"; 
import logoUrl from "@/assets/img/logo.png"

export function Login() {
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(credentials);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createHandleChange = (name) => (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [name]: event.target.value,
    }));
  };

  if (session) return <Navigate to="/" />;

  return (
    <>
    <div className={styles.fondo}/>
      <div className={styles.loginBox}>
        <img src={logoUrl} className={styles.avatar}/>
        <h1>Inicia Sesion</h1>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label for="username">Email</label>
            <input 
              type="text" 
              placeholder="Ingresa tu Email"
              onChange={createHandleChange("email")}
              name="email"
              required
            />
              <label for="password">Contraseña</label>
              <input 
                type="password" 
                placeholder="Ingresa tu D.N.I"
                onChange={createHandleChange("password")}
                minLength={6}
                required
              />
                  <button className={styles.submit} disabled={loading}>Ingresar</button>
                  <a className={styles.account} href="#">¿No tenes una cuenta? asociate</a>
            </form>
      </div>
    </>
  );
}
