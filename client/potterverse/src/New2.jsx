import { useState } from 'react';
import './New2.css'
import  logo from'./assets/th1.jpg'
import logo1 from './hog.jpg'
function New2() {
    const [count, setCount] = useState(0)
  
    return (
        <>
        <div className='header'>
        <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="#">Quiz</a>
<a href="/info">Character Quotient</a>
<a href="/news">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="/about">Patronus</a>

</div>

                    
                    <div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Step into the magical embrace of Potterverse, where wizards, witches, and Muggles unite! Uncover secrets, share enchanting tales, and immerse yourself in the Harry Potter world. The magic awaits – join us on this spellbinding adventure!</p>
                    <a href='#' class="btn">Read more...</a>

                   
</div>

<div className='logo1'>
    <img src={logo1}>

    </img>
</div>
<div className='latest'>
    Lastest and greatest news
</div>
<section>
<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>
<section className='sec'>



<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>

<section className='sec'>



<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>


<section className='sec'>



<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>

<section className='sec'>



<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>

<section className='sec'>



<div className='container'>
    <div className='left'></div>
    <div className='right'> 
    <div className='content'>
        <h1>this is heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
        <a href='#' class="btn">Read more...</a>
</div>
</div>
</div>
</section>


<footer className='footer'>
    <div className='containerf'>
        <div className='row'>
            <div className='footer-col'>
                <h4>About us</h4>
                <ul>
                    <li><a href='#'>Our Services</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>

            </div>
            <div className='footer-col'>
                <h4>Get Help</h4>
                <ul>
                    <li><a href='#'>FAQ</a></li>
                    <li><a href='#'>Know More</a></li>
                </ul>

            </div>
            <div className='footer-col'>
                <h4>Contact Us</h4>
                <ul>
                    <li><a href='#'>Instagram</a></li>
                    <li><a href='#'>Telegram</a></li>
                </ul>

            </div>
            
        </div>
    </div>

</footer>


        
        </>
    )}
    export default New2;
    