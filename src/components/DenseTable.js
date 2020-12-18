import * as React from 'react';
//import { DataGrid } from '@material-ui/data-grid';
import { DataGrid } from '@material-ui/data-grid';
let pokeArray = [];
let poke = {};
let suma = 0;

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Nombre', headerName: 'Nombre', width: 130 },

  { field: 'Tipo', headerName: 'Tipo', width: 130 },
  {
    field: 'Altura',
    headerName: 'Altura',
    type: 'number',
    width: 90,
  },
  {
    field: 'Peso',
    headerName: 'Peso',
    type: 'number',
    width: 90,
  },
  {
    field: 'Batallas',
    headerName: 'Batallas',
    type: 'number',
    width: 90,
  },
  {
    field: 'Frente',
    headerName: 'Frente',
    type: 'image',
    width: 90,
  },
];


let rows = pokeArray;
//[
  //{id: 1, Nombre: 'Snow', Tipo: '', Altura: 'Jon', Peso: 35, Batallas: 35, Frente: ''},

//]

function agregar (objeto){
  console.log("entramos")
  console.log(pokeArray.length)
  console.log(objeto.Nombre)
  let array = pokeArray;

  if (pokeArray.length == 0)
    if (objeto.Nombre != "")
      console.log("nombre distinto")
      pokeArray.push(objeto);
    //console.log(array)
  if (pokeArray.length > 0)

    for (var i = 0; i < array.length; i++) {

      pokeArray[i].id=i;
        
        //if  (pokeArray[i].Nombre == objeto.Nombre)

          //pokeArray[i].id=i;
          //array.push(objeto);
    }
  //pokeArray = array;
  console.log(pokeArray)



}


//{array.push([datos.nombre, datos.altura, datos.peso,datos.batallas,datos.frente])}

export default function DenseTable(datos) {

  //poke={"id": 0, "Nombre": datos.nombre, "Tipo": datos.tipo, "Altura": datos.altura, "Peso": datos.peso, "Batallas": datos.batallas, "Frente": datos.frente};
  return (
    
    <div style={{ height: 400, width: '100%' }}> 
        {agregar (datos.objeto)}
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    
  );

}