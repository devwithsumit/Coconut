import React from 'react'

const OfflinePage = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <h1 className='font-semibold text-3xl'>Sorry You are Offline
            <div className="w-20 aspect-ratio-square inline-block -mb-5">
                <img className='h-full w-full object-cover' src="/image.png" alt="image here" />
            </div>
            </h1>
        </div>
    )
}

export default OfflinePage;
