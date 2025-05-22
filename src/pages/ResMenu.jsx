import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom'
import SearchBar from '../components/home/SearchBar';
import ShimmerDishCard from '../components/resMenu/ShimmerDishCard';
import CategoryCard from '../components/resMenu/CategoryCard';
import ResInfoCard from '../components/resMenu/ResInfoCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadMenuByResId } from '../redux/actions/restaurantActions';
import { useLocationContext } from '../context/LocationContext';

const ResMenu = () => {

    // restaurant id concat it with the base api to fetch res data
    const { id } = useParams();

    //To toggle the visible catergory indices
    const [visibleIndicesSet, setVisibleIndicesSet] = useState(new Set([0]));

    // Storing the id's of each item added in the cart
    const [cartItems, setCartItems] = useState([]);

    const dispatch = useDispatch();
    // Main categories List and Res Card Info Obj
    const { categories: categoriesList, restaurantInfo: resObj, loading } = useSelector((state) => state.menu);

    //to send coordinates while dispatching loadResData();
    const { location: loc } = useLocationContext();

    //for extracting the id's for each cart items
    const cartItemsData = useSelector((state) => state.cart.cartItems);

    // for opening and closing categories
    const handleToggle = (index) => {
        setVisibleIndicesSet(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        })
    }

    useEffect(() => {
        //extract just id and the quantity
        const extractedItems = cartItemsData.map((item) => ({ id: item.id, quantity: item.quantity }));
        setCartItems(extractedItems);
    }, [cartItemsData])

    useEffect(() => {
        // loc is extracted from useLocationContext hook
        const { lat, lng } = loc;
        if (categoriesList.length == 0 || id !== resObj.id) {
            dispatch(loadMenuByResId({
                resId: id, // this indentification is neccessary when passing several arguements but can be passes with any name when only one parameter is ther
                lat,
                lng
            }));
        }
    }, [categoriesList, resObj, dispatch, id])

    return (
        <div className='w-full min-h-screen'>
            <div className="res-details w-full px-5 md:px-50">
                <Link to={'/'}>
                    <MdArrowBack size={25} />
                </Link>
                <h1 className='text-3xl font-semibold my-3'>{resObj?.name || "No name"}</h1>
                <ResInfoCard resObj={resObj} />
            </div>
            <div className="ResMenu w-full px-5  pb-10 md:px-50 mt-10 md:mt-14">
                <h1 className='menu-heading py-2 md:text-xl mx-auto w-fit flex items-center gap-2'>
                    <div className="w-10 h-[1.5px] mt-1 bg-black/60"></div>
                    Menu
                    <div className="w-10 h-[1.5px] mt-1 bg-black/60"></div>
                </h1>
                <div className="search-bar-area md:w-full">
                    <SearchBar placeholderText={'Search for Dishes'} />
                </div>
                <div className="filters mt-5 w-full py-3 flex gap-5">
                    <label className="inline-flex items-center cursor-pointer">
                        <input id='caterogy-filter' type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Veg</span>
                    </label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input id='caterogy-filter' type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Non Veg</span>
                    </label>
                </div>
                <div className={`category-list ${categoriesList.length > 0 && 'bg-gray-200/80'} w-full space-y-3 sm:space-y-5 py-5`}>
                    {categoriesList?.map((category, index) => (
                        <CategoryCard
                            cartItems={cartItems}
                            key={category.card?.card?.categoryId}
                            category={category}
                            isOpen={visibleIndicesSet.has(index)}
                            handleToggle={() => handleToggle(index)}
                        />
                    ))}
                    {categoriesList?.length == 0 && (
                        <div>
                            <div className='shimmer-category-header w-full h-15 mt-2'></div>
                            <div className="dish-card-list space-y-5 py-3 w-full">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <ShimmerDishCard key={`dish-shimmer-${index}`} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResMenu
