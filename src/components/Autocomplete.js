/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';




export default function AutoComplete(props) {
  
  return (
    <form onSubmit={props.handleSubmit}>
    <Autocomplete
      id="combo-box-demo"
      options= {props.nombres}
      getOptionLabel={(option) => option}
      style={{ width: 600 }}
      renderInput={(params) => <TextField {...params} label="Ingrese nombre pokemon" variant="outlined" onChange={props.handleChange} value={props.pokemon}/>}
    />
    </form>
  );
}

//const nombres = GetNombres();


