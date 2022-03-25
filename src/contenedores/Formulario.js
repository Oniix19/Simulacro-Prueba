import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../helpers/url'

const Formulario = () => {

    const init = {
        nombre: "",
        precio: "",
        clasificacion: "",
        valoracion: "",
        poster: ""
    }

    const [juego, setJuego] = useState(
        init
    )

    const { nombre, precio, clasificacion, valoracion, poster } = juego

    const handleChange = ({ target }) => {
        setJuego({
            ...juego,
            [target.name]: target.value
        })
    }

    const postData = () => {
        axios.post(url, juego)
        .then(resp => {
            console.log(resp.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        postData()
    }

    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit}>
                <h2>Registro de juegos</h2>
                <hr />
                <div>
                    <label>Nombre:</label>
                    <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange} />
                </div>
                <div>
                    <label>Precio:</label>
                    <input id="inputNombre" name="precio" value={precio} onChange={handleChange} />
                </div>
                <div>
                    <label>Clasificacion:</label>
                    <input id="inputNumero" type="clasificacion" name="numero" value={clasificacion} onChange={handleChange} />
                </div>
                <div>
                    <label>Valoracion:</label>
                    <input id="inputTelefono" type="number" name="valoracion" value={valoracion} onChange={handleChange} />
                </div>
                <div>
                    <label>Poster:</label>
                    <input id="botonImagen" type="file" name="imagen" value={poster} onChange={handleChange} />
                </div>
                <div>
                    <button id="btnRegistro">Cargar</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario