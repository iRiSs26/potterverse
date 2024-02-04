import React from "react";
import {Routes,Route} from "react-router-dom";
import Charf from './Charf'
import New1 from './New1'
import New2 from './New2';
const Rou =()=>{
    return (
        <>
        {/* <Charf/> */}
        {/* <New1/> */}
        {/* <New2/> */}
        <Routes>
            <Route path="/" element={<New1/>}/>
            <Route path='/news' element={<New2/>}/>
            <Route path='info' element={<Charf/>}/>
            {/* <Route component={Error}/> */}
        </Routes>

        

        </>
    );
}
export default Rou;
