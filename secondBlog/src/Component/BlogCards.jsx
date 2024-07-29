import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function BlogCards({blogs, currentPage, selectedCategory, PageSize}) {
    const filteredBlogs = blogs.filter((blogs)=> !selectedCategory || blogs.category===selectedCategory).slice((currentPage -1)*PageSize, currentPage*PageSize);
  return (
    <div className=' lg:ml-20 grid mx-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filteredBlogs.map((blog)=>(
          <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <img src={blog.image} alt="" className='w-full' />
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600'>{blog.title}</h3>
            <p className='mb-2 text-sm text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
            <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>

          </Link>
        ))
      }
    </div>
  )
}

export default BlogCards
