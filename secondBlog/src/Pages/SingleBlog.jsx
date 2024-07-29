import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../Component/SideBar';

function SingleBlog() {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0]

  return (
    <div className='items-center justify-center'>
        <div className='py-28 bg-black text-white px-4 text-center'>
      <h2 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

      {/* blog detials */}
      <div className='mt-10 max-w-3xl mx-auto my-1 flex flex-col md:flex-row gap-10 '>

        <div className='lg:w3/4 mx-auto'>
            <img src={image} alt=""  className='w-full mx-auto rounded '/>
            <div>
            <h2 className='text-xl first-letter:mt-5 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
        <p className='mb-3 text-gray-600'> <FaUser className='inline-flex  items-center mr-2'/> {author} | {published_date}</p>
        <p className='mb-3 text-gray-600'> <FaClock className='inline-flex  items-center mr-2'/> {reading_time}</p>
        <p className='text-base text-gray-500 mb-6'>{content}</p>
        <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorem minima optio reiciendis obcaecati sequi amet aspernatur assumenda beatae,
                  suscipit et officiis sint quia quasi dolor fuga mollitia nostrum eos? Vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit maxime
                     sed eum deleniti! Facilis, sint a sapiente necessitatibus fugit molestiae vero 
                     pariatur nesciunt non odit aspernatur sit optio nemo.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dolorem, dignissimos
                 ullam iusto optio nam officiis! Voluptate, expedita nisi! Soluta, repudiandae eum consectetur
                  enim nostrum tempore laboriosam architecto aspernatur dolore?</p>
        </div>
            </div>
        </div>
        <div className='lg:w-full'>
            <SideBar/>
        </div>
        
      </div>
    </div>
  )
}

export default SingleBlog
SingleBlog