import React, { Suspense, useEffect, useState } from 'react'
import Hero from '../../Components/HeroSection/Hero'
import { Link, useLoaderData } from 'react-router'
function Home() {
  const data=useLoaderData()
  return (
  <div>
    <Suspense fallback="loading.......">
    <Link to='/'><Hero data={data} ></Hero></Link>
    </Suspense> 
  </div>
  )
}

export default Home