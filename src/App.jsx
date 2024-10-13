





import React from 'react'
import { BrowserRouter,Route,RouterProvider, Routes} from "react-router-dom"
import Login from './Compnents/Login'
import Home from './Compnents/Home'
import Register from './Compnents/Register'

const App = () => {
  return (
    <div className='app bg-my-200  w-screen h-[100vh] text-center relative'>
      <div className='absolute blur-[90px] z-0 w-[390px] h-[300px]  rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 translate-x-[-190%] translate-y-[40%]'>
      </div>

      <div className='relative z-10   w-full h-full'>



      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>



       </Routes>
      </BrowserRouter>



    </div>




      </div> 
  )
}

export default App




