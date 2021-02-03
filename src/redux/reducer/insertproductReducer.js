import {
  POST_REGISTRO_BEGIN,
  POST_REGISTRO_SUCCESS,
  POST_REGISTRO_FAIL
} from '../action/insertproductAction'

const initialState = {
  registro_loading: false,
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTRO_BEGIN:
      return {
        ...state,
        registro_loading: true
      }
    case POST_REGISTRO_SUCCESS:
      return {
        ...state,
        registro_loading: false,
      }
    case POST_REGISTRO_FAIL:
      return {
        ...state,
        registro_loading: false,
        error: action.payload.error.response.data
      }
    default:
      return state
  }
}