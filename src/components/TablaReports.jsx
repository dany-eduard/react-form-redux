import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import Formulario from "./Formulario";

const TablaReports = () => {
  useEffect(() => {
    document.title = "Usuarios";
  });
  const [show, setShow] = useState(true); // Mostrar y ocultar botones

  function mostrarFormulario() {
    setShow(!show);
  }

  return (
    <Container>
      {show ? (
        <Button onClick={() => mostrarFormulario()} type="button" variant="primary">
          Agregar
        </Button>
      ) : (
        <Formulario />
      )}
      <h2 center>Registro de usuarios</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001835011</td>
            <td>Daniel Eduardo</td>
            <td>Calle 12 #26</td>
            <td>3017498942</td>
            <td>dany@email.com</td>
          </tr>
          <tr>
            <td>1001835011</td>
            <td>Daniel Eduardo</td>
            <td>Calle 12 #26</td>
            <td>3017498942</td>
            <td>dany@email.com</td>
          </tr>
          <tr>
            <td>1001835011</td>
            <td>Daniel Eduardo</td>
            <td>Calle 12 #26</td>
            <td>3017498942</td>
            <td>dany@email.com</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default TablaReports;
