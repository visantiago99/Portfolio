import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="headerContainer">
      <header className="headerClass">
        <Link to='/'><button className="btn">Home</button></Link>
        <Link to='/projects'><button className="btn">Projects</button></Link>
        <Link to='/contact'><button className="btn">Contact</button></Link>
      </header>
    </div>
  )
}
