import { useState } from 'react';
import logo from './assets/th1.jpg'
function News3() {
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

</>

)
}
export default News3;