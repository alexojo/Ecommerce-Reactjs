import React from 'react'
import LoginSignin from './LoginSignin'
import {
  validateExistence,
  validateEmail,
  validateLength,
  validateLowerCase,
  validateUpperCase
} from './utils/validation'


const INPUT_CONFIG = [
  {
    title: "Nombre",
    name: "title",

  },
  {
    title: "Descripcion",
    name: "description",

  },
  {
    title: "Link de la imagen",
    name: "imagePath",

  },
  {
    title: "Tallas",
    name: "size",
  },
  {
    title: "Precio",
    name: "price",

  },
  {
    title: "Color",
    name: "color",

  },
  {
    title: "Cantidad",
    name: "quantity",

  },
  {
    title: "Department",
    name: "department",

  },
  {
    title: "Categoria",
    name: "category",
  },  
]


export default function Registro({registro,registro_loading,registro_error}) {
  return (
    <div>
      <LoginSignin
      INPUT_CONFIG={INPUT_CONFIG}
      title="Registrar Producto"
      footer_text="Asegurese de ingresar de manera correcta los datos de su producto"
      footer_redirect="Iniciar Sesion"
      submitAction={registro}
      loading={registro_loading}
      signin_error={registro_error}
      />
    </div>
  )
}



