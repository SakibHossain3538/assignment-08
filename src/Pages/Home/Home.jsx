import React, { Suspense, useEffect, useState } from 'react'
import Hero from '../../Components/HeroSection/Hero'
import { useLoaderData } from 'react-router'
function Home() {
  const data=useLoaderData()
  return (
  <div>
    <Suspense fallback="loading.......">
    <Hero data={data} ></Hero>
    </Suspense> 
  </div>
  )
}

export default Home