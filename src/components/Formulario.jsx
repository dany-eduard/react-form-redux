import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const Formulario = () => {
  const [formState, setFormState] = useState({
    id: 0,
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const { id, name, address, phone, email } = formState;

  useEffect(() => {
    console.log("Holalala");
  }, []);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const [show, setShow] = useState(true); // Mostrar y ocultar botones
  function mostrarFormulario() {
    setShow(show);
  }

  return (
    <>
      <Form>
        <h2>Registrar nuevo usuario</h2>
        <Form.Row>
          <Form.Group as={Col} controlId="fromGridID">
            <Form.Label>Cedula Ciudadanía</Form.Label>
            <Form.Control
              type="number"
              name="id"
              placeholder="Escribe tu CC"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Escribe tu nombre"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridNumberPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              name="phone"
              placeholder="3124567890 o 3124567"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGrideEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="example@example.com"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Calle/Krr 123 #123-123, Barrio, Ciudad"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
        <Button
          onClick={() => mostrarFormulario()}
          variant="danger"
          type="button"
          onChange={handleInputChange}
        >
          Cancelar
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
