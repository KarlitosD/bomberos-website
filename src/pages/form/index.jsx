import "./style.css";
import { Header } from "@/components/Header";

export function Form() {
  return (
    <>
      <Header />
      <form>
        <label>
          Nombre/s:
          <input name="name" placeholder="Ingrese su nombre" type="text" />
        </label>
        <label>
          Apellido/s:
          <input name="surname" placeholder="Ingrese su apellido" type="text" />
        </label>
        <label>
          Correo Electrónico:
          <input
            name="email"
            placeholder="Ingrese su correo electrónico"
            type="email"
          />
        </label>
        <label>
          Número de Teléfono:
          <input
            name="phone_num"
            placeholder="Ingrese su número de teléfono"
            type="tel"
          />
        </label>
        <label>
          DNI:
          <input name="dni" placeholder="Ingrese su DNI" type="number" />
        </label>
        <button>Enviar</button>
      </form>
    </>
  );
}
