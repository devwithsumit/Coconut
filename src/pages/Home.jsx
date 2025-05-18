import React, { useEffect, useState } from 'react'
import SearchBar from '../components/home/SearchBar';
import axios from 'axios';
import ResCard, { PromotedResCard } from '../components/home/resCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from '../redux/actions/restaurantActions';
import Loading from './Loading';

// import ShimmerResCard from '../components/home/ShimmerResCard';
// import useRestaurantInfo from '../utils/useRestaurantInfo';

const Home = () => {
    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    // extracting data as sections
    const { loading, data: sections } = useSelector((state) => state.home);

    // ResCard with promoted badge
    const EnhancedCard = PromotedResCard(ResCard);

    return (
        <div className='px-5 py-5 md:px-10 h-full'>
            <div className="search-bar-area w-full sm:px-20 md:px-20">
                <SearchBar placeholderText={'Search for Restaurants'} searchText={searchText} setSearchText={setSearchText} />
            </div>
            {loading && <Loading />}

            <div className='md:px-20'>
                {sections?.length > 0 && (
                    sections.map((section, index) => (
                        <div key={index} className='section w-full my-10 border-b border-black/30 pb-10'>
                            <h1 className='header text-start my-1 py-2 font-bold text-xl md:text-2xl'>
                                {section.card?.card?.header?.title || "Restaurants with online food delivery in Bhopal"}
                            </h1>
                            <div className={`res-items-wrapper py-2 w-full flex justify-between xs:bg-black gap-2 md:gap-5 ${/*reponsive logic */ index != 2 && sections.length != 1 ? "overflow-x-auto" : 'flex-wrap'}`}>
                                {
                                    index == 0 && sections.length != 1 ? section.card?.card?.imageGridCards?.info.map((item) => (
                                        <div key={item.id} className='suggestion-card flex-shrink-0 h-50 cursor-pointer'>
                                            <div className='w-full h-full'>
                                                <img className='h-full w-full object-cover' src={import.meta.env.VITE_IMG_BASE_URL + item.imageId} alt="" />
                                            </div>
                                        </div>
                                    )) : section.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => (
                                        <div key={restaurant.info.id} className='res-card-wrapper flex-shrink-0 mt-3'>
                                            {!restaurant.info.promoted ?
                                                <ResCard key={restaurant.info.id} resInfo={restaurant} /> :
                                                <EnhancedCard key={restaurant.info.id} resInfo={restaurant} />
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                )}
            </div>
            {/* {resList.length == 0 ? (
                Array.from({ length: 8 }).map((_, index) => (
                    <ShimmerResCard key={`shimmer-${index}`} />
                ))
            ) : } */}
        </div>
    )
}

export default Home
