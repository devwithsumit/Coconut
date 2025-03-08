import React from 'react'

const ShimmerDishCard = () => {
    return (
        <div className="dish-card border-b-[1px] h-50 border-[#d1d5db] w-full flex gap-5 md:gap-10 pb-5">
            <div className="details-box w-5/9 space-y-[10px] py-4 px-3">
                <div className="circle bg-gray-300/60 w-8 aspect-square rounded-full"></div>
                <h4 className='w-full bg-gray-300/60 rounded h-6'></h4>
                <h4 className='w-full bg-gray-300/60 rounded h-6'></h4>
                <h4 className='w-full bg-gray-300/60 rounded h-6'></h4>
            </div>
            <div className="right-div w-4/9 relative pr-3">
                <div className="relative ml-auto aspect-square h-8/12 sm:h-10/12">
                    <div className="overflow-hidden rounded-2xl h-full w-full bg-gray-200">

                    </div>
                    <button className='absolute cursor-pointer px-8 sm:px-12 py-2 h-10 left-1/2 -bottom-5 -translate-x-1/2 text-lg bg-gray-100 rounded-lg border border-black/20 font-semibold text-green-600'>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShimmerDishCard
