import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Mouse from "./Component/Mouse.jsx";
import Style from "./Component/style.jsx";
import Projet from "./Component/projet/RPG.jsx";

function App() {
  return (
    <div className="App">
      <Mouse />
      <Style />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home/*" element={<Home />} />
        <Route path="/Pro" element={<Projet />} />
      </Routes>
    </div>
  );
}

export default App;
