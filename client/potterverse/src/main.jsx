import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
// import Home from './Home.jsx'
import New from './New.jsx'
import New1 from './New1.jsx'
import Rou from './Rou.jsx'
import New2 from './New2.jsx'
import Charf from './Charf.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <New1 />
=======
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
    
>>>>>>> a923d3a893295506491d95b88b01944b556d30ae
  </React.StrictMode>,
)
