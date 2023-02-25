import React from 'react'
import ReactDOM from 'react-dom/client'
import GliphyApp from "./gliphyapp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GliphyApp />
  </React.StrictMode>,
)
