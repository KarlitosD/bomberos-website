import { useLoaderData, redirect, json } from "react-router-dom"; 
import { supabase } from "@/supabase";
import { getAssociate } from "@/services/associates";
import styles from "./style.module.css";

export const loader = async () => {
  const user = supabase.auth.user()
  // if(!user) return redirect("/login")
  if(!user) return null
  const associate = await getAssociate(user?.id)
  if(associate?.role === "admin") return redirect("/admin")
  return json(associate)
}

export function Profile() {
  const associate = useLoaderData()

  async function handleSubmit(e) {
    e.preventDefault();
    const newPassword = e.target.password.value;
    const { user, error } = await supabase.auth.update({
      password: newPassword,
    });
    console.log({ user });
  }
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
