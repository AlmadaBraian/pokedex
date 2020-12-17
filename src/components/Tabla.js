import React, { useEffect, useState, Component } from "react";

const Tabla = pokemon => {
    console.log(pokemon.poke)
    return (
        <div className="divTable">
          <div className="divTableBody"></div>
          <div className="divTableRow">
            <div className="divTableCell">Tipo</div>
            <div className="divTableCell">{pokemon.poke.tipo}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Altura</div>
              <div className="divTableCell">
                {" "}
                {Math.round(pokemon.altura * 10)} cm
              </div>
            </div>

            </div>
       
        //<h1>Trolisimo el {pokemon.poke.nombre}</h1>
    )
}


export default Tabla