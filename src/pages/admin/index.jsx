import { Route, Switch } from "wouter";
import { Header } from "@/components/Header";
import { LateralMenu } from "@/components/LateralMenu";
import { Associates } from "./associates.jsx";
import { Applicants } from "./applicants.jsx";
import "./style.css";

export function Admin() {
  return (
    <>
      {/* Parte que van a compartir todas las paginas de admin */}
      <Header />
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
