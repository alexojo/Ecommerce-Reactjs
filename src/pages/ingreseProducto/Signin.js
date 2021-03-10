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
    ejemplo: "Ingresa el nombre de tu producto",
    validations: [validateExistence]
  },
  {
    title: "Descripcion",
    name: "description",
    ejemplo: "Ingresa la descripción de tu producto",
    validations: [validateExistence]
  },
  {
    title: "Tallas",
    name: "size",
    ejemplo: "Ej. M, L, XL",
    validations: [validateExistence]
  },
  {
    title: "Precio",
    name: "price",
    ejemplo: "Ej. 25.00 ",
    validations: [validateExistence]
  },
  {
    title: "Color",
    name: "color",
    ejemplo: "Ej. Azul",
    validations: [validateExistence]
  },
  {
    title: "Número de Contacto",
    name: "cellphone",
    ejemplo: "Ej. 934213123 o 084222222",
    validations: [validateExistence]
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



