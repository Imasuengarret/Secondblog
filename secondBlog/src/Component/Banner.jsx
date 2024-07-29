import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

function Banner() {
  return (
    <div className='px-4 py-24 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readers who are passionate about 
            sharing their stories and ideas. We offer everything you need to get started, 
            from helpful tips and tutoruals, kindly reach out to us via our email.</p>
            <div>
                <a href="/" className='font-bold hover:text-orange-500 inline-flex items-center py-1'>Learn more <FaArrowRight className='mt-1 ml-2 '/></a>
            </div>
      </div>
    </div>
  )
}

export default Banner