// import { useEffect } from "react";
import { Redirect, Route } from "wouter";
import { supabase } from "./supabase";
import { Form } from "./pages/form.jsx";
import Home from "./pages/Home.jsx"

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
          <Home />
        </Route>
        <Route path="/form">

        </Route>
        <Route path="/info">
          {/* <Info /> */}
          <h1>Info</h1>
        </Route>
    </>
  );
}

export default App;
