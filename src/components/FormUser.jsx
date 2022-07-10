import { Form } from "react-bootstrap"

export function Input({ text, placeholder, type, name }) {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export function FormUser() {
    return (
        <Form>
            <Input name={"name"} text={"Nombre"} placeholder={"Ingrese su nombre"} type="text" />
            <Input name={"surname"} text={"Apellido"} placeholder={"Ingrese su apellido"} type="text" />
            <Input name={"email"} text={"Correo Electrónico"} placeholder={"Ingrese su correo electrónico"} type="email" />
            <Input name={"phone_num"} text={"Número de teléfono"} placeholder={"Ingrese su número de teléfono"} type="number" />
            <Input name={"dni"} text={"DNI"} placeholder={"Ingrese su DNI"} type="number" />
            <Input name={"people_amount"} text={"Cantidad de personas a asociar"} placeholder={"Ingrese la cantidad de personas a asociar"} type="number" />
            {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
    )
}