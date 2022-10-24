import { Route } from "wouter";
import { Header } from "@/components/Header";
import { LateralMenu } from "@/components/LateralMenu";
import { Associates } from "./associates.jsx"
import "./style.css";

export function Admin() {

  return (
    <>
      <Header />
      <section className="admin-container">
        <LateralMenu />
        <Route path="/">
          <Associates />
        </Route>
        <Route>
          <div>
            <h2>Esta pagina no existe</h2>
          </div>
        </Route>
      </section>
    </>
  );
}
