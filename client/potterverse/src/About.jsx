import { useState } from 'react';
import './About.css';
import logo from './assets/th1.jpg'
import logo1 from './about.jpg'
import logo2 from './wal.jpg';
// import {data} from './data';
function About() {
     const [count, setCount] = useState(0)
    
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

<a href="#">Quiz</a>
<a href="#">Character Quotient</a>
<a href="#">News</a>
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


         
        </>

    )
}
export default About;