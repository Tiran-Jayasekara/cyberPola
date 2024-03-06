'use client'
import React, { useState } from 'react'
import ItemList from './FetchItems'
import { useRouter } from 'next/navigation';
import SearchBar from '@/app/components/SearchBar';
import Image from 'next/image';

const ShoppingCenter = () => {

    const [showItemData, setShowItemData] = useState();
    const [showItemDataModel, setShowItemDataModel] = useState(false);
    const [ShowItemDataImg, setShowItemDataImg] = useState();
    const router = useRouter();
    return (
        <>

            <div className='w-full'>
                <Image width={2000} height={100} className='w-full h-auto' src='/assests/01.jpg' alt='No img' />
            </div>
            <h5 className=" text-center justify-center items-center text-xl md:text-4xl playfair-font mt-0 md:mt-0">Shopping Center</h5>
            <SearchBar />

            <ItemList setShowItemData={setShowItemData} setShowItemDataModel={setShowItemDataModel} setShowItemDataImg={setShowItemDataImg} />

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
                                                    <Image width={100} height={100} className='w-20' src='/assests/soldout.png' alt='sold Out' />

                                                </div>
                                            }

                                            <div className="grid gap-4">
                                                <div>
                                                    <Image width={400} height={100} className="flex h-96 items-center mx-auto rounded-lg " src={ShowItemDataImg} alt="" />
                                                </div>
                                                <div className="grid grid-cols-3 justify-center mx-auto gap-2 w-full">
                                                    <div>
                                                        <Image width={100} height={100}
                                                            onClick={() => { setShowItemDataImg(showItemData.img.img1) }}
                                                            src={showItemData.img.img1}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <Image width={100} height={100}
                                                            onClick={() => { setShowItemDataImg(showItemData.img.img2) }}
                                                            src={showItemData.img.img2}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <Image width={100} height={100}
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
                                                <Image width={100} height={100} className='w-20' src='/assests/soldout.png' alt='sold Out' />
                                                {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                                            </div>
                                        }
                                        <div className="grid gap-4">
                                            <div>
                                                <Image width={250} height={100} className="flex h-48 items-center mx-auto rounded-lg object-center "
                                                    src={ShowItemDataImg}
                                                    alt="" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 w-full">
                                                <div>
                                                    <Image width={100} height={100}
                                                        onClick={() => { setShowItemDataImg(showItemData.img.img1) }}
                                                        src={showItemData.img.img1}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <Image width={100} height={100}
                                                        onClick={() => { setShowItemDataImg(showItemData.img.img2) }}
                                                        src={showItemData.img.img2}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <Image width={100} height={100}
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
                                                <Image width={100} height={100} src="/assests/store.png" className="w-10 items-center justify-center mx-auto" alt="" />
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

export default ShoppingCenter