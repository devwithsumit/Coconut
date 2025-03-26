import React, { useEffect, useRef, useState } from 'react'
import SearchBar from '../components/home/SearchBar';
import ResCard, { PromotedResCard } from '../components/home/resCard';
import { useSelector } from 'react-redux';
import Loading from './Loading';
import SearchPanel from './SearchPanel';
import { searchedRes } from '../utils/searchedRes';

// import ShimmerResCard from '../components/home/ShimmerResCard';
// import useRestaurantInfo from '../utils/useRestaurantInfo';

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [searchBarActive, setSearchBarActive] = useState(false);
    const searchAreaRef = useRef(null);
    const [searchList, setSearchList] = useState([]);
    // extracting data as sections
    const { loading, data: sections } = useSelector((state) => state.home);

    const data = useSelector(state => state.home.data);
    //Search Logic
    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchedSearchList = searchedRes(data, searchText);
        setSearchList(fetchedSearchList)
        // console.log(searchText);
    }
    // const handleChange = (e) => {
    // }
    // useEffect(() => {
    //     if (searchText.length === 0) {
    //         setSearchBarActive(false);
    //     }
    // }, [searchText])

    // ResCard with promoted badge
    const EnhancedCard = PromotedResCard(ResCard);

    // Close panel when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            // If clicked element is NOT inside searchAreaRef, close panel
            if (searchAreaRef.current && !searchAreaRef.current.contains(event.target)) {
                setSearchBarActive(false);
            }
        }
        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className='px-4 py-5 md:px-10 h-full relative'>
            <div className="search-area" ref={searchAreaRef}>
                <div className="search-bar-area w-full sm:px-20 md:px-20">
                    <div
                        onClick={() => setSearchBarActive(true)}
                        className="search-bar-wrapper"
                    >
                        <SearchBar placeholderText={'Search for Restaurants'} searchText={searchText} setSearchText={setSearchText} handleSubmit={handleSubmit} />
                    </div>
                </div>
                {searchBarActive && (
                    <div className="search-section-wrapper bg-gray-100 z-[999] p-2 sm:px-20 absolute shadow w-[90%] left-1/2 -translate-x-1/2 ">
                        <SearchPanel searchList={searchList} />
                    </div>
                )}
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
