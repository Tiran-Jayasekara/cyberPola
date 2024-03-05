'use client'
import React, { useEffect, useRef, useState } from 'react'
import ItemService from '@/service/itemService';
import { useRouter } from 'next/navigation';

const SearchItems = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        // Focus on the input field when the component mounts
        inputRef.current.focus();
    }, []);

    const [items, setItems] = useState();
    const { getItemsBySearch } = ItemService();
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");
    const [searchInput, setSearchInput] = useState()


    const handleChange = (event) => {
        setSearch(event.target.value);
        setSearchInput(false);
    };

    const getSearchItemData = async () => {
        if (search == "") {
            setSearchInput(true);

        } else {

            const searchData = await getItemsBySearch(search);
            console.log(searchData);
            if (searchData && searchData.data && searchData.data.items) {
                setItems(searchData.data.items);
            } else {
                setMessage(searchData.data.message);
                setItems("");
            }
        }

    }

    const [showItemData, setShowItemData] = useState();
    const [showItemDataModel, setShowItemDataModel] = useState(false);
    const [ShowItemDataImg, setShowItemDataImg] = useState();

    const router = useRouter();


    return (
        <>
            <div className='flex justify-center w-full mt-2'>
                <div className="flex mt-4 items-center">

                    <button onClick={() => { router.back() }} className="pr-4 ml-0 text-sm font-medium text-blue-600">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {/* You can put any content here that indicates the input is disabled */}
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            id="simple-search"
                            className={`bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${searchInput ? 'border-red-500' : 'border-stone-400'}`}
                            placeholder="Search Item name..."
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button onClick={getSearchItemData} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>


            <div className=' mt-10 md:mx-10 h-full'>
                <div className='w-full flex flex-wrap mt-4'>
                    {items ? items.map((data, index) => (
                        <div key={index} onClick={() => { setShowItemData(data), setShowItemDataModel(true), setShowItemDataImg(data.img.img1) }} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <div className='relative'>
                                {data.availability ?
                                    <>

                                    </>
                                    :
                                    <div className='absolute top-0 right-0'>
                                        <img className='w-14' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />
                                        {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                                    </div>
                                }
                                <img className="p-2 rounded-t-lg md:h-52 h-32 w-full" src={data.img.img1} alt="product image" />
                            </div>
                            <div className="px-5 pb-5 text-center justify-center items-center text-sm md:text-xl playfair-font">
                                <div>
                                    <h5 className=" font-semibold uppercase tracking-tight text-gray-900 dark:text-white">{data.itemName}</h5>
                                    <h5 className="mt-6 font-semibold tracking-tight text-red-900 dark:text-white">{data.price}</h5>
                                </div>
                            </div>
                        </div>

                    )) : <>
                        <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>{message}</h2></div>
                    </>}
                </div>
            </div>



            {showItemDataModel ? (
                <>
                    {showItemData ? <>
                        <div className="justify-center items-center overflow-x-hidden md:w-full w-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4">

                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none mt-10 md:mt-10">
                                    {/*header*/}

                                    <div className="flex flex-col items-center justify-between p-4 w-full ">
                                        <h3 className="w-full md:text-2xl text-xl text-center mt-4 font-semibold justify-center items-center md:ml-0">
                                            {showItemData.itemName}
                                        </h3>

                                        {/* Desktop Responsiveness */}
                                        <div className="md:flex flex-wrap w-full items-center justify-center hidden relative">
                                            {showItemData.availability ?
                                                <>

                                                </>
                                                :

                                                <div className='absolute  top-0 right-4'>
                                                    {/* Sold Out Image Deskto Responce */}
                                                    <img className='w-20' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />

                                                </div>
                                            }

                                            <div className="grid gap-4">
                                                <div>
                                                    <img className="flex h-96 items-center mx-auto rounded-lg " src={ShowItemDataImg} alt="" />
                                                </div>
                                                <div className="grid grid-cols-3 justify-center mx-auto gap-2 w-full">
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.img.img1) }}
                                                            src={showItemData.img.img1}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.img.img2) }}
                                                            src={showItemData.img.img2}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.img.img3) }}
                                                            src={showItemData.img.img3}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Mobile Responsiveness */}
                                    <div className=" md:hidden flex flex-wrap w-full items-center justify-center relative">
                                        {showItemData.availability ?
                                            <>

                                            </>
                                            :
                                            <div className='absolute  top-0 right-4 -mt-10'>
                                                {/* Sold Out Image Mobile Responce */}
                                                <img className='w-20' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />
                                                {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                                            </div>
                                        }
                                        <div className="grid gap-4">
                                            <div>
                                                <img className="flex h-48 items-center mx-auto rounded-lg object-center "
                                                    src={ShowItemDataImg}
                                                    alt="" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 w-full">
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.img.img1) }}
                                                        src={showItemData.img.img1}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.img.img2) }}
                                                        src={showItemData.img.img2}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.img.img3) }}
                                                        src={showItemData.img.img3}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*body*/}
                                    <div className="relative p-6 flex-auto mt-10">
                                        <div className='text-gray-800 font-bold md:ml-10 flex'>
                                            <p className='text-black md:text-xl'>Price :</p>
                                            <p className='ml-4 text-red-900'>{showItemData.price}</p>
                                        </div>

                                        <div className='text-gray-800 font-bold md:ml-10 mt-2'>
                                            <p className='text-black md:text-xl'>Description :</p>
                                            <p className='text-gray-800 md:text-xl text-sm ml-4 mr-4 break-words'>{showItemData.description}</p>
                                        </div>
                                    </div>


                                    {/*footer*/}
                                    <div className="flex items-center justify-between p-0 mr-0 border-t-2">

                                        <button
                                            className="ml-4 font-bold  text-sm px-0 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                router.push(`/pages/shops/${showItemData.farmerId}`)
                                            }
                                            }
                                        >
                                            <div className="flex flex-row">
                                                <img src="/assests/store.png" className="w-10 items-center justify-center mx-auto" alt="" />
                                                <h2 className="text-sm uppercase text-gray-400 items-center justify-center text-center mx-auto my-auto ml-2">Visit Shop</h2>
                                            </div>
                                        </button>
                                        <button
                                            className="bg-emerald-500  text-green-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => {
                                                setShowItemData(false)
                                            }
                                            }
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </> : null}

                </>
            ) : null
            }
        </>

    )
}

export default SearchItems