import React from 'react'
import iconDownloads from '../../../assets/iconDownloads.png'
import iconRatings from '../../../assets/iconRatings.png'

function Card({ data }) {
  return (
    <div className='mx-auto flex flex-col items-center'>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 
2xl:grid-cols-4 gap-10 mt-[70px]">


      {data.slice(0,8).map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-sm mx-auto">
          <figure className="m-4">
            <img src={item.image} alt={item.title} className='rounded-xl shadow-sm border-1 border-gray-200'/>
          </figure>
          <div className="card-body inter text-2xl font-medium">
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge rounded-xl bg-[#F1F5E8] text-[#00D390] inter text-2xl m-5 p-5 flex items-center gap-2">
                <img src={iconDownloads} alt="downloads" className="h-5 w-5" />
                {item.downloads}
              </div>
              <div className="badge rounded-xl bg-[#FFF0E1] text-[#FF8811] inter text-2xl m-5 p-5 flex items-center gap-2">
                <img src={iconRatings} alt="ratings" className="h-5 w-5" />
                {item.ratingAvg}
              </div>
            </div>
          </div>
        </div>
      ))} </div>
     <div><button className='inter px-4 py-1 rounded-xl gradient-bg font-bold mt-[70px]'> Show All</button>
     </div>
     </div>
  
  )
}

export default Card
