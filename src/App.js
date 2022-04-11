import "./App.css";
import React from "react";
import Prices from "./components/Prices/Prices";
import Switch from "./components/Switch/Switch";

function App() {
  return (
    <div className="App">
      <Switch />
      <Prices />
    </div>
  );
}

export default App;
