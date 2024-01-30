import React from 'react';
import './Home.css';
import logo from "./wp7316242.jpg";

function Home() {
  return (
    <div className='topnav'>
        <a href='#'>Chamber of chat</a>
        <a href='Char.js'>Character Quotient</a>
        <a href='#'>Quiz</a>
        <a href='#'>Patronus Generator</a>
        <a href='#'>FicFathom</a>
        <img src={logo} className='bg-name' ></img>

      
    </div>
    
  )
}

export default Home;
