import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { supabase } from "./supabase";
// import { Route } from 'wouter'
// import './App.css'

async function getUsers() {
  const users = await supabase.from("users").select("name");
  return users;
}

function App() {
  useEffect(() => {
    getUsers().then((res) => console.log(res.data))
  }, [])

  return (
    <div className="App">
      <FormUser />
    </div>
  );
}

export default App;
