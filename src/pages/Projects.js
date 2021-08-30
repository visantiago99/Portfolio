import React from 'react';
import Header from '../components/Header';
import '../App.css';
import { Link } from 'react-router-dom';
import { IoPizzaOutline, IoCaretBackCircleSharp, IoGameControllerOutline, IoCashOutline } from 'react-icons/io5';
import { SiMysql } from "react-icons/si";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="divProjects">
      <Link to='/'><IoCaretBackCircleSharp className='backIcon' /></Link>
        <ul>
          <li>
            <h2>
              <a href='https://github.com/visantiago99/Recipes-App' target='_blank' rel='noreferrer'>Recipes App <IoPizzaOutline /></a>
            </h2>
          </li>
          <li>
            <h2>
              <a href='https://github.com/visantiago99/Trivia-App-React-Redux' target='_blank' rel='noreferrer'>Trivia App <IoGameControllerOutline /></a>
            </h2>
          </li>
          <li>
            <h2>
              <a href='https://github.com/visantiago99/Wallet-Coin-Converter' target='_blank' rel='noreferrer'>Wallet and Coin Converter App <IoCashOutline /></a>
            </h2>
          </li>
          <li>
            <h2>
              <a href='https://github.com/visantiago99/MYSQL-vocabulary-booster' target='_blank' rel='noreferrer'>MYSQL vocabulary booster <SiMysql /></a>
            </h2>
          </li>
        </ul>
        <img src="https://octocat-generator-assets.githubusercontent.com/my-octocat-1628983230728.png" alt="myOcto" width="350px" height="350px"/>
      </div>
    </div>
  )
}
