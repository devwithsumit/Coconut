import React from 'react'
import { MdStars } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ShimmerResCard from './ShimmerResCard';

const ResCard = ({ resInfo }) => {
  const resObj = resInfo?.info || resInfo;
  return !resObj ? <ShimmerResCard /> : (
    <Link to={`/menu/` + resObj?.id} className='inline-block res-card'>
      <div className='bg-white w-34 h-50 sm:w-60 sm:h-60 sm:p-2 overflow-hidden hover:scale-90 transition-scale duration-200'>
        <div className='w-full h-3/5 rounded-2xl shadow overflow-hidden'>
          <img className='h-full w-full object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + resObj?.cloudinaryImageId} alt="resimg" />
        </div>
        <div className='w-full'>
          <h1 className='text-base md:text-lg whitespace-nowrap font-semibold'>{resObj?.name}</h1>
          <div className="flex items-center gap-1 text-sm whitespace-nowrap">
            <MdStars color='green' size={18} />
            <span>4.5</span>
            •
            <span className='font-medium'>{resObj.sla.slaString}</span>
          </div>
          <h4 className='w-[90%] text-sm md:text-[15px] text-gray-600/80 capitalize overflow-hidden whitespace-nowrap'>
            {resObj.cuisines.join(", ")}
          </h4>
          <h4 className='w-[90%] text-sm md:text-[14px] text-gray-600/70 capitalize overflow-hidden whitespace-nowrap'>
            {resObj.locality}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export const PromotedResCard = (ResCard) => {
  return (props) => {
    return (
      <div className='relative'>
        <div className="promo-tag text-sm absolute z-10 shadow bg-gray-800 text-white p-1">
          Promoted
        </div>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard
