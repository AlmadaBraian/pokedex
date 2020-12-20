/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import { array } from 'prop-types';



function setOptions (){

    array = [];

    for(i=1; i < 898; i++ ){
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            const res = await axios.get(url);
            array.push(res.data.name);
        }catch (error) {
            console.log(error);
        }
    } 
    
    console.log(array);
}


export default function AutoComplete(props) {

  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  
];