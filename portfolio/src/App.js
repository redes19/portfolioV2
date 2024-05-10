import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Mouse from "./Component/Mouse.jsx";
import Style from "./Component/style.jsx";
import RPG from "./Component/projet/RPG.jsx";
import Pokedex from "./Component/projet/Pokedex.jsx";

function App() {
  return (
    <div className="App">
      <Mouse />
      <Style />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/RPG" element={<RPG />} />
        <Route path="Pokedex" element={<Pokedex />}></Route>
      </Routes>
    </div>
  );
}

export default App;
