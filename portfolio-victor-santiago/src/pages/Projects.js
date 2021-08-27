import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { IoPizzaOutline, IoCaretBackCircleSharp } from 'react-icons/io5';

export default function Projects() {
  return (
    <div>
      <Header />
      <Link to='/'><IoCaretBackCircleSharp /></Link>
      <img src="https://octocat-generator-assets.githubusercontent.com/my-octocat-1628983230728.png" alt="myOcto" width="350px" height="350px" align="right"/>
      <main>
        <ul>
          <li>
            <h2>
              <a href='https://github.com/visantiago99/Recipes-App' target='_blank' rel='noreferrer'>Recipes App <IoPizzaOutline /></a>
            </h2>
          </li>
        </ul>
      </main>
    </div>
  )
}
