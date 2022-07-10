import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import { FormUser } from "./components/FormUser";
// import { Route } from 'wouter'

async function getUsers() {
  const users = await supabase.from("users").select("name");
  return users;
}

function App() {
  useEffect(() => {
    
    getUsers().then((res) => console.log(res.data))
  }, [])

  return (
    <div className="App container">
      <FormUser />
    </div>
  );
}

export default App;
