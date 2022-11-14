import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LateralMenu } from "@/components/LateralMenu";
import { useAuth } from "@/hooks/useAuth";
export { Associates } from "./associates.jsx";
export { Applicants } from "./applicants.jsx";
import styles from "./style.module.css";
import "gridjs/dist/theme/mermaid.css";

export function Admin() {
  const { user } = useAuth();
  const [associate, setAssociate] = useState({});
  const navigate = useNavigate()
  useEffect(() => {
    if (user)
      getAssociate(user.id).then((associate) => {
        setAssociate(associate);
        if (associate?.role !== "associate") navigate("/profile");
      });
  }, []);

  return (
    <>
      <section className={styles.adminContainer}>
        <LateralMenu />
        <Outlet />
      </section>
    </>
  );
}
