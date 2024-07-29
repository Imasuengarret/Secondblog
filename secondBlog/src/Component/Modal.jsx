import React from 'react'
import { Link } from 'react-router-dom'

function Modal({isOpen, onClose}) {
  return (
    <div className={`fixed top-20 left-0 w-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
        <div className='modal-container'>
            <div className='bg-blue-700 text-center p-4 h-72 lg:w-[300px] rounded shadow-md'>
                {/* modaL CONTENT */}
                <h2 className='text-xl font-semibold mb-4 mt-6  uppercase '>Please Login Here</h2>
                <form className='px-4'>
                    {/* email */}
                   <div className='mb-4'>
                   <input type="email" name='email' id='email' placeholder='example@gmail.com' className='w-full rounded-md border-[#e0e0e0] bg-white py-2.5 px-4 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                   </div>
                   <div className='mb-4'>
                   <input type="password" name='password' id='password' placeholder='Enter your password' className='w-full rounded-md border-[#e0e0e0] bg-white py-2.5 px-4 text-base font-medium text-[#6b7280] outline-none focus:border-[#6a64f1] focus:shadow-md' />
                   </div>
                   <div>
                    <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-2.5 px-6 text-base font-semibold text-white outline-none'>Login</button>
                   </div>
                </form>
                <Link></Link>
            </div>

        </div>

    </div>
  )
}

export default Modal