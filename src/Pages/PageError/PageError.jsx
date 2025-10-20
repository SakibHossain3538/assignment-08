import React from 'react'
import error from '../../../assets/error.png'
import { Link } from 'react-router'
function PageError() {
  return (
    <div className='flex flex-col mt-[160px]'>
        <div className='mx-auto'>
            <img src={error} alt="" />
        </div>
        <div>
            
          <h1 className='text-5xl text-[#001931] inter text-center font-bold py-6'>
         Oops, page not found!</h1>
           <p className='text-3xl inter text-center text-[#627382]'>
         The page you are looking for is not available.</p>
 
        </div>
        <div className='mx-auto my-12'>
            <Link to='/'><a className="btn inter gradient-bg inter p-6">Go Back!</a></Link>
        </div>
    </div>
  )
}

export default PageError