import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const data = useSelector((state) => state.cart.cartItems);
    return (
        <div className='w-full fixed top-0 left-0 z-[100] px-5 py-2 md:px-20 flex items-center justify-between'>
            <Link to='/' className='p-1 w-25'>
                <img className='h-full w-full object-cover' src='https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp' />
            </Link>
            <div className='nav-items flex items-center gap-3 md:gap-10 text-gray-700/80'>
                <Link to='/' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 hidden sm:block' href=''>Home</Link>
                <Link to='/cart' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border relative flex items-center gap-1 px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200' href=''>
                    <IoCartOutline />
                    Cart <span className='whitespace-nowrap overflow-x-hidden w-5 text-orange-600 text-right font-medium'>{data?.length || 0}</span>
                </Link>
                <Link to='/sign' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 ' href=''>Sign In</Link>
                <Link to='/about' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 hidden sm:block' href=''>About</Link>
            </div>
        </div>
    )
}

export default Navbar
