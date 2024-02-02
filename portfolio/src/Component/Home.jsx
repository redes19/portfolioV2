import { Route, Routes, Navigate } from "react-router-dom";
import "../App.css";
import "../CSS/theme.css";
import Sommaire from "./sommaire.jsx";
import Bienvenue from "./bienvenue.jsx";

import Projet from "./Projet.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

import RPG from "./projet/RPG.jsx";

export default function Home() {
  return (
    <div>
      <section class="ecran">
        <div className="cadre">
          <div className="container-info">
            <div className="intro">
              <Bienvenue />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/About" />} />
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
      </section>
    </div>
  )
}
