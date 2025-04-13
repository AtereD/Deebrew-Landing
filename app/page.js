"use client"

import React, { useEffect } from 'react'
// Components
import About from '@/components/About'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'
import Testimonials from '@/components/Testimonials'
import OpeningHours from '@/components/OpeningHours'


const Home = () => {
  // add locomotive scroll
  useEffect (()=>{
    const loadLocomotiveScroll = async ()=> {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, [])
  
  return (
    <div className='h-full overflow-x-hidden'>
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
      {/* temporary div */}
      
    </div>
  )
}

export default Home