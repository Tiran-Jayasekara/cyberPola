import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='flex flex-row w-full'>

                {/* First Row */}
                <div className='w-1/3 flex flex-col mx-4'>
                    <h1 className='playfair-font '>Contact Us</h1>
                    <div className='flex flex-row'>
                        <IoLocationOutline className='w-20' />
                        <p className='text-xs md:text-xl'>Weligalla, Kandy
                            Sri Lanka.</p>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <MdOutlineEmail className='w-20' />
                        <p className='text-xs md:text-xl'>onlinemarket@
                        cyberpola.com</p>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <IoCallOutline className='w-20' />
                        <p className='text-xs md:text-xl'>+94 81 231 2034</p>
                    </div>
                </div>

                {/* Secound Row */}
                <div className='w-1/3 flex flex-col'>
                    <h1 className='playfair-font mx-4 '>Why Choose Us!</h1>

                </div>

                {/* Third Row */}
                <div className='w-1/3 flex flex-col'>
                    <h1 className='playfair-font mx-4 '>Our Vision</h1>

                </div>
            </div>
        </>
    )
}

export default Footer