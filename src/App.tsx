import React, { useEffect, useState } from "react";

import "./App.css";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import AutocompleteClass from "./components/Autocomplete/AutocompleteClass";

const defaultOptions = [
  "Apple",
  "Ape",
  "Banana",
  "Pineapple",
  "Watermelon",
  "Appartment",
];

type PokemonResult = {
  name: string;
  url: string;
};

function App() {
  const [pokemonOptions, setPokemonOptions] = useState<string[]>([]);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?&offset=0"
      );
      const pokemon = await response.json();

      const cleanPokemon = pokemon.results.map((pokemon: PokemonResult) => {
        return pokemon.name;
      });

      console.log(cleanPokemon);

      setPokemonOptions(cleanPokemon);
    } catch (error) {
      console.log("Something went wrong fetching the pokemon", error);
      setPokemonOptions(["loading..."]);
    }
  }

  return (
    <div className="App" data-testid="body">
      <h1 style={{ textAlign: "center" }}>Deel's Component Library</h1>
      <div className="container">
        <div>
          <h3>Autocomplete Component with default options</h3>
          <Autocomplete options={defaultOptions} />
        </div>
        {/* <div>
          <h3>Autocomplete Class Component with default options</h3>
          <AutocompleteClass options={defaultOptions} />
        </div> */}
        <div>
          <h3>Autocomplete Component with Pokemon Api</h3>
          <Autocomplete options={pokemonOptions} />
        </div>
      </div>
    </div>
  );
}

export default App;
