import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { obtenerUsuarios, mostrarOcultarFormulario } from "../redux/ducks";
import Formulario from "./Formulario";

const TablaReports = () => {
  const dispatch = useDispatch();

  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);

  console.log(
    "🚀 ~ file: TablaReports.jsx ~ line 19 ~ TablaReports ~ mostrarFormulario",
    mostrarFormulario
  );

  const [show, setShow] = useState(mostrarFormulario);
  console.log("🚀 ~ file: TablaReports.jsx ~ line 20 ~ TablaReports ~ show", show);
  const mostrarFormActualizaState = () => {
    setShow(true);
    dispatch(mostrarOcultarFormulario(true));
  };

  useEffect(() => {
    document.title = "Usuarios";
    obtenerUsuarios(dispatch);
  }, []);

  // const dispatch = useDispatch();

  // dispatch({
  //   type: "OBTENER_DATOS_JSON",
  //   payload: [{}],
  // });

  // const [show, setShow] = useState(true); // Mostrar y ocultar botones

  // function mostrarFormulario() {
  //   setShow(!show);
  // }

  const usuarios = useSelector((store) => store.dataUsuarios.dataUsuarios);
  console.log(
    "🚀 ~ file: TablaReports.jsx ~ line 57 ~ TablaReports ~ usuarios",
    usuarios
  );

  return (
    <Container>
      {!show ? (
        <Button
          onClick={() => mostrarFormActualizaState()}
          type="button"
          variant="primary">
          Agregar
        </Button>
      ) : (
        <Formulario />
      )}
      <h2>Registro de usuarios</h2>
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
          {usuarios && usuarios.length
            ? usuarios.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </Container>
  );
};

export default TablaReports;
