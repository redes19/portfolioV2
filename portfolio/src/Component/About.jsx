import React from 'react';
import '../CSS/About.css';

export default function About() {
  const handleDownload = () => {
    const pdfPath = 'portfolioV2/portfolio/src/CV/CV_-_LORIS_LAURENTI.DevWeb_alternace.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'CV_Loris_Laurenti.pdf';
  
    // Gestion d'erreur
    link.addEventListener('error', (event) => {
      console.error('Erreur de téléchargement du fichier PDF', event);
    });
  
    link.click();
  };

  return (
    <div className='about-text'>
      <p>Je suis actuellement en formation pour devenir un développeur web, et mon objectif est d'en faire mon métier.<br/> J'ai une passion particulière pour le back-end, mais j'apprécie également le front-end. <br/><br/>Mes premiers pas dans le monde de la programmation ont été orientés vers les jeux vidéo, et bien que j'aie le projet de créer mes propres jeux à l'avenir, je préfère actuellement me concentrer sur la programmation web, qui me passionne énormément.</p>
      {/* <span><button onClick={handleDownload}>
      Télécharger le CV (PDF)
    </button></span> */}
    </div>
  );
}
