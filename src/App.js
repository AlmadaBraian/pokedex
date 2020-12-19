/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import Tabla from './components/Tabla';
import "./App.css";
import DenseTable from "./components/DenseTable";


let pokeArray = [];
//let pokeObjeto = {};
let cont = 0;
class Pokemon {
  constructor(nombre,dato,tipo,img1,img2){
    this.nombre = nombre;
    this.dato = dato;
    this.tipo = tipo;
    this.img1 = img1;
    this.img2 = img2;
  }
}

const App = () => {
  
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonImageFront,setPokemonImageFront] = useState(``);
  const [pokemonImageBack,setPokemonImageBack] = useState(``);
  //const [pokeObjeto, setPokeObjeto] = useState({});
  const [pokeArray,setPokemonArray] = useState([]);

  const getPokemon = async () => {
    const toArray = [];

    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
       
      setPokemonType(res.data.types[0].type.name);
      setPokemonImageFront(res.data.sprites.front_default);
      setPokemonImageBack(res.data.sprites.back_default);
      setPokemonData(toArray);
      
      const pokeObjeto = {id: res.data.id, Nombre: pokemon, Tipo: res.data.types[0].type.name, Altura: Math.round(res.data.height * 10), Peso:Math.round(res.data.weight / 10), Batallas: res.data.game_indices.length, Frente: res.data.sprites.front_default};
      //pokeArray.push(pokeObjeto);
      setPokemonArray([...pokeArray, pokeObjeto])
      
      //pokeArray.forEach(element => console.log(element));
      //console.log(pokeArray[0]);

      //console.log(poke);
      //console.log(pokemonImage);
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
    
    //console.log(pokemonData);
    //pokeObjeto = new Pokemon(pokemon, pokemonData, res.data.types[0].type.name, res.data.sprites.front_default, res.data.sprites.back_default);
    //pokeArray.push(pokeObjeto);
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

      <DenseTable pokeArray = {pokeArray}/>
      
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
            <div className="divTableRow">
              <div className="divTableCell">frente</div>
              <div><img src = {pokemonImageFront}></img></div>             
            </div>
            <div className="divTableRow">
              <div className="divTableCell">espalda</div>
              <div><img src = {pokemonImageBack}></img></div>      
            </div>
          </div>
        </div>
      ))}
     <script></script>
    </div>
    
    
  );
};

export default App;
