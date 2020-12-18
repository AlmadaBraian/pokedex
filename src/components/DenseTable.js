import * as React from 'react';
//import { DataGrid } from '@material-ui/data-grid';
import { DataGrid } from '@material-ui/data-grid';

let array = [];
var uniqueArray=[];
let poke = {};

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


const rows = 
[
  {id: 1, Nombre: 'Snow', Tipo: '', Altura: 'Jon', Peso: 35, Batallas: 35, Frente: ''},

]

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}



//{array.push([datos.nombre, datos.altura, datos.peso,datos.batallas,datos.frente])}

export default function DenseTable(datos) {
  poke={id: 0, nombre: datos.nombre, tipo: datos.tipo, altura: datos.altura, peso: datos.peso, batallas: datos.batallas, frente: datos.frente};
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      {console.log(poke)}
    </div>
    
  );

}