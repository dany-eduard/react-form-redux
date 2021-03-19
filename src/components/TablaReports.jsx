import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { obtenerUsuarios } from "../redux/ducks";

const TablaReports = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    obtenerUsuarios(dispatch);
  }, []);

  const usuarios = useSelector((store) => store.dataUsuarios.dataUsuarios);
  // console.log("🚀 ~ file: TablaReports.jsx ~ line 35 ~ TablaReports ~ usuarios", usuarios)

  return (
    <>
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
