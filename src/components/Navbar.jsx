import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext';
import Logo from './Logo';

const Navbar = () => {
    const data = useSelector((state) => state.cart.cartItems);
    const { user, login, logout } = useUser();

    // const handleLogin = () => {
    //     if (user === null) {
    //         login({
    //             name: 'Sumit',
    //             location: 'Bhopal',
    //             email: 'example@email.com',
    //         });
    //     } else {
    //         logout();
    //     }
    // }
    return (
        <div className='w-full max-w-screen fixed top-0 left-0 z-[100] px-4 py-2 md:px-20 flex items-center justify-between'>
            <Logo className='w-24 sm:w-30'/>
            <div className='nav-items flex items-center gap-1 md:gap-10 text-gray-700/80'>
                <Link to='/' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 hidden sm:block' href=''>Home</Link>
                <Link to='/cart'
                    className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border relative flex items-center gap-1 px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200' href=''>
                    <IoCartOutline />
                    Cart <span className='whitespace-nowrap overflow-x-hidden w-5 text-orange-600 text-right font-medium'>{data?.length || 0}</span>
                </Link>
                <Link to='/sign'
                    className='backdrop-brightness-110 whitespace-nowrap dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 ' href=''>
                    {user ? 'Logout' : 'Sign In'}
                </Link>
                <Link to='/about' className='backdrop-brightness-110 dark:text-white backdrop-blur-xs backdrop-opacity-95 border px-3 py-1/2 rounded hover:scale-95 transition-scale duration-200 hidden sm:block' href=''>About</Link>
            </div>
        </div>
    )
}

export default Navbar
