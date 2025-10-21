import React from 'react'
import { Link, useLoaderData,useNavigate} from 'react-router'
import { useState,useEffect } from 'react'
import iconDownloads from '../../../assets/iconDownloads.png'
import iconRatings from '../../../assets/iconRatings.png'
import logo from '../../../assets/logo.png'
function Apps() {
  const data=useLoaderData()
  const [query, setQuery] = useState('')
  const [filteredApps, setFilteredApps] = useState(data);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = data.filter((app) =>
        app.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    },200);

    return () => clearTimeout(timer);
  }, [query, data]);

  return (
    <div className='mt-[80px]'>
      <div>
          <h1 className='text-5xl text-[#001931] inter text-center font-bold py-6'>Our All Applications</h1>
           <p className='text-3xl inter text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className='flex flex-row justify-between mt-[40px] ml-[40px] mr-[40px]'> 
     <div className='inter font-semibold text-2xl '>({filteredApps.length}) Apps Found</div>           
      <input
        type="text"
         value={query}
          onChange={(e)=>setQuery(e.target.value)}
        placeholder='Search Apps'
        className=" p-2 border border-gray-300 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-blue-500 w-[300px]"
      />
      </div>
  <div>
    {loading ? (
        <div className="flex flex-col justify-center items-center mt-20">
          <img
            src={logo}
            alt="Loading..."
            className="h-16 w-16 animate-spin"
          />
          <div className='inter mt-6 text-3xl font-medium'> Your App Will Ready Soon</div>
          <div className='inter mt-3 text-2xl font-semibold'>Please Wait</div>
        </div>
      ):
    filteredApps.length === 0 ? (
        <div className='text-center text-5xl text-gray-500 inter mt-[100px] h-[300px]'>
           No Apps Available
           <div className='mt-5 text-3xl'>Search Again</div>
           <div className='text-2xl'>App Deck Will Serve You</div>
        </div>
        
      ) : (
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 
          2xl:grid-cols-4 gap-10 mt-[70px]'
        >
      {filteredApps.map((item, index) => (
        <Link to={`/apps/${item.id}`}><div key={index} className="card bg-base-100 w-96 shadow-sm mx-auto
          transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
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
        </Link>
      ))}
       </div>
      )}
      </div>
    </div>
      
  )
}

export default Apps