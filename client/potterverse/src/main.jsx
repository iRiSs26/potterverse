import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import New from './New.jsx'
import New1 from './New1.jsx'
import New2 from './New2.jsx'
import Charf from './Charf.jsx'
import {BrowserRouter} from 'react-router-dom'
import Rou from './Rou.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Rou />
    </BrowserRouter>
    
  </React.StrictMode>,
)
