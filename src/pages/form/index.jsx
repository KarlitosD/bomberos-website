import { useState } from "react";
import mpImage from "@/assets/img/mp.png";
import moneyImage from "@/assets/img/dinero.png";
import { Modal } from "@/components/Modal";
import { createAssociate } from "@/services/associates";
import styles from "./style.module.css";

const initNewAssociate = {
  dni: "",
  name: "",
  surname: "",
  phoneNumber: "",
  cellphoneNumber: "",
  address: "",
  email: "",
  paymentMethod: "mercadopago",
  plan: "monthly",
};

export function Form() {
  const [newAssociates, setNewAssociates] = useState([]);
  const [newAssociate, setNewAssociate] = useState(initNewAssociate);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);

  const handleForm = async (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.getAttribute("action");
    console.log({ action });
    if (action === "add") {
      setNewAssociates([...newAssociates, newAssociate]);
    } else if (action === "submit") {
      const { error } = await createAssociate([...newAssociates, newAssociate]);
      setOpenModal(true);
      setError(error);
      setNewAssociates([]);
    }
    setNewAssociate(initNewAssociate);
  };

  const createHandleChange = (property) => (event) => {
    setNewAssociate({ ...newAssociate, [property]: event.target.value });
  };

  return (
    <>
      <form className={styles.mainForm} onSubmit={handleForm}>
        <div className={styles.titleBox}>
          <h1>FORMULARIO DE INSCRIPCIÓN</h1>
          <h3>Socios a agregar: {newAssociates.length + 1}</h3>
        </div>
        <div className={styles.ansBox}>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Nombre/s:
              <input
                className={styles.rowInput}
                value={newAssociate.name}
                type="text"
                onChange={createHandleChange("name")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Apellido:
              <input
                className={styles.rowInput}
                value={newAssociate.surname}
                type="text"
                onChange={createHandleChange("surname")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Correo Electrónico:
              <input
                className={styles.rowInput}
                value={newAssociate.email}
                type="email"
                onChange={createHandleChange("email")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Número de Teléfono:
              <input
                className={styles.rowInput}
                value={newAssociate.phoneNumber}
                type="tel"
                onChange={createHandleChange("phoneNumber")}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Número de celular:
              <input
                className={styles.rowInput}
                value={newAssociate.cellphoneNumber}
                type="tel"
                onChange={createHandleChange("cellphoneNumber")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              DNI:
              <input
                className={styles.rowInput}
                value={newAssociate.dni}
                type="number"
                onChange={createHandleChange("dni")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Domicilio:
              <input
                className={styles.rowInput}
                value={newAssociate.address}
                type="text"
                onChange={createHandleChange("address")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Plan:
              <select
                className={styles.rowInput}
                value={newAssociate.plan}
                type="text"
                onChange={createHandleChange("plan")}
                required
              >
                <option value="monthly">Mensual (Recurrente)</option>
                <option value="annually">
                  Anual (Un solo pago no recurrente)
                </option>
              </select>
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>Metodo de pago:</label>
            <div className={styles.rowPayment}>
              <input
                className={styles.rowCheckbox}
                type="radio"
                name="payOption"
                value="mercadopago"
                checked={true}
                onChange={createHandleChange("paymentMethod")}
              />
              <img
                className={styles.rowImageIcon}
                src={mpImage}
                width={50}
                height={50}
              />
              <input
                className={styles.rowCheckbox}
                type="radio"
                name="payOption"
                value="fisico"
                onChange={createHandleChange("paymentMethod")}
              />
              <img
                className={styles.rowImageIcon}
                src={moneyImage}
                width={50}
                height={50}
              />
            </div>
          </div>
          <button className={styles.btnAdd} type="submit" action="add">
            Agregar otro socio
          </button>
          <button className={styles.btnSend} type="submit" action="submit">
            ENVIAR
          </button>
        </div>
      </form>
      <Modal open={openModal}>
        <div className={styles.modalContainer}>
          <h1 className={styles.modalMessage}>
            {error
              ? "Oh no, parece que hubo un error"
              : "Perfecto, te contactaremos por whatsapp cuando seas aceptado"}
          </h1>
          <button
            onClick={() => setOpenModal(false)}
            className={styles.modalBtn}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </>
  );
}
