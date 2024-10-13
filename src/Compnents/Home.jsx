

import React from 'react'
import Navbar from './Navabr'
import Hero from './Hero'
import Service from './Service'
import About from './About'
import More from './More'
import Investors from './Investors'
import Box from './Box'
import Pooter from './Pooter'

const Home = () => {
  return (
    <div className='app bg-my-200  w-screen h-[100vh] text-center relative'>
    <div className='absolute blur-[90px] z-0 w-[390px] h-[300px]  rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 translate-x-[-190%] translate-y-[40%]'>
    </div>

    <div className='relative z-10   w-full h-full'>




<Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <More/>
      <Investors/>
      <Box/>
      <Pooter/>

      
    </div>
    </div>
  )
}

export default Home
