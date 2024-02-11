import { useState } from 'react';
import './New2.css'
import  logo from'./assets/th1.jpg'
import logo1 from './park.jpg'
import { NavLink } from 'react-router-dom';
function New2() {
    const [count, setCount] = useState(0)
  
    return (
        <>
        




<div className='header'>
                <div className="left-side">Potter</div>
                <div className="center-logo">
                    <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto', borderRadius: '15px' }} />
                </div>
                <div className="right-side">Verse</div>
            </div>
            <div className="navigation-bar">
                <NavLink to="/quiz">Quiz</NavLink>
                <NavLink to="/about">Character Quotient</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/fic">FicFathom</NavLink>
                <NavLink to="#">Chamber of Chat</NavLink>
                <NavLink to="/latest">Patronus</NavLink>
            </div>
            <div className="text-overlay">
                <h1>Welcome</h1>
                <p>Step into the magical embrace of Potterverse, where wizards, witches, and Muggles unite! Uncover secrets, share enchanting tales, and immerse yourself in the Harry Potter world. The magic awaits – join us on this spellbinding adventure!</p>
                <NavLink to='#' className="btn">Read more...</NavLink>
            </div>
            <div className='logo1'>
                <img src={logo1} alt="Logo1" />
            </div>
            <div className='latest'>
                Lastest and Greatest News
            </div>
            <section>
                <div className='container'>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='content'>
                            <h1>Hogwarts Legacy Sold Over 22 Million Copies in 2023, WB Claims; More Harry Potter Games in Development</h1>
                            
                            <NavLink to='#' className="btn">Read more...</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='content'>
                            <h1>Actor Michael Gambon, Dumbledore From Harry Potter Films, Dies At 82</h1>
                            
                            <NavLink to='#' className="btn">Read more...</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='content'>
                            <h1>Famous Harry Potter Steam Train 'Hogwarts Express' Allowed To Resume Service In UK</h1>
                            
                            <NavLink to='#' className="btn">Read more...</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            {/* Add more sections with NavLink as needed */}
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
    )}
    export default New2;
    