import React, { useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,totalPages,handlePageChange} = useContext(AppContext);
  

  return (
    <div className='flex justify-center fixed bottom-0 bg-white w-full 
                    items-center border-2 py-3'>
      <div className='flex justify-between items-center  w-11/12 max-w-[650px]'>
        <div className='flex gap-3'>
        { page!==1 &&
          <button  onClick={() => handlePageChange(page-1)}
          className='border-2 px-4 py-1 rounded-md'>
            Previous
          </button>
        }
        {page!== totalPages &&
          <button onClick={() => handlePageChange(page+1)} 
                  className='border-2 px-4 py-1 rounded-md'>
            Next
          </button>
        }
      </div>
      <div className='font-bold'>
        page {page} of {totalPages}
      </div>
      </div>
      
    </div>
  )
}

export default Pagination