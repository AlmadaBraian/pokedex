import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);

      console.log(res);
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
      {pokemonData.map((data) => (
        <div className="container">
          <img />
          <div className="divTable">
            <div className="divTableBody"></div>
            <div className="divTableRow">
              <div className="divTableCell">Tipo</div>
              <div className="divTableCell">{pokemonType}</div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Altura</div>
              <div className="divTableCell">
                {" "}
                {Math.round(data.height * 10)} cm
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Peso</div>
              <div className="divTableCell">
                {""} {Math.round(data.weight / 10)} kg{" "}
              </div>
            </div>
            <div className="divTableRow">
              <div className="divTableCell">Numero de Batallas</div>
              <div className="divTableCell">{data.game_indices.length}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
