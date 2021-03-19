import React from "react";
import { Button } from "react-bootstrap";

const BtnMostrarForm = ({ propsButton }) => {
  const booleano = propsButton.form;
  console.log(
    "🚀 ~ file: BtnMostrarForm.jsx ~ line 11 ~ BtnMostrarForm ~ booleano",
    booleano
  );

  return (
    <>
      <Button
        onClick={() => propsButton.botonMostrarFormulario(booleano)}
        type="button"
        variant={propsButton.variant}>
        {propsButton.text}
      </Button>
    </>
  );
};

export default BtnMostrarForm;
