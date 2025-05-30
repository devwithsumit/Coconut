import React from 'react'

const SeachBar = ({ searchText, setSearchText, placeholderText, handleChange = ()=>{}, handleSubmit }) => {
  // search logic can used at home page later

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      <div className="flex">
        <div className="relative w-full">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
              handleChange();
            }}
            type="search"
            id="search-dropdown"
            value={searchText}
            className="block p-2.5 w-full z-20 text-sm outline-none placeholder:text-center text-gray-900 bg-gray-50 rounded-lg border border-gray-300
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder={placeholderText}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>

  )
}

export default SeachBar
