import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css' // importar de manera global los estilos

const nombre = 'Cristian'
const objetoPersona: {nombre:string, apellido: string} = {
    nombre: 'Raul',
    apellido: 'Lara'
}

const suma = (a: number, b: number) => a + b;
interface PropsAppInterface {
    titulo:string
}
function App({ titulo = 'defaultTit' }) {

  return (
  <>
      <code>{ titulo }</code>
      <h1>Mi nombre es {nombre}</h1>
      <code>{objetoPersona.nombre}</code>

      <code>Renderizando execucion de funcion: {suma(3,4)}</code>
      <p>otro mas</p>

  </>
  )
}

export default App
