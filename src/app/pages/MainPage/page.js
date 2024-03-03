'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const MainPage = () => {
    const router = useRouter();
    return (
        <>
            <div className="min-h-screen w-full" style={{ backgroundImage: "url('/assests/back.png')", backgroundSize: 'cover' }}>
                {/* Content goes here */}

                <div className='flex flex-col w-full'>
                    <div className="h-auto relative mx-auto justify-center items-center mt-10">
                        <div className="absolute inset-0 bg-black opacity-80 rounded-2xl "></div> {/* Overlay */}
                        <img className='relative z-10 mx-auto w-60' src='/assests/Logo.png' alt='logo' /> {/* Logo */}
                    </div>
                    <h1 className=' text-white playfair-font text-center md:text-6xl text-4xl font-bold mx-10 mt-20'>Fresh Foods for All</h1>
                    <p className=' text-gray-300 playfair-font text-center md:text-4xl text-xl mt-10 font-bold mx-10'>Always  Fresh Vegetables and Fruits from the farm lands</p>
                    <div className='flex flex-row mx-auto mt-20 text-white playfair-font'>
                        <button className='bg-green-600 p-2 rounded-xl px-6 mx-4 hover:bg-green-900' onClick={() => { router.push('/pages/UserLogin') }}>Login</button>
                        <button className='bg-green-600 p-2 rounded-xl px-6 mx-4 hover:bg-green-900' onClick={() => { router.push('/pages/UserRegister') }}>Sign Up</button>
                    </div>
                    <div className='flex flex-row mx-auto mt-10 text-white playfair-font mb-20'>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-4 hover:bg-green-900' onClick={() => { router.push('/pages/FarmerLogin') }}>Login as Seller</button>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-4 hover:bg-green-900' onClick={() => { router.push('/pages/FarmerRegister') }}>Sign-up as Seller</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage