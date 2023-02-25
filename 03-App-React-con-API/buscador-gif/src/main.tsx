import React from 'react'
import ReactDOM from 'react-dom/client'
import GliphyApp from "./gliphyapp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // ayuda a validar muchas cosa por y va arrojar warnings si encuentra algun error pero en prod no entra en accion
  <React.StrictMode>
    <GliphyApp />
  </React.StrictMode>,
)
