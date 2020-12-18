import React, { useEffect, useState, Component,DataGrid } from "react";

let array = [];

function crearTabla(datosTabla) {

  var tabla = document.createElement('table');
  var cuerpoTabla = document.createElement('tbody');

  datosTabla.forEach(function(datosFilas) {
    <div className="divTable">
            <div className="divTableBody"></div>
            <div className="divTableRow">
              <div className="divTableCell">Tipo</div>
              <div className="divTableCell">poketipo</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Altura</div>
              <div className="divTableCell">
                {" "}
                pokealtura cm
              </div>
            </div>
    </div>
  });

  tabla.appendChild(cuerpoTabla);
  document.body.appendChild(tabla);
}
const Tabla = pokemon => {
    return (

        <div className="divTable">
             {crearTabla(pokemon.lista)} 
        </div>
            
       
        //<h1>Trolisimo el {pokemon.poke.nombre}</h1>
    )
}


export default Tabla