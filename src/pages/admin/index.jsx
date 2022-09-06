import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { getAssociates } from "@/services/associates";

export function Admin() {
  const [associates, setAssociates] = useState([]);
  useEffect(() => {
    fetchAssociates();
  }, []);

  async function fetchAssociates() {
    const data = await getAssociates();
    setAssociates(data);
  }
  useEffect(() =>{
    console.log("data:", associates)
  },[associates])
  return(
    <>
      <Header />
      
    </>
  );
}
