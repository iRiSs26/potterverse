import { useState } from 'react';
import './New2.css'
import  logo from'./assets/th1.jpg'
import logo1 from './hog.jpg'
import { NavLink } from 'react-router-dom';
function New2() {
    const [count, setCount] = useState(0)
  
    return (
        <>
        {/* <div className='header'>
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

</footer> */}




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
                Lastest and greatest news
            </div>
            <section>
                <div className='container'>
                    <div className='left'></div>
                    <div className='right'>
                        <div className='content'>
                            <h1>this is heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
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
                            <h1>this is heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
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
                            <h1>this is heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit explicabo repudiandae! Recusandae quos voluptatum magnam ipsa nihil ea, voluptates fuga et aut minima eum perferendis reiciendis explicabo error ducimus?</p>
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
                            <h4>About us</h4>
                            <ul>
                                <li><NavLink to='#'>Our Services</NavLink></li>
                                <li><NavLink to='#'>Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>Get Help</h4>
                            <ul>
                                <li><NavLink to='#'>FAQ</NavLink></li>
                                <li><NavLink to='#'>Know More</NavLink></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4>Contact Us</h4>
                            <ul>
                                <li><NavLink to='#'>Instagram</NavLink></li>
                                <li><NavLink to='#'>Telegram</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        
        </>
    )}
    export default New2;
    