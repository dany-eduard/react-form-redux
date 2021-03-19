import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import TablaReports from "./TablaReports";
import { useDispatch, useSelector } from "react-redux";
import { mostrarOcultarFormulario } from "../redux/ducks";
import BtnMostrarForm from "./BtnMostrarForm";

export const Layout = () => {
  const dispatch = useDispatch();

  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);
  console.log(
    "🚀 ~ file: TablaReports.jsx ~ line 12 ~ TablaReports ~ mostrarFormulario",
    mostrarFormulario
  );
  const [show, setShow] = useState(mostrarFormulario);
  console.log("🚀 ~ file: TablaReports.jsx ~ line 14 ~ TablaReports ~ show", show);

  const botonMostrarFormulario = (booleano) => {
    setShow(booleano);
    dispatch(mostrarOcultarFormulario(booleano));
  };

  const propsBtnAgregar = {
    botonMostrarFormulario,
    form: true,
    text: "Agregar nuevo usuario",
    variant: "primary",
  };

  return (
    <>
      {!show ? (
        <BtnMostrarForm propsButton={propsBtnAgregar} />
      ) : (
        <Formulario />
      )}
      <TablaReports />
    </>
  );
};
