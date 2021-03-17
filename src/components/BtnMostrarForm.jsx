import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { obtenerUsuarios, mostrarOcultarFormulario } from "../redux/ducks";

const BtnMostrarForm = ({ propsButton }) => {
  const dispatch = useDispatch();
  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);
  const [show, setShow] = useState(mostrarFormulario);
  const booleano = propsButton.form;
  console.log(
    "🚀 ~ file: BtnMostrarForm.jsx ~ line 11 ~ BtnMostrarForm ~ booleano",
    booleano
  );

  const botonMostrarFormulario = (booleano) => {
    setShow(booleano);
    dispatch(mostrarOcultarFormulario(booleano));
  };

  return (
    <>
      <Button
        onClick={() => botonMostrarFormulario(booleano)}
        type="button"
        variant={propsButton.variant}>
        {propsButton.text}
      </Button>
    </>
  );
};

export default BtnMostrarForm;
