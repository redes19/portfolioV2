// sommaire.jsx
import React from 'react';
import "../CSS/sommaire.css";
import { Link } from "react-router-dom";

export default function Sommaire() {
  return (
    <div>
      <div className="sommaire">
        <h2>Sommaire</h2>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="projet">
          <Link to="/Home/Projet">Projet</Link>
        </div>
        <div className="about">
          <Link to="/Home/About">A propos de moi</Link>
        </div>
        <div className="contact">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
