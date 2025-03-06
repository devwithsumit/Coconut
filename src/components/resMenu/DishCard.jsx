import React, { useState } from 'react'
import ShimmerDishCard from './ShimmerDishCard'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

const DishCard = ({ quantity, dishObj }) => {
    const dispatch = useDispatch();

    return !dishObj ? <ShimmerDishCard /> : (
        <div className="dish-card not-last:border-b-[1px] h-50 border-[#d1d5db] w-full flex gap-5 md:gap-10 pb-5">
            <div className="details-box w-5/9 space-y-1">
                <h1 className='text-xl'>{dishObj?.itemAttribute?.vegClassifier == 'NONVEG' ? '🔴' : '🟢'}</h1>
                <h1 className='text-lg md:text-xl opacity-80 font-semibold'>{dishObj?.name} - {dishObj?.itemAttribute?.vegClassifier == 'NONVEG' ? 'Non Veg' : 'Veg'}</h1>
                <h2 className='text-sm font-semibold'>
                    <span className='original-price relative opacity-60 mr-2'>
                        ₹ {Math.floor((dishObj?.price || dishObj?.defaultPrice) / 100 * 1.3)}
                    </span>
                    <span>
                        {`₹ ${(dishObj?.price || dishObj?.defaultPrice) / 100}`} 🔖
                    </span>
                </h2>
                <div className="dish-details w-full overflow-hidden h-10 sm:h-12">
                    <h3 className='opacity-60 w-full text-sm sm:text-base'>
                        {dishObj?.description || "No Description Available"}
                    </h3>
                </div>
            </div>
            <div className="right-div w-4/9 relative">
                <div className="relative ml-auto aspect-square h-8/12 sm:h-10/12">
                    <div className="overflow-hidden rounded-2xl h-full w-full">
                        <img className='w-full h-full object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${dishObj?.imageId}`} alt="" />
                    </div>
                    {quantity > 0 ? (
                        <div className='absolute w-32 flex gap-1 sm:gap-2 overflow-hidden items-center justify-between cursor-pointer left-1/2 -bottom-5 -translate-x-1/2 text-lg bg-white rounded-lg border border-black/30 font-semibold text-green-600'>
                            <button className='cursor-pointer px-2 sm:px-3 h-full hover:bg-gray-200/70 py-3'
                                onClick={() => dispatch(removeItem(dishObj?.id))}
                            >
                                <MdRemove />
                            </button>
                            <div className='w-6 flex items-center justify-center'>{quantity || 0}</div>
                            <button onClick={() => dispatch(addItem(dishObj))}
                                className='cursor-pointer px-2 sm:px-3 h-full hover:bg-gray-200/70 py-3'>
                                <MdAdd />
                            </button>
                        </div>
                    ) : (
                        <button className='absolute w-32 hover:bg-gray-100 px-11 py-[7px] cursor-pointer left-1/2 -bottom-5 -translate-x-1/2 text-lg bg-white rounded-lg border border-black/30 font-semibold text-green-600'
                            onClick={() => dispatch(addItem(dishObj))}>
                            Add
                        </button>
                    )}


                </div>
            </div>
        </div>
    )
}

export default DishCard
