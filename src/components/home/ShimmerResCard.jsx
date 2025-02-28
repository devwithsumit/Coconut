import React from 'react'

const ShimmerResCard = () => {
  return (
    <div className='bg-white w-34 h-50 sm:w-60 sm:h-60 sm:p-2 overflow-hidden'>
      <div className='w-full h-3/5 rounded-2xl shadow overflow-hidden'>
          <div className='w-full h-full bg-gray-200'></div>
      </div>
      <div className='w-full space-y-1 mt-2'>
        <h4 className='h-4 bg-gray-200 rounded-2xl capitalize overflow-hidden whitespace-nowrap'></h4>
        <h4 className='h-4 bg-gray-200 rounded-2xl capitalize overflow-hidden whitespace-nowrap'></h4>
        <h4 className='h-4 bg-gray-200 rounded-2xl capitalize overflow-hidden whitespace-nowrap'></h4>
      </div>
    </div>
  )
}

export default ShimmerResCard
