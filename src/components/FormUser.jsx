import { useState } from "react"
import { Form, Button, Modal } from "react-bootstrap"

export function Input({ text, placeholder, type, name }) {
    return (
        <Form.Group className="mb-3" controlId={name}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export function FormUser() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleSubmit = event => {
        event.preventDefault()
        setShow(true)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <p className="fs-3">Gracias por volverse socio de los Bomberos Voluntarios de Lanus.</p>
                </Modal.Body>

            </Modal>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Input name="name" text="Nombre" placeholder="Ingrese su nombre" type="text" />
                <Input name="surname" text="Apellido" placeholder="Ingrese su apellido" type="text" />
                <Input name="email" text="Correo Electrónico" placeholder="Ingrese su correo electrónico" type="email" />
                <Input name="phone_num" text="Número de teléfono" placeholder="Ingrese su número de teléfono" type="number" />
                <Input name="dni" text="DNI" placeholder="Ingrese su DNI" type="number" />
                <Input name="people_amount" text="Cantidad de personas a asociar" placeholder="Ingrese la cantidad de personas a asociar" type="number" />
                {/* <Button variant="danger" onClick={() => setShow(true)}>
                    Submit
                </Button> */}
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}