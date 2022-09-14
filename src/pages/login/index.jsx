import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { getAssociates, createAssociate } from "@/services/associates";


export function Login() {

  return (<>
  <form>
    <h1>Iniciar Sesion</h1>
    <label>Usuario</label>
    <input type="text"></input>
    <label>Constraseña</label>
    <input type="password"></input>
    <button>Entrar</button>

  </form>
  
  </>
  );
}
