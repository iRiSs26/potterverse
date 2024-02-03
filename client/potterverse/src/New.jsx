import { useState } from 'react';
import logo from './th1.jpg'
import logo1  from './star.jpg'
import logo2 from './rec13.jpg'
import './New.css';
function New() {
    const [count, setCount] = useState(0)
  
    return (
        <>
         {/* <div className="background-image"></div>  */}
 
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
        {/* <img src={logo2}></img> */}
      </div>
      <div className="background-below-navbar">
              
                <img src={logo1}></img>
                <div className="text-overlay">
                    <h1>Welcome</h1>
                    <p>Step into the magical embrace of Potterverse, where wizards, witches, and Muggles unite! Uncover secrets, share enchanting tales, and immerse yourself in all the Harry Potter world. The magic awaits – join us on this spellbinding adventure!</p>
                    <button className="learn-more-button">Learn More</button>

                    <div className="spacer"></div>

                   
                    <img src={logo2} alt="Right-side Image" className="right-image" />
                </div>
                </div>
                {/* <img src={logo1}></img> */}
            

        
        </>
    )
}
export default New