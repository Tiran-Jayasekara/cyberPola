'use client'
import React, { useEffect, useState } from 'react'
import AdminService from '@/service/adminService'
import { useParams } from 'next/navigation';
import Footer from '@/app/components/Footer';

const Shop = () => {
  const { getFarmerWithItems } = AdminService();
  const params = useParams();
  const [farmerId, setFarmerId] = useState(params["shop"])
  const [farmerData, setFarmerData] = useState();
  const [items, setItems] = useState();


  useEffect(() => {
    getFarmerDetails();
  }, [])

  const getFarmerDetails = async () => {
    const FarmerAndItems = await getFarmerWithItems(farmerId)
    if (FarmerAndItems) {
      setFarmerData(FarmerAndItems.data.farmer)
      setItems(FarmerAndItems.data.items)
    } else {
      console.log("Data Error");
    }
  }

  return (
    <>
      <div className='w-full'>
        <img className='w-full h-auto' src='/assests/01.jpg' alt='No img' />
      </div>

      <h5 className=" text-center justify-center items-center text-xl md:text-4xl playfair-font mt-0 md:mt-0">Store</h5>

      <div className='w-full flex flex-wrap mt-4'>
        {items ? items.map((data, index) => (
          <div key={index} className="m-4 w-40 md:w-80 mx-auto bg-white border hover:scale-105 transform transition-transform duration-300 ease-in-out border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
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
          <div className='flex w-full'><h2 className='text-center justify-center items-center mx-auto mt-10'>Loading....</h2></div>
        </>}
      </div>

      {farmerData ? <div className='flex flex-row mt-20 md:mt-40 mx-4'>
        <div className='w-1/2 flex flex-col md:ml-20'>
          <h5 className=" playfair-font  tracking-tight md:text-2xl text-gray-900 text-center dark:text-white">Seller(Farmer) Details</h5>
          <img className="p-2 rounded-t-lg" src={farmerData.farmerImg} alt="product image" />
        </div>
        <div className='w-1/2 text-xs md:text-xl text-center mt-4 p-2 justify-center items-center my-auto md:mt-40'>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white  ">Name : {farmerData.firstName} {farmerData.lastName}</h5>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white mt-2">Address : {farmerData.address}</h5>
          <h5 className=" playfair-font  tracking-tight text-gray-900 dark:text-white mt-2">Number : {farmerData.mobile}</h5>
          <button className='bg-green-600 p-2 mt-4 rounded-2xl text-white'>Get Location</button>
        </div>
      </div> : ""}

      <Footer/>

    </>
  )
}

export default Shop