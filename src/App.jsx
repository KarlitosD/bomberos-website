// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route, Switch } from "wouter";
import { Form } from "./pages/form"
import Home from "./pages/Home"
import Info from "./pages/info/info"
import { Admin } from "./pages/admin"
import { MercadoPago } from "./pages/mercadopago";

function App() {

  return (
    <>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/mp">
            <MercadoPago />
          </Route>
          <Route>
            Pagina 404
          </Route>
        </Switch>
    </>
  );
}

export default App;
