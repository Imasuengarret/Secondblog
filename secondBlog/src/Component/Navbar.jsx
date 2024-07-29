import React, { useState } from 'react'

import { FaBars, FaFacebook, FaInbox, FaInstagram, FaTwitter, FaXmark } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import Modal from './Modal';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismodalopen, setModalOpen] =useState(false)

  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  

    // nav items
    const navitems = [
        { path: "/", link: "Home"},
        { path: "/services", link: "Services"},
        { path: "/about", link: "About"},
        { path: "blog", link: "Blog"},
        { path: "/contact", link: "Contact"}
    ]

    // modal detials

    const openModal = ()=>{
      setIsMenuOpen(true);
    }
    const closeModal = () =>{
      setModalOpen(!false);
    }

  return (
    <div className='bg-black text-white fixed top-0 right-0 left-0'>
      <nav className='px-5 py-4 max-w-5xl mx-auto flex justify-between'>
        <a href="/" className=' text-xl font-bold text-white'>Garret<span className=' text-orange-500'>BLOG</span></a>

        {/* navitems fot lg devices*/}

        <ul className='md:flex gap-12 text-lg hidden'>
          {
            navitems.map(({path,link}) => <li className=' text-white' key={path}>
              <NavLink  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }  to={path}>{link}</NavLink>
            </li>)

          }
        </ul>
        {/* menu icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
          <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
          <a href="https://www.instagram.com/_iamgarret?igsh=bGozb3BjeXplejdy&utm_source=qr" className='hover:text-orange-500'><FaInstagram/></a>
          <button onClick={openModal} className='bg-orange-500 px-4 py-2 font-medium 
          rounded
           hover:bg-white hover:text-orange-500 transition-all
            duration-200 ease-in'>Login</button> 
        </div>
          {/* modal component is here */}
        <Modal isOpen={isMenuOpen} onClose={closeModal}/>
        
        {/* mobile menu icon, display on mobile screen */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaXmark/> : <FaBars className='w-5 h-5'/>
            }
            </button>
        </div>
      </nav>

      {/* menu items only for mobile */}
      <div>
      <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-white ${isMenuOpen? "fixed top-0 left-0 transition-all ease-out duration-150" : "hidden"}`}>
          {
            navitems.map(({path,link}) => <li className=' text-black' key={path}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>)

          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar
