import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { getAssociates, createAssociate } from "@/services/associates";

const initNewAssociate = {
  dni: "",
  name: "",
  surname: "",
  phone_num: "",
  address: "",
};
export function Form() {
  const [ , setAssociates] = useState([]);
  const [newAssociate, setNewAssociate] = useState(initNewAssociate);
  useEffect(() => {
    fetchAssociates();
  }, []);
  async function fetchAssociates() {
    const { data } = getAssociates();
    setAssociates(data);
  }
  async function createNewAssociate() {
    await createAssociate(newAssociate);
    setNewAssociate(initNewAssociate);
    fetchAssociates();
  }
  function handleForm(e) {
    e.preventDefault();
    createNewAssociate();
  }
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
                onChange={(e) =>
                  setNewAssociate({ ...newAssociate, name: e.target.value })
                }
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
                onChange={(e) =>
                  setNewAssociate({ ...newAssociate, surname: e.target.value })
                }
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
                onChange={(e) =>
                  setNewAssociate({ ...newAssociate, email: e.target.value })
                }
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
                  setNewAssociate({
                    ...newAssociate,
                    phone_num: e.target.value,
                  })
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
                onChange={(e) =>
                  setNewAssociate({ ...newAssociate, dni: e.target.value })
                }
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
                onChange={(e) =>
                  setNewAssociate({ ...newAssociate, address: e.target.value })
                }
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
