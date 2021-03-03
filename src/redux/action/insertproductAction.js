
import serverCall from '../../modules/serverCall'

export const registro=(imagePath, title, description, price, color, size, array_tags, Pregunta1, Pregunta2)=>dispatch=>{
  dispatch({
    type: POST_REGISTRO_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/ingresoproducts',
    data:{
      imagePath, title, description, price, color, size, array_tags, Pregunta1, Pregunta2
    }
  })
  .then(res=>{
    dispatch({
      type:POST_REGISTRO_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type:POST_REGISTRO_FAIL,
      payload:{error}
    })
    throw error
  })
}

export const POST_REGISTRO_BEGIN='POST_REGISTRO_BEGIN'
export const POST_REGISTRO_SUCCESS='POST_REGISTRO_SUCCESS'
export const POST_REGISTRO_FAIL='POST_REGISTRO_FAIL'