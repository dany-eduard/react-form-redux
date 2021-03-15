import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

const Formulario = () => {
  const [show, setShow] = useState(true); // Mostrar y ocultar botones

  function mostrarFormulario() {
    setShow(show);
  }

  return (
    <Container>
      <Form>
        <h2>Registrar nuevo usuario</h2>
        <Form.Row>
          <Form.Group as={Col} controlId="fromGridID">
            <Form.Label>Cedula Ciudadanía</Form.Label>
            <Form.Control type="number" placeholder="Escribe tu CC" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escribe tu nombre" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Calle/Krr 123 #123-123, Barrio, Ciudad" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridNumberPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" placeholder="3124567890 o 3124567" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGrideEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="example@example.com" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
        <Button onClick={() => mostrarFormulario()} variant="danger" type="button">
          Cancelar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
