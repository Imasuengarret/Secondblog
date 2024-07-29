import React from 'react'
import Banner from '../Component/Banner'
import BlogPage from '../Component/BlogPage'

function Home() {
  return (
    <div>
     <Banner/>
     <div className='max-w-7xl mx-auto'>
      <BlogPage/>
     </div>
    </div>
  )
}

export default Home