/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import TablaDensa from "./components/TablaDensa";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokeArray, setPokemonArray] = useState([]);

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
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Ingrese nombre del pokemon"
            value={pokemon}
          />
        </label>
      </form>

      <TablaDensa pokeArray={pokeArray} />
    </div>
  );
};

export default App;
