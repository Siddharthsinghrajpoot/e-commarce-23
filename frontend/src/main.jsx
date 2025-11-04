import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import ShopContext from './context/ShopContext.jsx'
  import { ToastContainer,  } from 'react-toastify';
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ShopContext>
    <ToastContainer/>
    <App />
  
    </ShopContext>
    </BrowserRouter>

)
