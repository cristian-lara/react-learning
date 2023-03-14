import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {HooksApp} from "./HooksApp.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FocusScreen} from "./03-use-ref/FocusScreen.jsx";
import {Layout} from "./04-UseLayoutEffect/Layout.jsx";
import {Memorize} from "./05-UseMemos/Memorize.jsx";
import {MemoHook} from "./05-UseMemos/MemoHook.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoHook />
  </React.StrictMode>,
)
