// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route, Switch } from "wouter";
import { Form } from "./pages/form"
import Home from "./pages/Home"
import Info from "./pages/info/info"


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
          <Route>
            Pagina 404
          </Route>
        </Switch>
    </>
  );
}

export default App;
