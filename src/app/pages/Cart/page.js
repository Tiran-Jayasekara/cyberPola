'use client'
import React, { useContext, useEffect, useState } from 'react'
import CartService from '@/service/cartService'
import { GlobalContext } from '@/app/context';
import { toast } from 'react-toastify';

const Cart = () => {
    const { getAllItemsByUser } = CartService();
    const { userData } = useContext(GlobalContext);
    const [items, setItems] = useState();
    const [showItemData, setShowItemData] = useState();
    const [showItemDataModel, setShowItemDataModel] = useState();
    const [showItemDataImg, setShowItemDataImg] = useState();

    useEffect(() => {
        CartItems();
    }, [])

    const CartItems = async () => {
        if (userData) {
            console.log(userData);
            const userId = userData._id;
            const cartData = await getAllItemsByUser(userId);
            if (cartData) {
                setItems(cartData.data.allItems)
            }
        } else {

        }

    }

    const order = async () => {
        toast.error("This Order Function is Still Not Available", {
            position: toast.POSITION.TOP_RIGHT,
            icon: '❗',
        });
    }

    return (
        <>
        <h5 className=" text-center justify-center items-center text-xl md:text-4xl playfair-font mt-10 md:mt-10">Cart</h5>
            {userData ?
                <div className='w-full flex flex-wrap mt-4'>
                    {items ? items.map((data, index) => (
                        <div key={index} onClick={() => { setShowItemData(data), console.log(data), setShowItemDataModel(true), setShowItemDataImg(data.itemId.img.img1) }} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                            <div className='relative'>
                                {data.itemId.availability ?
                                    <>

                                    </>
                                    :
                                    <div className='absolute top-0 right-0'>
                                        <img className='w-14' src='https://freepngimg.com/thumb/categories/1869.png' alt='sold Out' />
                                        {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                                    </div>
                                }
                                <img className="p-2 rounded-t-lg md:h-52 h-32 w-full" src={data.itemId.img.img1} alt="product image" />
                            </div>
                            <div className="px-5 pb-5 text-center justify-center items-center text-sm md:text-xl playfair-font">
                                <div>
                                    <h5 className=" font-semibold uppercase tracking-tight text-gray-900 dark:text-white">{data.itemId.itemName}</h5>
                                    <h5 className="mt-6 font-semibold tracking-tight text-red-900 dark:text-white">{data.itemId.price}</h5>
                                </div>
                            </div>
                        </div>

                    )) : <>
                        <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>Loading....</h2></div>
                    </>}
                </div>

                : <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>Please Logging To the system Again </h2></div>}





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
                                            {showItemData.itemId.itemName}
                                        </h3>

                                        {/* Desktop Responsiveness */}
                                        <div className="md:flex flex-wrap w-full items-center justify-center hidden relative">
                                            {showItemData.itemId.availability ?
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
                                                    <img className="flex h-96 items-center mx-auto rounded-lg " src={showItemDataImg} alt="" />
                                                </div>
                                                <div className="grid grid-cols-3 justify-center mx-auto gap-2 w-full">
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.itemId.img.img1) }}
                                                            src={showItemData.itemId.img.img1}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.itemId.img.img2) }}
                                                            src={showItemData.itemId.img.img2}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                    <div>
                                                        <img
                                                            onClick={() => { setShowItemDataImg(showItemData.itemId.img.img3) }}
                                                            src={showItemData.itemId.img.img3}
                                                            className="w-auto mx-0 h-20 rounded-lg cursor-pointer" alt="gallery-image" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Mobile Responsiveness */}
                                    <div className=" md:hidden flex flex-wrap w-full items-center justify-center relative">
                                        {showItemData.itemId.availability ?
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
                                                    src={showItemDataImg}
                                                    alt="" />
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 w-full">
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.itemId.img.img1) }}
                                                        src={showItemData.itemId.img.img1}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.itemId.img.img2) }}
                                                        src={showItemData.itemId.img.img2}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => { setShowItemDataImg(showItemData.itemId.img.img3) }}
                                                        src={showItemData.itemId.img.img3}
                                                        className="h-14 w-auto mx-0 rounded-lg cursor-pointer" alt="gallery-image" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/*body*/}
                                    <div className="relative p-6 flex-auto mt-10">
                                        <div className='text-gray-800 font-bold md:ml-10 flex'>
                                            <p className='text-black md:text-xl'>Price :</p>
                                            <p className='ml-4 text-red-900'>{showItemData.itemId.price}</p>
                                        </div>

                                        <div className='text-gray-800 font-bold md:ml-10 mt-2'>
                                            <p className='text-black md:text-xl'>Description :</p>
                                            <p className='text-gray-800 md:text-xl text-sm ml-4 mr-4 break-words'>{showItemData.itemId.description}</p>
                                        </div>
                                    </div>


                                    {/*footer*/}
                                    <div className="flex items-center justify-between p-0 mr-0 border-t-2 mb-4">

                                        <button
                                            className="bg-emerald-500 m-4 text-red-600 active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => { setShowItemDataModel(false) }}

                                        >Close

                                        </button>
                                        <button
                                            className="bg-emerald-500 bg-green-600 m-4 mr-4 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={order}
                                        >
                                            Order
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

export default Cart