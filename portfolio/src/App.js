import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Mouse from "./Component/Mouse.jsx";
import Style from "./Component/style.jsx";
import RPG from "./Component/projet/RPG.jsx";

function App() {
  return (
    <div className="App">
      <Mouse />
      <Style />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/RPG" element={<RPG />} />
      </Routes>
    </div>
  );
}

export default App;
