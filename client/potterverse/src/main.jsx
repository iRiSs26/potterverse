import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Home from './Home.jsx'
import New from './New.jsx'
import New1 from './New1.jsx'
import Rou from './Rou.jsx'
import New2 from './New2.jsx'
import Charf from './Charf.jsx'
import About from './About.jsx'
import { BrowserRouter } from 'react-router-dom'
import News3 from './News3.jsx'
import Quiz from './Quiz.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<React.StrictMode>
    <Rou />
  </React.StrictMode>
  </BrowserRouter>
  ,
)
