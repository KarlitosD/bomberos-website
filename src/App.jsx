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
import { User } from "@/pages/user"
import { Header } from "@/components/Header"


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/donaciones">
          <Donations />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/informacion/socios">
          <InfoAss />
        </Route>
        <Route path="/informacion/aspirantes">
          <InfoApp />
        </Route>
        
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/formulario/socios">
          <Form />
        </Route>
        <Route path="/formulario/aspirantes">
          <FormApp />
        </Route>
        <Route path="/user">
         <User />
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
