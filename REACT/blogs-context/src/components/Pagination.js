import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,totalPages,handlePageChange} = useContext(AppContext);
  

  return (
    <div className='flex justify-between'>
      <div className='flex gap-3'>
        { page!==1 &&
          <button onClick={() => handlePageChange(page-1)}>
            Previous
          </button>
        }
        {page!== totalPages &&
          <button onClick={() => handlePageChange(page+1)}>
            Next
          </button>
        }
      </div>
      <div>
        page {page} of {totalPages}
      </div>
    </div>
  )
}

export default Pagination