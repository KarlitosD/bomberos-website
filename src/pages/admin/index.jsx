import { json, Outlet, redirect, useLoaderData } from "react-router-dom";
import { supabase } from "@/supabase";
import { LateralMenu } from "@/components/LateralMenu";
import { getAssociate } from "@/services/associates"
import styles from "./style.module.css";
import "gridjs/dist/theme/mermaid.css";

export const loader = async () => {
  const user = supabase.auth.user()
  // if(!user) return redirect("/login")
  if(!user) return null
  const associate = await getAssociate(user?.id)
  if(associate?.role) return redirect("/profile")
  return json(associate)
}

export function Admin() {
  const associate = useLoaderData()
  return (
    <>
      <section className={styles.adminContainer}>
        <LateralMenu />
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </section>
    </>
  );
}
