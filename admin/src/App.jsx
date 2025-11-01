
import './index.css'
import Navbar from './component/Navbar'
import Slidebar from './component/Slidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './Pages/add'
import Lists from './Pages/list'
import Orders from './Pages/Orders'
import Login from './component/Login'
import { useEffect, useState } from 'react'
import { ToastContainer } from "react-toastify"



function App() {

  const [token,settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
localStorage.setItem('token',token)

  },[token])


  return (<>
  

{token===""?<  Login  settoken= {settoken}  />:  <>



      <Navbar settoken={settoken}/>
      <div className="flex" >
        <div className="w-20 sm:w-56 flex-shrink-0" >
          <Slidebar />
        </div>

        <div className='flex-1 p-4 bg-gray-50 overflow-x-auto' >
          <Routes>

            <Route path="/add" element={<Add Orders token={token} />} />

            <Route path="/list" element={<Lists />} />
            <Route path="/Order" element={<Orders token={token} />} />
            <Route />

          </Routes>
        </div>
      </div>


    </>}
    <ToastContainer />

</>
  
  )
}

export default App
