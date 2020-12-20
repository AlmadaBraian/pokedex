/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";




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
      options={props.nombre}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}


