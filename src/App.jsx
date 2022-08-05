// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route } from "wouter";
import { Form } from "./pages/form/form"
import Home from "./pages/Home"
import Info from "./pages/info"


function App() {

  return (
    <>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form/>
        </Route>
        <Route path="/info">
          <Info />
        </Route>
    </>
  );
}

export default App;
