import React from 'react'

const ProfileCard = ({ userObj }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="aspect-square h-24 mb-3 rounded-full shadow-lg object-cover" src={userObj?.avatar_url || './defaultProfile.png'} alt={userObj?.name || "No Name"} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{userObj?.name || "No Name"}</h5>
                <span className="text-sm text-gray-500 ">Mern Developer</span>
                <h4 className="mb-1 text-lg font-medium text-gray-900 "><span className='text-gray-500 text-sm'>Location</span> : {userObj?.location}</h4>
                <div className="flex mt-4 md:mt-6">
                    <a href={userObj?.html_url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Visit Github</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Message</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
