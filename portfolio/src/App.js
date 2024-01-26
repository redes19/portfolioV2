import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./CSS/theme.css";
import Sommaire from "./Component/sommaire.jsx";
import Bienvenue from "./Component/bienvenue.jsx";
import Mouse from "./Component/Mouse.jsx";
import Projet from "./Component/Projet.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Mouse />
      <section class="ecran">
        <div class="rec1"></div>
        <div class="carré1"></div>
        {/* <div class="rec2"></div>
        <div class="carré2"></div> */}
        <div class="rec3"></div>
        {/* <div class="carré3"></div> */}
        {/* <div class="rec4"></div> */}
        <div class="carré4"></div>
        <div className="cadre">
          <div className="container-info">
            <div className="intro">
              <Bienvenue />
            </div>
            <div>
              <Routes>
                <Route path="/Projet" element={<Projet />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <div className="container-sommaire">
            <Sommaire />
          </div>
        </div>
        {/* <div class="rec5"></div>
        <div class="carré5"></div> */}
        {/* <div class="rec6"></div> */}
        <div class="carré6"></div>
        <div class="rec7"></div>
        <div class="carré7"></div>
        <div class="rec8"></div>
        {/* <div class="carré8"></div> */}
      </section>
    </div>
  );
}

export default App;
