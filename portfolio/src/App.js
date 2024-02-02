import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Component/Home.jsx";
import Mouse from "./Component/Mouse.jsx";
import Style from "./Component/style.jsx";

function App() {
  return (
    <div className="App">
      <Mouse />
      <Style />
      <Home />
    </div>
  );
}

export default App;
