import { useState } from 'react';
import './About.css';
import logo from './assets/th1.jpg'
import logo1 from './about.jpg'
import logo2 from './wal.jpg';
import React,{Component} from 'react';
import { useEffect } from 'react';

function About() {

const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
// const [characters, setCharacters] = useState(null);
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString =  characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <h4>Ancestry:${character.ancestry}</h4>
                <p>House:${character.house}</p>
            <h3>Patronus:${character.patronus}</h3>
                
            <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();


     
return (
        <>
        
         <div className="header">
      <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="/quiz">Quiz</a>
<a href="info">Character Quotient</a>
<a href="/news">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="#">Patronus</a>

</div>
<div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Welcome to our About Us page, </p><p>where we unveil the essence of our passion for </p><p>Harry Potter!</p>
                    <button className="learn-more-button">Learn More</button>
</div>
       
<div className='logo1'>
<img src={logo1}></img>

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
       

        </>

    )
}
export default About;

