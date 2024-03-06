'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemService from '@/service/itemService';
import Image from 'next/image';

const ItemList = ({ setShowItemData, setShowItemDataModel, setShowItemDataImg }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { pagination, getAllItems } = ItemService();
    const [pageNumber, setPageNumber] = useState(1);
    let count = 0;

    useEffect(() => {
        fetchItems();
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll', handleScroll);
    });


    const fetchItems = async () => { // Accept pageNumber as a parameter
        // setLoading(true);
        try {
            const allItems = await getAllItems()
            console.log(allItems);
            if (allItems) {
                setItems(allItems.data.allItems);
            } else {

            }
            // const response = await pagination(page); // Fetch items for the specified page
            // const newItems = response.data.allItems;
            // console.log(newItems);
            // count++;
            // if (newItems) {
            //     if (count === 1 && pageNumber === 1) {
            //         console.log(pageNumber);
            //     } else {
            //         setItems((prevItems) => [...prevItems, ...newItems]);
            //         console.log(pageNumber);
            //     }
            // }

        } catch (error) {
            console.error('Error fetching items:', error);
        }
        setLoading(false);
    };

    // const handleScroll = () => {
    //     const scrollHeight = document.documentElement.scrollHeight;
    //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     const clientHeight = document.documentElement.clientHeight;

    //     // Calculate how far down the user has scrolled in terms of percentage
    //     const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

    //     // You can adjust this threshold value as needed (0.8 means 80%)
    //     const scrollThreshold = 0.8;

    //     // Check if the user has scrolled past the scrollThreshold
    //     if (scrollPercentage >= scrollThreshold) {
    //         // Fetch more items if the threshold is reached
    //         setPageNumber((prevPageNumber) => prevPageNumber + 1);
    //     }
    // };
    return (
        <div className=' mt-2 md:mx-10 h-full'>
            <div className="flex flex-col w-full">
                <h3 className="font-bodoni-italic items-center justify-center ml-4 md:text-4xl mt-6 border-b-2 mb-10">All Items</h3>
            </div>
            <div className='w-full flex flex-wrap mt-4'>
                {items ? items.map((data, index) => (
                    <div key={index} onClick={() => { setShowItemData(data), setShowItemDataModel(true), setShowItemDataImg(data.img.img1) }} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <div className='relative'>
                            {data.availability ?
                                <>

                                </>
                                :
                                <div className='absolute top-0 right-0'>
                                    <Image width={100} height={100} className='w-14' src='/assests/soldout.png' alt='sold Out' />
                                    {/* <p className='text-right p-2 rounded-2xl bg-gray-100'>Sold Out</p> */}
                                </div>
                            }
                            <Image width={100} height={100} className="p-2 rounded-t-lg md:h-52 h-32 w-full" src={data.img.img1} alt="product image" />
                        </div>
                        <div className="px-5 pb-5 text-center justify-center items-center text-sm md:text-xl playfair-font">
                            <div>
                                <h5 className=" font-semibold uppercase tracking-tight text-gray-900 dark:text-white">{data.itemName}</h5>
                                <h5 className="mt-6 font-semibold tracking-tight text-red-900 dark:text-white">{data.price}</h5>
                            </div>
                        </div>
                    </div>

                )) : <>
                    <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>Loading....</h2></div>
                </>}
            </div>
        </div>
    );
};

export default ItemList;
