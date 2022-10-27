import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Route, Switch,  } from "wouter";
import "gridjs/dist/theme/mermaid.css";
import { LateralMenu } from "@/components/LateralMenu";
import { useAuth } from "@/hooks/useAuth"
import { Associates } from "./associates.jsx";
import { Applicants } from "./applicants.jsx";
import "./style.css";

export function Admin() {
  const { user } = useAuth()
  const [associate, setAssociate] = useState({})
  const [location, setLocation] = useLocation()
  useEffect(() => {
    if(user)
      getAssociate(user.id).then(associate => {
        setAssociate(associate)
        if(associate?.role !== "associate")
          setLocation("/profile")
      })
  }, [])

  return (
    <>      
      <section className="admin-container">
        <LateralMenu />

        <Switch>  
          <Route path="/">
            <h2>Perfil del admin</h2>
          </Route>
          <Route path="/socios">
            <Associates />
          </Route>
          <Route path="/aspirantes">
            <Applicants />
          </Route>
          <Route>
            <div>
              <h2>Esta pagina no existe</h2>
            </div>
          </Route>
        </Switch>
      </section>
    </>
  );
}
