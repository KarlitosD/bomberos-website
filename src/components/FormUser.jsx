function Input({ text, placeholder, type, name}){
    return (
      <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{text}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} />
      </Form.Group>
    )
  }
  
  
  
  function FormUser() {

    return (
      <Form>
          <Input name={"name"} text={"Nombre"} placeholder={"Ingrese su nombre"} type="text" />
  
          <Input name={"surname"} text={"Apellido"}/>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
      </Form>
    )
  }