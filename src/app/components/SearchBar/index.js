import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {
    const router = useRouter();

    return (
        <>
            <div className='flex justify-end w-full mt-0' onClick={() => { router.push('/pages/SearchItems') }}>
                <form className="flex mt-4  mr-4 items-center" onClick={(e) => e.stopPropagation()}>
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <button type="button" className="bg-gray-50 border text-gray-400 w-full border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-4 pr-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={() => { router.push('/pages/SearchItems') }}>
                        Search Item name...
                    </button>
                    <div className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </div>
                </form>
            </div>

        </>

    )
}

export default SearchBar