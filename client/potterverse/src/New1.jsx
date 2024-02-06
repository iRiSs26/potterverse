import { useState } from 'react';
import './New1.css'
import logo from './th1.jpg';
import logo1 from './rec13.jpg'
import logo2 from './rec17.jpg';
import logo3 from './rec18.jpg';
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
        
         <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto',borderRadius:'5px' }} />
      </div>
      <div className="right-side">Verse</div>
     </div> 
        <div className="navigation-bar">

<a href="#">Quiz</a>
<a href="#">Charcter Quotient</a>
<a href="#">News</a>
<a href="#">FicFathom</a>
<a href="#">Chamber of Chat</a>
<a href="#">Patronus</a>

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
                        <p>Stay enchanted with the latest updates</p> 
                        <p>from the Wizarding World!</p>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                    


    <img src={logo2} className='logo22'></img>
    
</div>
       </div>
       <div className='logo3'>
        <div className='text-right'>
        <p>Think you know your favorite Harry Potter characters inside out? Challenge your wizarding knowledge with our "How Well Do You Know Your Favorite Characters?"</p> 
        <button className="learn-more-button">Learn More</button>
                       
                    </div>
        
        <img src={logo3}></img>
       </div>
       <div className='logo4'>
        <div className='text-left'>
            <p>Engage in enchanting conversations about your</p> <p>favorite movie moments, unravel the mysteries of the </p><p>Wizarding World, and share your spellbinding insights.</p>
            <button className="learn-more-button">Learn More</button>
        </div>
        <img src={logo4}></img>
       </div>
       <div className='logo5'>
        <div className='text5'>
            <p>Answer a few enchanting questions and let the magic unfold as we reveal your unique Patronus. </p>

        <button className="learn-more-button">Learn More</button>
        </div>
        <img src={logo5}></img>
       </div>
        <div className='logo6'>
            <div className='text6'>
                <p>Explore the enchanting profiles of your favorite</p> <p>wizards, witches, and magical beings</p>
                <button className="learn-more-button">Learn More</button>
            </div>
            <img src={logo6}></img>
        </div>

        <div className='logo7'>
            <div className='text7'>
                <p>Dive into a sea of magical narratives as users</p> <p>share their fanfictions, casting new spells</p>
                <p> and weaving tales beyond the pages of the</p> <p>Wizarding world..</p>
                <button className="learn-more-button">Learn More</button>
            </div>
            <img src={logo7}></img>
        </div>
        </>


    )
}
export default New1;