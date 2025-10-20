import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData, useRouteLoaderData } from 'react-router';
import { useEffect,useState } from 'react';
import { getStoredApp } from '../../utils/AddToDb';
function Installation() {
      const allApps = useLoaderData(); // all apps from loader
  const [installedApps, setInstalledApps] = useState([]);

 useEffect(() => {
  const storedApps = getStoredApp(); // already array of full objects
  setInstalledApps(storedApps);
  console.log('Installed Apps:', storedApps);
}, []);

  return (
     <div className='mt-[80px]'>
      <div>
          <h1 className='text-5xl text-[#001931] inter text-center font-bold py-6'>
          Your Installed Apps</h1>
           <p className='text-3xl inter text-center text-[#627382]'>
          Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex flex-row justify-between mt-[40px] ml-[40px] mr-[40px]'> 
          <div className='inter font-semibold text-2xl '>({installedApps.length}) Apps Found</div>
              <div className="dropdown w-[300px] ">
  <div tabIndex={0} role="button" className="btn m-1 pr-[100px] inter text-xl 
  text-[#627382]"><div className='flex flex-row'>Sort By Size {<IoMdArrowDropdown className='text-2xl ml-1.5'/>} </div></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 
   w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
      </div>
      <div>
      <div>npm run dev</div>
      </div>
    </div>
  )
}

export default Installation