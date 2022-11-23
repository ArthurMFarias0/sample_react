import React from "react";
import './Nav.css'

function Nav () {
    return (
        <nav>
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="jogos.html">Jogos</a>
            </li>
            <li>
                <a href="franquias.html">Franquias</a>
            </li>
            <li>
                <a href="ajuda.html">Ajuda</a>
            </li>
        </nav>
    )
}

export { Nav }