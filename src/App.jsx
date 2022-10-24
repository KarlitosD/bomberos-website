import { Route, Switch } from "wouter";
import { Form } from "@/pages/form";
import { Login } from "@/pages/login";
import { Faq } from "@/pages/faqPage";
import Home from "@/pages/home";
import Info from "@/pages/info/info";
import { Admin } from "@/pages/admin";
import { Profile } from "@/pages/profile";
import { FormApp } from "@/pages/formApp";
import { NestedRouter } from "@/components/NestedRouter";
import { Header } from "@/components/Header";

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
        <Route path="/profile">
          <Profile />
        </Route>
        <NestedRouter base="/admin">
          <Admin />
        </NestedRouter>
        <Route>
          Pagina 404
        </Route>
      </Switch>
    </>
  );
}

export default App;
