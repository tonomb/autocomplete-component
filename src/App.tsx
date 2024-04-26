import React from "react";

import "./App.css";
import Autocomplete from "./components/Autocomplete";

const defaultOptions = [
  "Apple",
  "Ape",
  "Banana",
  "Pineapple",
  "Watermelon",
  "Appartment",
];

function App() {
  return (
    <div className="App" data-testid="body">
      <h1>Deel's Component Library</h1>
      <div>
        <Autocomplete options={defaultOptions} />
      </div>
    </div>
  );
}

export default App;
