import React from 'react';
import { Link } from 'react-router-dom';
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Header() {
  return (
    <div className="headerContainer">
      <header className="headerClass">
        <div className="headerBtns">
        <Link to='/'><button className="btn">Home</button></Link>
        <Link to='/projects'><button className="btn">Projects</button></Link>
        <Link to='/contact'><button className="btn">Contact</button></Link>
        </div>
        <div className="divSocial">
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
      </header>
    </div>
  )
}
