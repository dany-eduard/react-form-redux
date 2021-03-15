/* import data from "../usuarios.json"; */

// Consts
const data = require("../usuarios.json");
console.log("data", data);
const inicialState = {
  dataUsuarios: data,
  mostrarFormulario: false,
};

// Types
/* const OBTENER_DATOS_JSON = "OBTENER_DATOS_JSON"; */
const NUEVO_REGISTRO = "NUEVO_REGISTRO"; // Mostrar formulario.
const GUARDAR_REGISTRO = "GUARDAR_REGISTRO";
const CANCELAR_REGISTRO = "CANCELAR_REGISTRO";

// Reducers
export default function reducer(state = inicialState, action) {
  switch (action.type) {
    /* case OBTENER_DATOS_JSON:
      return { ...state, dataUsuarios: action.payload }; */
    case NUEVO_REGISTRO:
      return;
    case CANCELAR_REGISTRO:
      return;
    default:
      return state;
  }
}

// Actions
/* export const obtenerUsuarios = () => async (dispatch) => {
  try {
    const res = await fetch("../usuarios.json");
    const data = await res.json();
    console.log("obtenerUsuarios -> ", data);
    dispatch({
      type: OBTENER_DATOS_JSON,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
}; */

export const agregarNuevoUsuario = () => async (dispatch) => {};
