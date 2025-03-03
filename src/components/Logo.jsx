import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ className = 'w-30' }) => {
    // https://www.swiggy.com/corporate/wp-content/uploads/2024/10/swiggy-logo.webp
    return (
        <Link to='/' className={`p-1 ${className}`}>
            <img className='h-full w-full object-cover' src='./logo.png' />
        </Link>
    )
}

export default Logo
