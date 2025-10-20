import React from 'react'
import { useParams,useLoaderData} from 'react-router'
import iconDownloads from '../../../assets/iconDownloads.png'
import iconRatings from '../../../assets/iconRatings.png'
import iconReview from '../../../assets/iconReview.png'
import Charts from '../../Components/charts/charts'
import { useState } from 'react'
import { addToDb } from '../../utils/AddToDb'
function AppDetails() {
    const {id}=useParams()
     const appId=parseInt(id)
    const data=useLoaderData()
    const apps=data.find(app=>app.id===appId)
     const [installed, setInstalled] = useState(false);

  const handleClick = (id) => {
    setInstalled(true); // mark as installed
    addToDb(id)
  };
    console.log(apps)
  return (
    <div >
        <div className='flex flex-col lg:flex-row ml-[80px] mt-[80px]'>
            
            <div>
                <img src={apps.image} alt="" className='h-[300px] w-[300px] rounded-xl' />
            </div>
            <div className=' flex flex-col lg:ml-[40px] mt-[50px] lg:mt-0'>
                <div>
                <h1 className='inter font-bold text-4xl'>{apps.title}</h1>
                <div className='inter text-[#627382]'>Developed By <span className='gradient-text'>{apps.companyName}</span></div>
                  </div>
                <div className='flex flex-col  md:flex-row justify-around border-t-2 border-gray-300 w-[600px] mt-10 pt-7'>
                    <div className='flex flex-col'> 
                        <img src={iconDownloads} alt="" 
                        className='h-[40px] w-[40px] inter'/>
                         <div className='inter text-xl text-[#001931]'>Downloads</div>
                         <div className='inter font-extrabold text-[40px] text-[#001931]'>{apps.downloads}</div>
                    </div>
                   <div className='flex flex-col py-8 md:py-0'> 
                        <img src={iconRatings} alt="" 
                        className='h-[40px] w-[40px] inter'/>
                         <div className='inter text-xl text-[#001931]'>Average Ratings</div>
                         <div className='inter font-extrabold text-[40px] text-[#001931]'>{apps.ratingAvg}</div>
                    </div>
                    <div className='flex flex-col'> 
                        <img src={iconReview} alt="" 
                        className='h-[40px] w-[40px] inter'/>
                         <div className='inter text-xl text-[#001931]'>Total Reviews</div>
                         <div className='inter font-extrabold text-[40px] text-[#001931]'>{apps.reviews}</div>
                    </div>
                   
                </div>
                <div className='md:m-10 mt-2'>
         <button className='btn inter gradient-bg2 inter text-xl p-6'      
             onClick={()=>handleClick(apps.id)}
            disabled={installed}>
                 {installed ? `Installed (${apps.size}MB)`  : 'Install'}
            </button>
         </div>
            </div>  
        </div>
        
        <div className='m-14'>
            {/* <Charts></Charts> */}
        </div>
        <div className='inter mb-2.5 font-bold text-3xl m-20'>
            Description
        </div>
        <div className='inter text-[#627382] m-20 mt-0'>
          {
            apps.description
          }
        </div>
    </div>
  )
}

export default AppDetails