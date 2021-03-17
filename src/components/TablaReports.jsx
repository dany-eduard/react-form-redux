import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { obtenerUsuarios, mostrarOcultarFormulario } from "../redux/ducks";
import BtnMostrarForm from "./BtnMostrarForm";
import Formulario from "./Formulario";

const TablaReports = () => {
  const dispatch = useDispatch();

  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);
  console.log("🚀 ~ file: TablaReports.jsx ~ line 19 ~ TablaReports ~ mostrarFormulario", mostrarFormulario)  
  const [show, setShow] = useState(mostrarFormulario);
  console.log("🚀 ~ file: TablaReports.jsx ~ line 20 ~ TablaReports ~ show", show)

  const botonMostrarFormulario = () => {
    setShow(true);
    dispatch(mostrarOcultarFormulario(true))
  }
  
  // const propsButton = {
  //   form: true,
  //   text: "Agregar",
  //   variant: "primary"
  // }

  useEffect(() => {
    document.title = "Usuarios";
    obtenerUsuarios(dispatch);
  }, []);



  const usuarios = useSelector((store) => store.dataUsuarios.dataUsuarios);
  console.log("usuarios", usuarios);

  return (
    <>
      {!show ? (
        <Button
          onClick={() => botonMostrarFormulario()}
          type="button"
          variant="primary"
        >
          Agregar
        </Button>
        // <BtnMostrarForm propsButton={propsButton} /* onClick={() => } *//>
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
    </>
  );
};

export default TablaReports;
