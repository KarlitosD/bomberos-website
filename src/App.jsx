// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route, Switch } from "wouter";
import { Form } from "./pages/form";
import { Login } from "./pages/login";
import { Faq } from "./pages/faqPage";
import Home from "./pages/home";
import Info from "./pages/info/info";
import { NestedRouter } from "@/components/NestedRouter";
import { LateralMenu } from "@/components/LateralMenu";

import { Header } from "@/components/Header";
import { Admin } from "./pages/admin";
import { Profile } from "./pages/profile";
import { FormApp } from "./pages/formApp";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/formApp">
          <FormApp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        <Route>
          Pagina 404
        </Route>
      </Switch>
    </>
  );
}

export default App;
