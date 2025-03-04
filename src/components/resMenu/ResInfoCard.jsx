import React from 'react'
import { MdStars } from 'react-icons/md'

const ResInfoCard = ({resObj}) => {
    return (
        <div className="res-info-card rounded-2xl border border-black/30 overflow-hidden shadow-md">
            <div className="w-full h-1/2 space-y-1 p-5">
                <h4 className='rating-delivery flex items-center font-bold gap-1'>
                    <MdStars color='green' size={'20px'} />
                    <span>{resObj?.avgRating || 0.0}</span>
                    <span className='font-semibold text-sm'>{`(${resObj?.totalRatings || 0} ratings)`}</span>
                    •
                    <span className='flex-grow overflow-hidden'>{resObj?.costForTwoMessage || "Cost for Two"}</span>
                </h4>
                <h4 className='text-[#FF5201] font-semibold underline text-sm'>{resObj?.cuisines.join(", ") || "cuisines"}</h4>
                <div className="delivery-details w-full flex items-center">
                    <div className="route-line ml-1 mr-2 relative w-[2px] h-8 bg-[#aaaaaa]"></div>
                    <div className='flex-grow'>
                        <h4 className='w-[95%] whitespace-nowrap overflow-hidden'>
                            <span className='font-semibold mr-2 opacity-100'>Outlet </span>
                            <span className='opacity-60'>
                                {resObj?.locality || "Locality"}
                            </span>
                        </h4>
                        <h4 className='w-[95%] whitespace-nowrap overflow-hidden'>
                            <span className='font-semibold mr-2 opacity-100'>{resObj?.sla?.slaString?.toLowerCase() || "10-15mins"}</span>
                            <span className='opacity-60'>
                                {resObj?.city || "Bhopal"}
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="offer-div font-semibold text-[#ff5201]/90 border-t border-black/30 w-full p-4 px-5 bg-gradient-to-r from-gray-100 via-gray-100 to-red-100">
                OFFERS | {resObj?.aggregatedDiscountInfo.header || "N/A"}
            </div>
        </div>
    )
}

export default ResInfoCard
