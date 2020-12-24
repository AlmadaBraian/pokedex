/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';




export default function AutoComplete(props) {
  
  return (
    <form onSubmit={props.handleSubmit}>
    <Autocomplete
      id="combo-box-demo"
      onChange = {(event, newVal) => props.setPokemon(newVal)}
      //value={props.pokemon}
      options= {props.nombres}
      getOptionLabel={(option) => option}
      style={{ width: 600 }}
      
      renderInput={(params) => <TextField {...params} label="Ingrese nombre pokemon" onChange={props.handleChange} variant="outlined" value = {props.pokemon}/>}
    />

    </form>
  );
}

//const nombres = GetNombres();


