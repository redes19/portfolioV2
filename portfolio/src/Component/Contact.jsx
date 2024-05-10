import React from 'react';
import '../CSS/contact.css';
// import Insta from '../logo/instagram.png';
import Github from '../logo/github-logo.webp';
import Linkedin from '../logo/linkedin.png';
import Mail from '../logo/mail-logo.png';

export default function Contact() {
  const emailAddress = 'lloris19@outlook.fr';

  return (
    <div className='contact-logo'>
      <ul>
        <li className='list-logo'> <a href="https://www.linkedin.com/in/loris-laurenti-ab4081260/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin" /></a> </li>
        <li className='list-logo'> <a href="https://github.com/redes19" target="_blank" rel="noopener noreferrer"><img src={Github} alt="githubLogo.jpg" /></a> </li>
        <li className='list-logo'><a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer"><img src={Mail} alt="Mail" /> </a> </li>
      </ul>
    </div>
  );
}
