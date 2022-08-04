// import { useEffect } from "react";
import { Redirect, Route } from "wouter";
import { Container, Navbar } from "react-bootstrap";
import { supabase } from "./supabase";
import { FormUser } from "./components/FormUser";
import { Home } from "./pages/Home"
// import { Info } from "./pages/Info"
async function getUsers() {
  const users = await supabase.from("users").select("name");
  return users;
}

function App() {
  // useEffect(() => {
  //   getUsers().then((res) => console.log(res.data));
  // }, []);

  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Algun logo</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/form">

        </Route>

      </Container>
    </>
  );
}

export default App;
