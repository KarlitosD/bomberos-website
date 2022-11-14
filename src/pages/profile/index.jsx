import { useState, useEffect } from "react";
import { Redirect } from "wouter";
import { supabase } from "@/supabase";
import { useAuth } from "@/hooks/useAuth.js";
import { getAssociate } from "@/services/associates";
import styles from "./style.module.css";

export function Profile() {
  const { user = true } = useAuth();
  const [associate, setAssociate] = useState({});

  useEffect(() => {
    if (user)
      getAssociate(user.id).then((associate) => setAssociate(associate));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const newPassword = e.target.password.value;
    const { user, error } = await supabase.auth.update({
      password: newPassword,
    });
    console.log({ user });
  }

  if (!!user) return <Redirect to="/admin" />;

  if (associate?.role === "admin") return <Redirect to="/admin" />;

  return (
    <>
      <div>
        <h1>Hola</h1>
        <button onClick={() => supabase.auth.signOut()}>Cerrar session</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="password"
            placeholder="Nueva contraseña"
            name="password"
          />
        </label>
        <button>Cambiar contraseña</button>
      </form>
      <div>
        Carnet
        <button>Descargar carnet</button>
      </div>
    </>
  );
}
