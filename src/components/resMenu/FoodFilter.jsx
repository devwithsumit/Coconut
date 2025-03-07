import React from 'react'

const FoodFilter = ({filter, setFilter}) => {

    return (
        <div className="filters mt-5 w-full py-3 flex gap-5">
            <label className="inline-flex items-center cursor-pointer">
                <input onChange={() => setFilter(prev => prev == 'veg' ? null : 'veg')} checked={filter == 'veg'}
                    id='veg-filter' type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Veg</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
                <input onChange={() => setFilter(prev => prev == 'non-veg' ? null : 'non-veg')} checked={filter == 'non-veg'}
                    id='non-veg-filter' type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Non Veg</span>
            </label>
        </div>
    )
}

export default FoodFilter
