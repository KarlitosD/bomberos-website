// import { useEffect } from "react";
// import { supabase } from "./supabase";
import { Route, Switch } from "wouter";
import { Form } from "./pages/form";
import { Login } from "./pages/login";
import Home from "./pages/home";
import Info from "./pages/info/info";
import { NestedRouter } from "@/components/NestedRouter";
import { Admin } from "./pages/admin";
import { Profile } from "./pages/profile";

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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
        <NestedRouter base="/admin">
          <Header />
          <section className="admin-container">
            <LateralMenu />
            <Route path="/" component={<Admin />} />
          </section>
        </NestedRouter>
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
