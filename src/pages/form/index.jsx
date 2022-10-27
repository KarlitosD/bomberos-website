import { useState } from "react";
import mpImage from "../../assets/img/mp.png";
import moneyImage from "../../assets/img/dinero.png";
import { Modal } from "@/components/Modal";
import { createAssociate } from "@/services/associates";
import "./style.css";
import { useEffect } from "react";

const initNewAssociate = {
  dni: "",
  name: "",
  surname: "",
  phoneNumber: "",
  cellphoneNumber: "",
  address: "",
  email: "",
  paymentMethod: "mercadopago",
  plan: "monthly"
};

export function Form() {
  const [newAssociates, setNewAssociates] = useState([]);
  const [newAssociate, setNewAssociate] = useState(initNewAssociate);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.getAttribute("action");
    console.log({ action })
    if (action === "add") {
      console.log("Hola")
      setNewAssociates([...newAssociates, newAssociate]);
    } else if (action === "submit") {
      const { error } = await createAssociate([...newAssociates, newAssociate]);
      setOpenModal(true);
      setError(error);
      setNewAssociates([])
    }
    setNewAssociate(initNewAssociate)
  };

  const createHandleChange = (property) =>
    (event) => {
      setNewAssociate({ ...newAssociate, [property]: event.target.value });
    };

  return (
    <>
      <form className="mainForm" onSubmit={handleForm}>
        <div className="titleBox">
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
                onChange={createHandleChange("name")}
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
                value={newAssociate.phoneNumber}
                type="tel"
                onChange={createHandleChange("phoneNumber")}
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Número de celular:
              <input
                className="rowInput"
                value={newAssociate.cellphoneNumber}
                type="tel"
                onChange={createHandleChange("cellphoneNumber")}
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
          <div className="row">
            <label className="rowLabel">
              Plan:
              <select
                className="rowInput"
                value={newAssociate.plan}
                type="text"
                onChange={createHandleChange("plan")}
                required
              >
                <option value="monthly">Mensual (Recurrente)</option>
                <option value="annually">Anual (Un solo pago no recurrente)</option>
              </select>
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Metodo de pago:
            </label>
            <div className="rowPayment">
              <input
                className="rowCheckbox"
                type="radio"
                name="payOption"
                value="mercado pago"
                checked={true}
                onChange={createHandleChange("paymentMethod")}
                />
              <img className="rowImageIcon" src={mpImage} />
              <input
                className="rowCheckbox"
                type="radio"
                name="payOption"
                value="fisico"
                onChange={createHandleChange("paymentMethod")}
              />
              <img className="rowImageIcon" src={moneyImage} />
            </div>
          </div>
          <button className="btn btn-add" type="submit" action="add">
            Agregar otro socio
          </button>
          <button className="btn" type="submit" action="submit">
            ENVIAR
          </button>
        </div>
      </form>
      <Modal open={openModal}>
        <h1>{error ? "Oh no, parece que hubo un error" :  "Perfecto, ahora tiene que esperar a ser aceptado"}</h1>
        <button onClick={() => setOpenModal(false)}>Cerrar</button>
      </Modal>
    </>
  );
}
