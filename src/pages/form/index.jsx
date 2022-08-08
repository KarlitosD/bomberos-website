import "./style.css";
import { Header } from "@/components/Header";

export function Form() {
  return (
    <>
      <Header />
      <form id="mainForm">
        <div id="tittleBox">
          <h1 id="tittle">FORMULARIO DE INSCRIPCIÓN</h1>
        </div>
        <div id="ansBox">
          <div className="row">
            <label className="rowLabel">
              Nombre:
              <input className="rowInput" name="name" type="text" />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Apellido:
              <input className="rowInput" name="surname" type="text" />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Correo Electrónico:
              <input className="rowInput" name="email" type="email" />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              Número de Teléfono:
              <input className="rowInput" name="phone_num" type="tel" />
            </label>
          </div>
          <div className="row">
            <label className="rowLabel">
              DNI:
              <input className="rowInput" name="dni" type="number" />
            </label>
          </div>
          <button id="btnSend">ENVIAR</button>
        </div>
      </form>
    </>
  );
}
