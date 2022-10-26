import { useState } from "react";
import { Redirect } from "wouter";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
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
  const [newAssociates, setNewAssociates] = useState([]);
  const [newAssociate, setNewAssociate] = useState(initNewAssociate);
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(null)

  const handleForm = async (e) => {
    e.preventDefault();
    const { error } = await createAssociate(newAssociates.length < 1 ? newAssociate : newAssociates);
    // setNewAssociate(initNewAssociate);
    setOpenModal(true)
    setError(error)
  }

  const createHandleChange = property => event => {
    setNewAssociate({ ...newAssociate, [property]: event.target.value })
  }

  const addAssociate = () => {
    setNewAssociates([...newAssociates, newAssociate])
    setNewAssociate(initNewAssociate);
  }

  // if(session) return <Redirect to="/" />

  return (
    <>
      
      <form className="mainForm" onSubmit={handleForm}>
        <div className="tittleBox">
          <h1>FORMULARIO DE INSCRIPCIÓN</h1>
          <h3>Socios a agregar: {newAssociates.length + 1}</h3>
        </div>
        <div className="ansBox">
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
                onChange={createHandleChange("phone_num") }
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
          <button className="btn btn-add" onClick={addAssociate}>Agregar otro socio</button>
          <button className="btn" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
      <Modal open={openModal}>
        <h1>{ error ? "a": "b" }</h1>
        <button onClick={() => setOpenModal(false)}>Cerrar</button>
      </Modal>
    </>
  );
}
