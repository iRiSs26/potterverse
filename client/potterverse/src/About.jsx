import { useState } from 'react';
import './About.css';
import logo from './assets/th1.jpg'
import logo1 from './assets/wal.jpg'
import logo2 from './assets/wal.jpg';
import React,{Component} from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
function About() {


useEffect(() => {
    const loadCharacters = async () => {
        try {
            const res = await fetch('https://hp-api.onrender.com/api/characters');
            const hpCharacters = await res.json();
            displayCharacters(hpCharacters);
        } catch (err) {
            console.error(err);
        }
    };

    const displayCharacters = (characters) => {
        const charactersList = document.getElementById('charactersList');
        const searchBar = document.getElementById('searchBar');

        const htmlString = characters
            .map((character) => {
                return `
                    <li class="character">
                        <h2>${character.name}</h2>
                        <h4>Ancestry: ${character.ancestry}</h4>
                        <p>House: ${character.house}</p>
                        <h3>Patronus: ${character.patronus}</h3>
                        <img src="${character.image}" />
                    </li>
                `;
            })
            .join('');
        charactersList.innerHTML = htmlString;

        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
            const filteredCharacters = characters.filter((character) => {
                return (
                    character.name.toLowerCase().includes(searchString) ||
                    character.house.toLowerCase().includes(searchString)
                );
            });
            displayCharacters(filteredCharacters);
        });
    };

    loadCharacters();
}, []);


     
return (
        <>
        
         <div className="header">
      <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        
<div className='navigation-bar'>
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="#">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>
            </div>
            <div className='logo1'>
                <div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Dive into the captivating universe of Harry Potter and explore our character cards! Unlock the secrets of your favorite wizards and witches as you journey through their enchanting tales. Start your magical adventure now</p>
                    <NavLink to='#' className="btn">Get to know them...</NavLink>
                </div>
                <img src={logo1} alt="Logo1" />
            </div>

         

  <div className="container22">  
            <h1>&#x2728;Harry Potter Characters &#x2728;</h1>
            <div id="searchWrapper">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="search for a character"
                />
            </div>
            <ul id="charactersList"></ul>
          </div>   

          <footer className='footer'>
            <div className='containerf'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>ABOUT US</h4>
                        <ul>
                            <li><NavLink to='#'>OUR SERVICES</NavLink></li>
                            <li><NavLink to='#'>PRIVACY POLICY</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>GET HELP</h4>
                        <ul>
                            <li><NavLink to='#'>FAQ</NavLink></li>
                            <li><NavLink to='#'>KNOW MORE</NavLink></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>CONTACT US</h4>
                        <ul>
                            <li><NavLink to='#'>INSTAGRAM</NavLink></li>
                            <li><NavLink to='#'>TELEGRAM</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        
       

        </>

    )
}
export default About;

