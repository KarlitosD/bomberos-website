// import { useEffect } from "react";
import { Redirect, Route } from "wouter";
import { supabase } from "./supabase";
import { Form } from "./pages/form.jsx";

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
        <Route path="/">
          <Redirect to="/form" />
        </Route>
        <Route path="/form">
          <Form/>
        </Route>
    </>
  );
}

export default App;
