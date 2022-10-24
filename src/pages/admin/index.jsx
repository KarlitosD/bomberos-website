import { Route, Switch } from "wouter";
import { Header } from "@/components/Header";
import { LateralMenu } from "@/components/LateralMenu";
import { Associates } from "./associates.jsx";
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
            <Associates />
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
