import React from 'react';
import ReactDOM from 'react-dom';
// import App from './contenedores/App';
import Listado from './contenedores/Listado';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Formulario from './contenedores/Formulario';
// import { Router } from './routers/router';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Router/> */}
    <Listado />
    <Formulario/>
  </React.StrictMode>,
  document.getElementById('root')
);
