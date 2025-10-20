import React from 'react'
import appError from '../../../assets/appError.png'
import { Link } from 'react-router';
function AppError() {
  return (
   <div className='flex flex-col mt-[160px]'>
          <div className='mx-auto'>
              <img src={appError} alt="" />
          </div>
          <div>
              
            <h1 className='text-5xl text-[#001931] inter text-center font-bold py-6'>
         OPPS!! APP NOT FOUND</h1>
             <p className='text-3xl inter text-center text-[#627382]'>
         The App you are requesting is not found on our system.  please try another apps</p>
   
          </div>
          <div className='mx-auto my-12'>
             <Link to='/apps'> <a className="btn inter gradient-bg inter p-6">Go Back!</a></Link>
          </div>
      </div>
  )
}

export default AppError;