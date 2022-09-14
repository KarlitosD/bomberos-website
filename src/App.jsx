// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route, Switch } from "wouter";
import { Form } from "./pages/form"
<<<<<<< HEAD
import { Login } from "./pages/login";
import Home from "./pages/Home"
=======
import Home from "./pages/home"
>>>>>>> 46e4b26226b6bfab846c30cbe6cbd8a07b7201d0
import Info from "./pages/info/info"
import { Admin } from "./pages/admin"
import { MercadoPago } from "./pages/mercadopago";
import { Profile } from "./pages/profile";

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
          <Route path="/login">
            <Login/>
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
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route>
            Pagina 404
          </Route>
        </Switch>
    </>
  );
}

export default App;
