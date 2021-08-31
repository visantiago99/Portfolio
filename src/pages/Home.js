import React from 'react';
import '../App.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import perfil from '../images/perfil.JPG';
import { IoIosApps } from 'react-icons/io';
import inteligencia from '../images/inteligencia.png';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="picture">
          <img src={perfil} alt="fotoPerfil" width="350px" height="350px" align="center" className="imgPerfil"/>
        </div>
        <div className="title-content">
          <h1 className="title">Hello there! I'm <span className="spanName">Victor Santiago</span></h1>
          <p>Passionate about technology and all of its vertents since a child, now studying everyday to be a Software Engineer</p>
          <br />
          <img src={inteligencia} alt="prop" width="150px" />
          <h2>I'm a front-end developer, born and living in Brazil, wiling to work worldwide</h2>
        </div>
      </main>
     <section>
      <h2>KNOWLEDGE</h2>
      <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' alt='html' />
      <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='css' />
      <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='js' />
      <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' alt='react' />
      <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='react router' />
      <img src='https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white' alt='redux' />
      <img src='https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e' alt='cypress' />
      <img src='https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white' alt='Jest' />
      <img src='https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white' alt='lint' />
     </section>
     <br />
     <h2>I'm currently studying on <a href='https://www.betrybe.com/'><span>Trybe</span></a> to be a Full Stack Developer </h2>
     <br />
     <h3 className="linkProjects">You can see some of my projects here <Link to='/projects'><IoIosApps /></Link></h3>
    </div>
  )
}
