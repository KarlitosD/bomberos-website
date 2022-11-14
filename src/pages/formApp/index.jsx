import styles from "../form/style.module.css";
import { useState } from "react";
import { createApplicant } from "@/services/applicants";

const initNewApplicant = {
  DNI: "",
  name: "",
  surname: "",
  birthDate: "",
  height: "",
  weight: "",
  bloodType: "",
  email: "",
  address: "",
  district: "",
  postcode: "",
  finishedStudies: "",
  cellphoneNumber: "",
  phoneNumber: "",
  firefighterSoc: false,
  firefighterSocName: "",
};
export function FormApp() {
  const [newApplicant, setNewApplicant] = useState(initNewApplicant);
  async function createNewApplicant() {
    await createApplicant(newApplicant);
    setNewApplicant(initNewApplicant);
  }
  function handleForm(e) {
    e.preventDefault();
    createNewApplicant();
  }
  const createHandleChange =
    (name, value = "value") =>
    (event) => {
      setNewApplicant((newApplicant) => ({
        ...newApplicant,
        [name]: event.target[value],
      }));
    };
  return (
    <>
      <form className={styles.mainForm} onSubmit={handleForm}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>FORMULARIO DE INSCRIPCIÓN PARA APLICANTES</h1>
        </div>
        <div className={styles.ansBox}>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Documento de identidad:
              <input
                className={styles.rowInput}
                value={newApplicant.DNI}
                type="number"
                onChange={createHandleChange("DNI")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Nombre/s:
              <input
                className={styles.rowInput}
                value={newApplicant.name}
                type="text"
                onChange={createHandleChange("name")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Apellido/s:
              <input
                className={styles.rowInput}
                value={newApplicant.surname}
                type="text"
                onChange={createHandleChange("surname")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Fecha de Nacimiento:
              <input
                className={styles.rowInput}
                value={newApplicant.birthDate}
                type="date"
                onChange={createHandleChange("birthDate")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Altura(cm):
              <input
                className={styles.rowInput}
                value={newApplicant.height}
                type="number"
                onChange={createHandleChange("height")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Peso(kg):
              <input
                className={styles.rowInput}
                value={newApplicant.weight}
                type="number"
                onChange={createHandleChange("weight")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Grupo Sanguíneo:
              <select
                className={styles.rowInput}
                onChange={createHandleChange("bloodType")}
                required
              >
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Correo Electrónico:
              <input
                className={styles.rowInput}
                value={newApplicant.email}
                type="email"
                onChange={createHandleChange("email")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Domicilio (Calle y Número):
              <input
                className={styles.rowInput}
                value={newApplicant.address}
                type="text"
                onChange={createHandleChange("address")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Localidad:
              <input
                className={styles.rowInput}
                value={newApplicant.district}
                type="text"
                onChange={createHandleChange("district")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Código Postal:
              <input
                className={styles.rowInput}
                value={newApplicant.postcode}
                type="text"
                onChange={createHandleChange("postcode")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Estudios Finalizados:
              <select
                className={styles.rowInput}
                onChange={createHandleChange("finishedStudies")}
                required
              >
                <option value="pri">Primaria</option>
                <option value="sec">Secundaria</option>
                <option value="postSec">Superior</option>
                <option value="none">Sin Educación</option>
              </select>
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Número de Celular:
              <input
                className={styles.rowInput}
                value={newApplicant.cellphoneNumber}
                type="tel"
                pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                placeholder="12-3456-7890"
                maxLength={12}
                onChange={createHandleChange("cellphoneNumber")}
                required
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              Número de Teléfono:
              <input
                className={styles.rowInput}
                value={newApplicant.phoneNumber}
                type="tel"
                pattern="[0-9]{4}-[0-9]{4}"
                placeholder="1234-5678"
                maxLength={9}
                onChange={createHandleChange("phoneNumber")}
              />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.rowLabel}>
              INTEGRÓ o INTEGRA ALGUNA SOCIEDAD DE BOMBEROS?
              <input
                className={styles.rowInput}
                checked={newApplicant.firefighterSoc}
                type="checkbox"
                onChange={createHandleChange("firefighterSoc", "checked")}
              />
            </label>
          </div>
          {newApplicant.firefighterSoc && (
            <div className={styles.row}>
              <label className={styles.rowLabel}>
                ¿Cúal?:
                <input
                  className={styles.rowInput}
                  value={newApplicant.firefighterSocName}
                  type="text"
                  onChange={createHandleChange("firefighterSocName")}
                />
              </label>
            </div>
          )}
          <button className={styles.btnSend} type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
}
