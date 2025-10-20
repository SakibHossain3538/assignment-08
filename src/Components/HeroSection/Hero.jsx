import React from 'react'
import hero from '../../../assets/hero.png'
import playstore from '../../../assets/playstore.png'
import appstore from '../../../assets/appstore.png'
import Card from '../Card/Card'
function Hero({data}) {
  return (
    <div className=' flex flex-col
    justify-center items-center pt-20 '>
        <div>
        <h1 className='text-[#001931] font-bold text-[50px] text-center inter'>We Build </h1> 
         <h1 className='font-bold text-[50px] inter' > 
        <span className='gradient-text font-bold text-[50px]'>Productive </span>Apps</h1>
        </div>
        <div>
          <p className='text-center text-[#627382] font-medium inter'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
<div className="flex flex-row my-4 gap-4">
  <div
    onClick={() => window.open("https://play.google.com/store/apps", "_blank")}
    className="cursor-pointer border border-[#627382] p-2 rounded-xl font-semibold text-[#001931] flex items-center gap-2 hover:bg-gray-100 transition"
  >
    <img src={playstore} alt="Google Play" className="h-5 w-5" />
    Google Play
  </div>

  <div
    onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
    className="cursor-pointer border border-[#627382] p-2 rounded-xl font-semibold text-[#001931] flex items-center gap-2 hover:bg-gray-100 transition"
  >
    <img src={appstore} alt="App Store" className="h-5 w-5 rounded-xl" />
    App Store
  </div>
</div>

        <div>
            <img src={hero} alt="" />
        </div>
        <div className=' items-center gradient-bg w-full'>
            <h3 className='inter text-[48px] font-bold text-center mt-16'>
                Trusted by Millions, Built for You</h3>
                <div className='md:flex md:flex-row justify-around mt-[100px] mb-[100px]'>
                    <div className='flex flex-col  text-center inter'>
                        <p>Total Downloads</p>
                        <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='flex flex-col  text-center inter'>
                           <p>Total Reviews</p>
                        <h1 className='text-[64px] font-extrabold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='flex flex-col  text-center inter'>
                          <p>Active Apps</p>
                        <h1 className='text-[64px] font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
        </div>
        <div>
          <div>
          <h1 className='text-5xl text-[#001931] inter text-center font-bold py-6'>
          Trending Apps</h1>
           <p className='text-3xl inter text-center text-[#627382]'>
          Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <Card data={data}></Card>
      </div>
        </div>
    </div>
  )
}

export default Hero