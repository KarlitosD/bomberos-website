import { Route, Switch } from "wouter";
import { Form } from "@/pages/form";
import { Login } from "@/pages/login";
import { Faq } from "@/pages/faqPage";
import { Home } from "@/pages/home";
import { Admin } from "@/pages/admin";
import { Profile } from "@/pages/profile";
import { FormApp } from "@/pages/formApp";
import { Donations } from "@/pages/donations"
import { InfoApp } from "@/pages/infoApp"
import { InfoAss } from "@/pages/infoAss"
import { NestedRouter } from "@/components/NestedRouter";


function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/donations">
          <Donations />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/infoAss">
          <InfoAss />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/infoApp">
          <InfoApp />
        </Route>
        <Route path="/formApp">
          <FormApp />
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
