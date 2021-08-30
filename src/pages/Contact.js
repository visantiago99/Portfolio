import React from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { SiLinkedin, SiGithub } from "react-icons/si";
import { IoCaretBackCircleSharp } from 'react-icons/io5';

export default function Contact() {
  return (
    <div>
      <Header />
      <Link to='/'><IoCaretBackCircleSharp className='backIconContact' /></Link>
      <h1>You can reach me here:</h1>
      <br />
      <div className="divSocialContact">
          <a href='https://www.linkedin.com/in/victor-santiago-082542144/' target='_blank' rel='noreferrer'><SiLinkedin /></a>
          <a href='https://github.com/visantiago99' target='_blank' rel='noreferrer'><SiGithub /></a>
        </div>
      <ContactUs />
    </div>
  )
}
