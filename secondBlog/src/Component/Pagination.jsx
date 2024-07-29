import React from 'react'

function Pagination({onPageChange, currentPage, blogs, PageSize}) {
    const totalPages = Math.ceil(blogs.length / PageSize);
    const renderPaginationlink =()=>{
        return Array.from({length: totalPages},(_, i) => i + 1).map((pageNumber) =>(
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href="#" onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-8'>
        <li>
            <button onClick={()=>onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        <div className='flex'>{renderPaginationlink()}</div>
        <li>
            <button onClick={()=>onPageChange(currentPage +1)} disabled={currentPage === totalPages}>Next</button>
        </li>
    </ul>
  )
}

export default Pagination