import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span> </p>
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb:28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600 '>Our Office</p>
          <p> 752020 jankia station <br />jankia, khordha ,Odisha</p>
          <p>Tel : (415) 555-0123 <br /> email:chandrashekharprasad@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600 '>Carrers at PRESCRIPTO</p>
          <p>Learnin more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover-bg-primary transition-all duration-300 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
