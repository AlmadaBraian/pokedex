//investigar map filter find 
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import AutoGrid from "./components/AutoGrid";


const App = () => {

  const [pokemon, setPokemon] = useState("");
  const [pokeArray, setPokemonArray] = useState([]);
  const [options, setOptions] = useState([]);



  useEffect( () => {
    obtenerPokemon();
  }, []);


  const obtenerPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=-1`;
      const res = await axios.get(url);
      const listaPokemon = res.data.results;
      const nombres = listaPokemon.map((pokemon)=> pokemon.name);

      setOptions(nombres);

    }catch (error) {
      console.log(error);
    }
  }

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
    //console.log(e.target.value.toLowerCase());  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("hola");
    getPokemon();
  };
  
  return (
    
    <div className="App">
      
      <AutoGrid pokeArray= {pokeArray} handleSubmit= {handleSubmit} handleChange= {handleChange} pokemon= {pokemon} nombres= {options} setPokemon={setPokemon}/>
    </div>
  );
};

export default App;
