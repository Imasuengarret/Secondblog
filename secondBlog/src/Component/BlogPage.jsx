import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

function BlogPage() {
    const [blogs, setBlogs] =useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const PageSize =12;      /*blogs per pag*/
    const [selectedCategory, setSelectedr] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(()=>{
      async function fetchBlogs (){
        let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${PageSize}`;

        // filtered by categoty
        if (selectedCategory) {
          url += `&category = ${selectedCategory}`
        }

        const response = await fetch(url)
        const data = await response.json();
        setBlogs(data);
      }
      fetchBlogs();

    },[currentPage, PageSize, selectedCategory]);

    const handlePageChange =(pageNumber)=>{
            setCurrentPage(pageNumber);
    }

    // page changing button

    const handleCategoryChange =(category)=>{
      selectedCategory(category);
      setCurrentPage(1)
      setActiveCategory(category);

    }

  return (
    <div>
      {/* Category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory}/>
      </div>

      {/* blogcards0 */}
      <div className='flex flex-col lg:flex-row'>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} PageSize={PageSize} />
        {/* SideBAr component */}
        <div className='ml-10 lg:mr-16'>
          <SideBar/>
        </div>

      </div>

      {/* pagination page */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} PageSize={PageSize}/>
      </div>


    </div>
  )
}

export default BlogPage
