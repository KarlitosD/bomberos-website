export function Form() {
  return (
    <form>
      <input
        name="name"
        text="Nombre"
        placeholder="Ingrese su nombre"
        type="label"
      />
      <input
        name="surname"
        text="Apellido"
        placeholder="Ingrese su apellido"
        type="label"
      />
      <input
        name="email"
        text="Correo Electrónico"
        placeholder="Ingrese su correo electrónico"
        type="label"
      />
      <input
        name="phone_num"
        text="Número de teléfono"
        placeholder="Ingrese su número de teléfono"
        type="label"
      />
      <input 
        name="dni" 
        text="DNI" 
        placeholder="Ingrese su DNI" 
        type="number" />
      <input
        name="people_amount"
        text="Cantidad de personas a asociar"
        placeholder="Ingrese la cantidad de personas a asociar"
        type="label"
      />
      <button>Enviar</button>
    </form>
  );
}
