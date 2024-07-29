import React from 'react'
import BlogPage from '../Component/BlogPage'

function Blog() {
  return (
    <div>
      <div className='py-28 bg-black text-white px-4 text-center'>
        <h2 className='text-3xl lg:text-5xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>

       {/* All blogs container */}
       <div className='max-w-7xl mx-auto'>
        <BlogPage/>
       </div>

    </div>
  )
}

export default Blog
