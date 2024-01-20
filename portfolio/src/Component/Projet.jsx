import React from 'react'
import '../CSS/projet.css'

export default function Projet() {
  return (
    <div>
        <div className='dev'>
            <div className='web'>
                <h4>Développement Web</h4>
                <div>
                    <ul className='projet-list'>
                        <li>Symbiot</li>
                        <li>Pokedex</li>
                        <li>Site de location Jeux vidéos</li>
                    </ul>
                </div>
            </div>
            <div className='games'>
                <h4>Vidéos Games</h4>
                <div>
                    <ul class="projet-list">
                        <li>RPG 2D</li>
                        <li>Tower-defence</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
