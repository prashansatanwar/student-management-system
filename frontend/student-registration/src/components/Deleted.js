import React from 'react'

const Deleted = ({isDeleted}) => {
  return (
    <div className={isDeleted 
                    ? ' fixed backdrop-blur-lg w-full h-1/2 tracking-wider text-sm'
                    :' hidden '}>
        <div className='text-xl uppercase text-red-700 font-bold rounded w-full p-2 px-4 rounded-2xl'>Student record deleted!</div>
        
    </div>
  )
}

export default Deleted