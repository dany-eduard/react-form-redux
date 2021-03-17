import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { useForm } from "./hooks/useForm";
import { guardarUsuario, mostrarOcultarFormulario } from "../redux/ducks";
import BtnMostrarForm from "./BtnMostrarForm";

const Formulario = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    id: 0,
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const { id, name, address, phone, email } = formValues;

  useEffect(() => {
    console.log("Se ejecutó el state del formulario...");
  }, []);

  const mostrarFormulario = useSelector((store) => store.dataUsuarios.mostrarFormulario);
  const [show] = useState(mostrarFormulario);

  // const botonMostrarFormulario = () => {
  //   setShow(false);
  //   dispatch(mostrarOcultarFormulario(false));
  // };

  const propsButtonCancelar = {
    form: false,
    text: "Cancelar",
    variant: "danger"
  }

  const propsButtonAgregar = {
    form: true,
    text: "Agregar",
    variant: "primary"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset(); // Limpiar campos
    console.log("🚀 ~ file: Formulario.jsx ~ line 24 ~ handleSubmit ~ e", formValues);
/*     botonMostrarFormulario(); */
  };

  return (
    <>
     {/*  {!show ? (
             ) : 
      <BtnMostrarForm propsButton={propsButtonAgregar} />
      } */}
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
            onClick={() => dispatch(guardarUsuario(formValues))}>
            Guardar
          </Button>

          {/* <Button onClick={() => botonMostrarFormulario()} variant="danger" type="button">
            Cancelar
          </Button> */}
          <BtnMostrarForm propsButton={propsButtonCancelar} />
        </Form>

      <hr />
    </>
  );
};

export default Formulario;
