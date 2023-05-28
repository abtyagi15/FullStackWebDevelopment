import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='flex flex-col font-bold text-2xl items-center justify-center w-full'>
        <div className='spinner'></div>
        <div>Loading</div>
    </div>
  )
}

export default Spinner