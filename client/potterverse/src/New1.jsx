import { useState } from 'react';
import './New1.css'
import logo from './assets/th1.jpg';
import logo1 from './wallp.jpg'
import logo2 from './rec17.jpg';
import logo3 from './assets/rec18.jpg';
import logo4 from './rec15.jpg';
import logo5 from './rec14.jpg';
import logo6 from './wal.jpg';
import logo7 from './rec16.jpg';
function New1() {
    const [count, setCount] = useState(0)
  
    return (
        <>
        
        <div className='bgc'>
        <div className="header">
      <div className="left-side">Potter</div>
      <div className="center-logo">
        
         <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto',borderRadius:'15px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="/quiz">Quiz</a>
<a href="/info">Character Quotient</a>
<a href="/news">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="/about">Patronus</a>

</div>
<div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Step into the magical embrace of Potterverse, where wizards, witches, and Muggles unite! Uncover secrets, share enchanting tales, and immerse yourself in all the Harry Potter world. The magic awaits – join us on this spellbinding adventure!</p>
                    <button className="learn-more-button">Learn More</button>
</div>
       
<div className='logo1'>
<img src={logo1}></img>

</div>

<div className='logo2'>
<div className='text-left-of-logo2'>
                        <p>Stay enchanted with the latest</p><p> updates from the Wizarding </p><p>World!</p>
                       <a href='/news'> <button className="learn-more-button">Learn More</button></a>
                    </div>
                    


    <img src={logo2} className='logo22'></img>
    
</div>
       </div>
       <div className='logo3'>
        <div className='text-right'>
        <p>Think you know your favorite Harry Potter</p><p> characters inside out? Challenge your</p><p> wizarding knowledge with our "How Well Do You</p><p> Know Your Favorite Characters?"</p> 
        <a href='/quiz'><button className="learn-more-button">Learn More</button>
                       
                   </a> </div>
        
        <img src={logo3}></img>
       </div>
       <div className='logo4'>
        <div className='text-left'>
            <p>Engage in enchanting conversations about</p> <p>your favorite movie moments, unravel the </p><p>mysteries of the Wizarding World, </p><p>and share your spellbinding insights.</p>
            <button className="learn-more-button">Learn More</button>
        </div>
        <img src={logo4}></img>
       </div>
       <div className='logo55'>
        <div className='text55'>
            <p>Answer a few enchanting questions and</p><p> let the magic unfold. </p>

        <button className="learn-more-button">Learn More</button>
        </div>
        <img src={logo5}></img>
       </div>
        <div className='logo6'>
            <div className='text6'>
                <p>Explore the enchanting profiles of your</p><p> favorite wizards,</p><p> witches, and magical beings.</p>
                <a href='/about'><button className="learn-more-button">Learn More</button></a>
            </div>
            <img src={logo6}></img>
        </div>

        <div className='logo7'>
            <div className='text7'>
                <p>Dive into a sea of magical narratives as users</p> <p>share their fanfictions, casting new spells</p>
                <p> and weaving tales beyond the pages of the</p> <p>Wizarding world..</p>
                <a href='/fic'>
                <button className="learn-more-button">Learn More</button></a>
            </div>
            <img src={logo7}></img>
        </div>


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

        


    )
}
export default New1;