import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CounterApp from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
       <CounterApp valor= {3}/>
      {/*<App titulo= "default en main" />*/}
  </React.StrictMode>,
)
