import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "./hooks/useForm";
import { guardarUsuario, mostrarOcultarFormulario } from "../redux/ducks";
import BtnMostrarForm from "./BtnMostrarForm";

const Formulario = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    id: "",
    name: "",
    address: "",
    phone: "",
    email: "",
  });


  // const { id, name, address, phone, email } = formValues;

  useEffect(() => {
    console.log("Se ejecutó el state del formulario...");
  }, []);


  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);
  const [show, setShow] = useState(mostrarFormulario);

  const ocultarFormulario = () => {
    setShow(false);
    dispatch(mostrarOcultarFormulario(false));
  };

  const botonMostrarFormulario = () => {
    setShow(true);
    dispatch(mostrarOcultarFormulario(true));
  };
  // const propsBtnGuardar = {
  //   form: true,
  //   text: "Guardar",
  //   variant: "primary",
  // };

  // const propsBtnCancelar = {
  //   form: false,
  //   text: "Cancelar",
  //   variant: "danger",
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); // Limpiar campos
    // console.log("🚀 ~ file: Formulario.jsx ~ line 47 ~ handleSubmit ~ formValues", formValues);
    /* botonMostrarFormulario(); */
    dispatch(guardarUsuario(formValues));
    ocultarFormulario();
  };


  const propsBtnAgregar = {
    botonMostrarFormulario,
    form: true,
    text: "Agregar nuevo usuario",
    variant: "primary",
  };



  return (
    <>
      {show ? (
        <Form onSubmit={handleSubmit}>
          <h2>Registrar nuevo usuario</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="fromGridID">
              <Form.Label>Cedula Ciudadanía</Form.Label>
              <Form.Control
                type="number"
                name="id"
                placeholder="Escribe tu CC"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                onChange={handleInputChange}
                required
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
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGrideEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@example.com"
                onChange={handleInputChange}
                required
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
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            /* onClick={() => dispatch(guardarUsuario(formValues))} */
          >
            Guardar
          </Button>


          {/* <BtnMostrarForm propsButton={propsBtnGuardar} /> */}

          <Button variant="danger" type="button" onClick={() => ocultarFormulario()}>
            Cancelar
          </Button>
          {/* <BtnMostrarForm propsButton={propsBtnCancelar} /> */}
        </Form>
      ) : (
        <BtnMostrarForm propsButton={propsBtnAgregar} />
      )}

      {/* <hr /> */}
      {null}
    </>
  );
};

export default Formulario;
