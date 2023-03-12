import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HooksApp} from "./HooksApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FocusScreen} from "./03-use-ref/FocusScreen.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreen />
  </React.StrictMode>,
)
