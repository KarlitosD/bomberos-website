import styles from "./style.module.css";
import { useState } from "react";
import { supabase } from "@/supabase.js";
import logoUrl from "@/assets/img/logo.png";
import { redirect } from "react-router-dom";

export const loader = () => {
  const user = supabase.auth.user()
  if(user) return redirect("/user")
}

export function Login() {
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


  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <img src={logoUrl} className={styles.avatar} />
          <h1>Inicia Sesión</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Ingresá tu Email"
              onChange={createHandleChange("email")}
              name="email"
              id="email"
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="Ingresá tu DNI"
              onChange={createHandleChange("password")}
              minLength={6}
              id="password"
              required
            />
            <button className={styles.submit} disabled={loading}>
              Ingresar
            </button>
            <p className={styles.account}>
              ¿No tenes una cuenta? <a className={styles.link} href="/formulario/socios">Asociate</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
