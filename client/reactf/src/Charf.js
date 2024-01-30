import React from 'react';
import './Charf.css';
import logo from './harry_potter-1.jpg';
import log from './hp.jpg';

function Charf() {
  return (
    <div>
        <div className='back'>
        <img src={logo} className='bg-name' ></img>
        <div>
            <img src={log} className='bc-name'></img>
        </div>
        </div>
        
      
    </div>
  )
}

export default Charf
