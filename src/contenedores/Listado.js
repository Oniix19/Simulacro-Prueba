import axios from "axios";
import React, { useEffect, useState } from 'react';


// import { x-circle-fill } from "react-bootstrap-icons";

import { url } from "../helpers/url";
import "../styles/Listado.css";


const Listado = () => {

    const [dato, setDato] = useState([])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setDato(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    useEffect(() => {
        getData()
    }, [])
    console.log(dato);

    return (
        <div className="listBody">
            <tbody>
                {
                    dato.map(reg => {
                        return (
                            <div key={reg.id} className="divCont">
                                <img src={reg.poster} alt="imagen" />
                                <h1>{reg.nombre}</h1>
                                <h3>{reg.precio}</h3>
                                <div className="cont">
                                    <h3>{reg.clasifiacion}</h3>
                                    <h3>{reg.valoracion} ☆</h3>
                                </div>
                                <button onClick><i class="bi bi-x-circle-fill"></i></button>
                            </div>
                        )
                    })
                }
            </tbody>
        </div>
    )
}
export default Listado