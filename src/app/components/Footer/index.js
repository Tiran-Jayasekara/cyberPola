import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='flex flex-row w-full mt-10 bg-gray-200 pb-10'>

                {/* First Row */}
                <div className='w-1/3 flex flex-col mx-4 text-center text-gray-800'>
                    <h1 className='playfair-font text-left md:text-center text-sm md:text-xl font-bold mt-10 mb-2'>Contact Us</h1>
                    <div className='flex flex-row'>
                        <IoLocationOutline className='w-auto md:w-20' />
                        <p className='text-xs md:text-xl'> Weligalla, Kandy
                            Sri Lanka.</p>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <MdOutlineEmail className='w-auto md:w-20' />
                        <p className='text-xs md:text-xl'> onlinemarket@
                            cyberpola.com</p>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <IoCallOutline className='w-auto md:w-20' />
                        <p className='text-xs md:text-xl'>+94 81 231 2034</p>
                    </div>
                </div>

                {/* Secound Row */}
                <div className='w-1/3 flex flex-col text-gray-800'>
                    <h1 className='playfair-font text-left md:text-center text-sm md:text-xl font-bold mt-10 mb-2'>Why Choose Us!</h1>
                    <h1 className='playfair-font text-left text-xs md:text-xl mt-0'>100% Fresh</h1>
                    <p className='text-[8px] md:text-sm ml-2'>Absolutely fresh, guaranteed</p>

                    <h1 className='playfair-font text-left text-xs md:text-xl mt-2'>Best Online Platform</h1>
                    <p className='text-[8px] md:text-sm  ml-2'>The ultimate choice for online
                        convenience and quality service.</p>
                    <h1 className='playfair-font text-left text-xs md:text-xl mt-2'>Local Farmers</h1>
                    <p className='text-[8px] md:text-sm  ml-2'>We sell Vegetables and Fruits
                        from the farm lands .</p>
                </div>

                {/* Third Row */}
                <div className='w-1/3 flex flex-col text-gray-800'>
                    <h1 className='playfair-font text-center md:text-center text-sm md:text-xl font-bold mt-10 mb-2'>Our Vision</h1>
                    <p className='text-[8px] ml-2 mx-2 md:text-xl'>Increase farmers income and
                        give fresh fruits and
                        vegetables to consumers for
                        reasonable price .</p>

                </div>
            </div>
        </>
    )
}

export default Footer