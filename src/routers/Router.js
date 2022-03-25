import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { App } from '../contenedores/App';
import { Formulario } from '../contenedores/Formulario'
import { Listado } from '../contenedores/Listado'

export const Router = () => {
    return (
        <div>
            <Router>
                <App />
                <Routes>
                    <Route path="/listado" element={<Listado />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    )
}

