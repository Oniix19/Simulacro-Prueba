import React from 'react';
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      hola
      <div className="header">
        <nav>
          <Link className="link" to="/">Listado</Link>
          <Link className="link" to="/form">Formutario</Link>
        </nav>
      </div>
    </div>
  )
}
