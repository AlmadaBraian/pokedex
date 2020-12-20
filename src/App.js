/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import AutoGrid from "./components/AutoGrid";


const App = () => {
  let i = 1;
  const [pokemon, setPokemon] = useState("");
  const [pokeArray, setPokemonArray] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(490)
      .fill()
      .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`))
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map(res => res.json().then(({name,}) => {
        return pokemon.push({name})

      }))
    })
setOptions(pokemon);
}, []);


  const getPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      

      const pokeObjeto = {
        id: res.data.id,
        Nombre: pokemon,
        Tipo: res.data.types[0].type.name,
        Altura: Math.round(res.data.height * 10),
        Peso: Math.round(res.data.weight / 10),
        Batallas: res.data.game_indices.length,
        Frente: res.data.sprites.front_default,
        Espalda: res.data.sprites.back_default,
      };
      //console.log(res.data.name)

      setPokemonArray([...pokeArray, pokeObjeto]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  
  return (
    
    <div className="App">
      
      <AutoGrid pokeArray= {pokeArray} handleSubmit= {handleSubmit} handleChange= {handleChange} pokemon= {pokemon} nombres= {options}/>
    </div>
  );
};

export default App;
