'use client'
import React, { useContext, useEffect, useState } from 'react'
import AdminService from '@/service/adminService'
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/app/context';

const Shops = () => {
    const { getAllFarmers } = AdminService();
    const [farmersData, setFarmersData] = useState();
    const router = useRouter();
    const { shopName, setShopName } = useContext(GlobalContext);

    useEffect(() => {
        getAllFarmersDetails();
    }, [])

    const getAllFarmersDetails = async () => {
        const farmersData = await getAllFarmers();
        if (farmersData) {
            setFarmersData(farmersData.data.allFarmersDetails)
            console.log(farmersData.data.allFarmersDetails);
        } else {
            console.log("No data");
        }
    }

    return (
        <>
            <div className='w-full'>
                <img className='w-full h-auto' src='/assests/01.jpg' alt='No img' />
            </div>
            <h5 className=" text-center justify-center items-center text-xl md:text-4xl playfair-font mt-0 md:mt-0">Shops</h5>
            <div className='w-full flex flex-wrap mt-4'>

                {farmersData ? farmersData.map((data, index) => (

                    <div key={index} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img className="p-2 rounded-t-lg md:h-52 h-32 w-full" src={data.shopImg} alt="product image" />
                        </div>
                        <div className="px-5 pb-5 text-center justify-center items-center text-sm md:text-xl playfair-font">
                            <div>
                                <h5 className=" font-semibold uppercase tracking-tight text-gray-900 dark:text-white">{data.shopName}</h5>
                                <h5 className="mt-6 font-semibold tracking-tight text-gray-900 dark:text-white">{data.shopType}</h5>
                                <h5 className="mt-2 font-semibold tracking-tight text-gray-800 dark:text-white">{data.address}</h5>
                            </div>

                            <div className="flex w-full">
                                <button onClick={() => {
                                    setShopName(data.shopName);
                                    router.push(`/pages/shops/${data._id}`)
                                }} className="text-white mx-auto bg-green-600 hover:bg-green-800 focus:ring-4 cursor-pointer mt-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Visit Shop</button>
                            </div>
                        </div>
                    </div>

                )) : null}


            </div>
        </>
    )
}

export default Shops