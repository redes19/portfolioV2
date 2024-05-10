import React from 'react';
import '../CSS/About.css';
import Pdf from '../CV/CV_-_LORIS_LAURENTI.DevWeb_alternace.pdf';

export default function About() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = Pdf;
    a.download = "CV-Loris-Laurenti.pdf";
    a.dispatchEvent(new MouseEvent('click'));
  };

  return (
    <div className='about-text'>
      <p>Je suis actuellement en formation pour devenir un développeur web, et mon objectif est d'en faire mon métier.<br/> J'aime tout aussi bien coder le front-end que le back-end <br/><br/>Mes premiers pas dans le monde de la programmation ont été orientés vers les jeux vidéo, et bien que j'aie le projet de créer mes propres jeux à l'avenir, je préfère actuellement me concentrer sur la programmation web, qui me passionne énormément.</p>
      <span><button onClick={handleDownload}>
      Télécharger le CV (PDF)
    </button></span>
    </div>
  );
}
