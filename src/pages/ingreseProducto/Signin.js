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
    ejemplo: "Ingresa tu producto completo",
  },
  {
    title: "Descripcion",
    name: "description",
    ejemplo: "Ingresa la descripción de tu producto",
  },
  {
    title: "Link de la imagen",
    name: "imagePath",
    ejemplo: "https://i.imgur.com/123as.jpg",
  },
  {
    title: "Tallas",
    name: "size",
    ejemplo: "Ej. M, L, XL",
  },
  {
    title: "Precio",
    name: "price",
    ejemplo: "Ej. 25.00 ",
  },
  {
    title: "Color",
    name: "color",
    ejemplo: "Ej. Azul",
  },
  {
    title: "Cantidad",
    name: "quantity",
    ejemplo: "Ej. 5",
  },
  {
    title: "Department",
    name: "department",
    ejemplo: "Ej. Mujer , Varon ó Niños",
  },
  {
    title: "Hashtag",
    name: "category",
    ejemplo: "Ej. #algodon #invierno #covid-19",
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



