import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData} from 'react-router';
import { useEffect,useState } from 'react';
import { getStoredApp, removeFromDb } from '../../utils/AddToDb';
import iconRatings from "../../../assets/iconRatings.png"
import iconDownloads from "../../../assets/iconDownloads.png"
function Installation() {
  // const allApps = useLoaderData(); 
  const [installedApps, setInstalledApps] = useState([]);
    const [sortType, setSortType] = useState("")
 useEffect(() => {
  const storedApps = getStoredApp();
  setInstalledApps(storedApps);
  console.log('Installed Apps:', storedApps);
}, []);
 const handleUninstall=(id)=>{
    removeFromDb(id)
    setInstalledApps(prev=>prev.filter(app=>app.id !== id))
  }
  const handleSort = (type) => {
    setSortType(type);
    let sortedApps = [...installedApps];
    if (type === "size") {
      sortedApps.sort((a, b) => a.size - b.size);
    } else if (type === "rating") {
      sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg); 
    }
    setInstalledApps(sortedApps);
  };
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
  <div tabIndex={0} role="button" className="btn m-1 md:pr-[100px] inter text-xl 
  text-[#627382]">
    <div className='flex flex-row'>Sort By {sortType === "" ? "Default" : sortType} 
  {<IoMdArrowDropdown className='text-2xl ml-1.5'/>} </div>
  </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 
   w-52 p-2 shadow-sm">
    <li><a  onClick={() => handleSort("size")}>Size</a></li>
    <li><a onClick={() => handleSort("rating")}>Ratings</a></li>
  </ul>
</div>
      </div>
      <div>
      <div>
        {
          installedApps.map((installed)=>(
<div key={installed.id} className='flex flex-col md:flex-row m-10 bg-gray-100 rounded-xl'>
    <div >
    <img src={installed.image} alt="" className='h-[80px] w-[80px] m-4 rounded-2xl' />
    
    </div>
    <div className='ml-4 md:none'>
      <h1 className='inter font-medium text-[#001931] mt-4 text-xl'>{installed.title}</h1>
      <div className='flex flex-row'>
        <div className=" rounded-xl  text-[#00D390] 
        inter text-xl flex items-center gap-2">
      <img src={iconDownloads} alt="downloads" className="h-4 w-4" />
      {installed.downloads}
    </div>
    <div className=" rounded-xl text-[#FF8811] inter text-xl m-5 flex items-center gap-2">
      <img src={iconRatings} alt="ratings" className="h-4 w-4" />
      {installed.ratingAvg}
        <div className='inter text-[#627382] ml-3'>{installed.size} MB</div>
    </div>
  
</div>
    </div>
    <button className='btn md:my-auto ml-auto mr-9 mb-2.5 font-semibold
     gradient-bg2 p-[20px] py-6' onClick={()=>handleUninstall(installed.id)}>Uninstall</button>
</div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Installation