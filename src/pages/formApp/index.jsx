import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { getApplicants, createApplicant } from "@/services/applicants";

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
      
      <form id="mainForm" onSubmit={handleForm}>
        <div id="tittleBox">
          <h1 id="tittle">FORMULARIO DE INSCRIPCIÓN PARA APLICANTES</h1>
        </div>
        <div id="ansBox">
          <div className="row">
            <label className="rowLabel">
              Documento de identidad:
              <input
                className="rowInput"
                value={newApplicant.DNI}
                type="number"
                onChange={createHandleChange("DNI")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Nombre/s:
              <input
                className="rowInput"
                value={newApplicant.name}
                type="text"
                onChange={createHandleChange("name")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Apellido/s:
              <input
                className="rowInput"
                value={newApplicant.surname}
                type="text"
                onChange={createHandleChange("surname")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Fecha de Nacimiento:
              <input
                className="rowInput"
                value={newApplicant.birthDate}
                type="date"
                onChange={createHandleChange("birthDate")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Altura(cm):
              <input
                className="rowInput"
                value={newApplicant.height}
                type="number"
                onChange={createHandleChange("height")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Peso(kg):
              <input
                className="rowInput"
                value={newApplicant.weight}
                type="number"
                onChange={createHandleChange("weight")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Grupo Sanguíneo:
              <select
                className="rowInput"
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
          <div className="row">
            <label className="rowLabel">
              Correo Electrónico:
              <input
                className="rowInput"
                value={newApplicant.email}
                type="email"
                onChange={createHandleChange("email")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Domicilio (Calle y Número):
              <input
                className="rowInput"
                value={newApplicant.address}
                type="text"
                onChange={createHandleChange("address")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Localidad:
              <input
                className="rowInput"
                value={newApplicant.district}
                type="text"
                onChange={createHandleChange("district")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Código Postal:
              <input
                className="rowInput"
                value={newApplicant.postcode}
                type="text"
                onChange={createHandleChange("postcode")}
                required
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Estudios Finalizados:
              <select
                className="rowInput"
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
          <div className="row">
            <label className="rowLabel">
              Número de Celular:
              <input
                className="rowInput"
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
          <div className="row">
            <label className="rowLabel">
              Número de Teléfono:
              <input
                className="rowInput"
                value={newApplicant.phoneNumber}
                type="tel"
                pattern="[0-9]{4}-[0-9]{4}"
                placeholder="1234-5678"
                maxLength={9}
                onChange={createHandleChange("phoneNumber")}
              />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              INTEGRÓ o INTEGRA ALGUNA SOCIEDAD DE BOMBEROS?
              <input
                className="rowInput"
                checked={newApplicant.firefighterSoc}
                type="checkbox"
                onChange={createHandleChange("firefighterSoc", "checked")}
              />
            </label>
          </div>
          {newApplicant.firefighterSoc && (
            <div className="row" id="hiddenDiv">
              <label className="rowLabel">
                ¿Cúal?:
                <input
                  className="rowInput"
                  value={newApplicant.firefighterSocName}
                  type="text"
                  onChange={createHandleChange("firefighterSocName")}
                />
              </label>
            </div>
          )}
          <button id="btnSend" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </>
  );
}
