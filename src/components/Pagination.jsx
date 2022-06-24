import React, { useRef } from 'react'

const Pagination = ({arrayPages, page, setPage, quantityPages}) => {

  const prevPage = () => {
    if(page - 1 === 0){
      setPage(quantityPages)
    } else {
      setPage(page - 1)
    }
  }

  const nextPage = () => {
    if(page + 1 > quantityPages){
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }

  const changePageTo = num => setPage(num)

  return (
    <div className='pagination-container mg-b20'>
      <button className='pagination-prev-next' onClick={prevPage}>&#60;</button>
      <ul className='pagination-number-container'>
        {
          arrayPages?.map(num => (
            <li 
              key={num} 
              className={page === num ? `page-number page-active`: `page-number`} 
              onClick={() => changePageTo(num)}
            >{num}</li>
          ))
        }
      </ul>
      <button onClick={nextPage} className='pagination-prev-next'>&#62;</button>
    </div>
  )
}

export default Pagination