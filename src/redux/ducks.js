import HttpClient from "../helpers/HTTPclient";
import { getRequest } from "../services/getRequest";

// Consts
const inicialState = {
  dataUsuarios: {},
  dataFormulario: {},
  mostrarFormulario: false,
};

// Types
const OBTENER_DATOS_JSON = "OBTENER_DATOS_JSON";
const VER_FORMULARIO = "VER_FORMULARIO"; // Mostrar formulario.
const GUARDAR_REGISTRO = "GUARDAR_REGISTRO";
const CANCELAR_REGISTRO = "CANCELAR_REGISTRO";

// Reducers
export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case OBTENER_DATOS_JSON:
      return { ...state, dataUsuarios: action.payload };
    case GUARDAR_REGISTRO:
      return { ...state, dataUsuarios: action.payload };
    case VER_FORMULARIO:
      return { ...state, mostrarFormulario: action.payload };
    default:
      return state;
  }
}

// Actions
export const obtenerUsuarios = async (dispatch) => {
  const resp = await getRequest("http://localhost:3333/usuarios");
  // console.log("🚀 ~ file: Ducks.js ~ line 34 ~ obtenerUsuarios ~ resp", resp);

  dispatch({
    type: OBTENER_DATOS_JSON,
    payload: resp,
  });
};

export const guardarUsuario = (formValues) => async (dispatch) => {
  console.log("🚀 ~ file: Ducks.js ~ line 48 ~ guardarUsuario ~ dispatch", formValues);
  const jsonDatos = JSON.stringify(formValues);
  try {
    fetch("http://localhost:3333/usuarios", {
      method: "POST",
      body: jsonDatos,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // dispatch({
    //   type: GUARDAR_REGISTRO,
    //   payload: [jsonDatos],
    // })
    obtenerUsuarios(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const mostrarOcultarFormulario = (show) => (dispatch) => {
  dispatch({
    type: VER_FORMULARIO,
    payload: show,
  });
};
