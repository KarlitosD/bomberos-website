import { useState } from "react";
import { Redirect } from "wouter";
import { Header } from "@/components/Header";
import { createAssociate } from "@/services/associates";
import { useAuth } from "@/hooks/useAuth";
import "./style.css";


const initNewAssociate = {
  dni: "",
  name: "",
  surname: "",
  phone_num: "",
  address: "",
  email: ""
};

export function Form() {
  const { session } = useAuth()
  const [newAssociate, setNewAssociate] = useState(initNewAssociate);
  
  async function createNewAssociate() {
    await createAssociate(newAssociate);
    setNewAssociate(initNewAssociate);
  }
  function handleForm(e) {
    e.preventDefault();
    createNewAssociate();
  }

  const createHandleChange = property => event => {
    setNewAssociate({ ...newAssociate, [property]: event.target.value })
  }

  if(session) return <Redirect to="/" />

  return (
    <>
      <Header />
      <form id="mainForm" onSubmit={handleForm}>
        <div id="tittleBox">
          <h1 id="tittle">FORMULARIO DE INSCRIPCIÓN</h1>
        </div>
        <div id="ansBox">
          <div className="row">
            <label className="rowLabel">
              Nombre/s:
              <input
                className="rowInput"
                value={newAssociate.name}
                type="text"
                onChange={createHandleChange("name") }
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Apellido:
              <input
                className="rowInput"
                value={newAssociate.surname}
                type="text"
                onChange={createHandleChange("surname")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Correo Electrónico:
              <input
                className="rowInput"
                value={newAssociate.email}
                type="email"
                onChange={createHandleChange("email")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Número de Teléfono:
              <input
                className="rowInput"
                value={newAssociate.phone_num}
                type="tel"
                onChange={(e) =>
                  setNewAssociate(createHandleChange("phone_num"))
                }
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              DNI:
              <input
                className="rowInput"
                value={newAssociate.dni}
                type="number"
                onChange={createHandleChange("dni")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Domicilio:
              <input
                className="rowInput"
                value={newAssociate.address}
                type="text"
                onChange={createHandleChange("address")}
                required
              />
            </label>
          </div>
          <button id="btnSend" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
}
