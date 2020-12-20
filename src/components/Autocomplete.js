/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import axios from "axios";



const getNombres = async()=>{
  let array = [];
  for(var i= 1; i<898; i++){

    const url2 = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const res2 = await axios.get(url2);
    const nombre = {nombre: res2.data.name};
    //setPokeNombres([...pokeNombres, nombre]);
    array.push(nombre);
   
  }

  return(array);


}

/*function setOptions (){

   let array = [];

    for(var i=1; i < 898; i++ ){
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const res =  axios.get(url);
            console.log(res);
        }catch (error) {
            console.log(error);
        }
    } 
    
    console.log(array);
}*/


export default function AutoComplete(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={nombres.nombre}
      getOptionLabel={(option) => option.nombre}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

const nombres = getNombres();


