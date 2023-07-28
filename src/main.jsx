import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cabeza } from './componentes/presentacion'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabeza />
  </React.StrictMode>
)
