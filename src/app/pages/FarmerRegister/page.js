'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const FarmerRegister = () => {
    const router = useRouter();
    return (
        <>
            <div className="min-h-screen w-full" style={{ backgroundImage: "url('/assests/back.png')", backgroundSize: 'cover' }}>

                {/* Content goes here */}

                <div className='flex flex-col w-full'>
                    <div className="h-auto relative mx-auto justify-center items-center mt-10">
                        <div className="absolute inset-0 bg-black opacity-80 rounded-2xl "></div> {/* Overlay */}
                        <img className='relative z-10 mx-auto w-40' src='/assests/Logo.png' alt='logo' /> {/* Logo */}
                    </div>
                    <h1 className=' text-white playfair-font text-center md:text-4xl text-2xl font-bold mx-10 md:mt-20 mt-10 mb-10'>Farmer Register</h1>



                    <form className="mx-auto md:max-w-md w-full">
                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <input
                                type='text'
                                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">First Name
                            </label>
                        </div>
                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <input
                                type='text'
                                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Last Name
                            </label>
                        </div>
                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <input
                                type='text'
                                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Telephone Number
                            </label>
                        </div>

                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <label className="block mb-2 text-sm font-medium text-white dark:text-white" htmlFor="file_input">Upload file</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>

                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <button className='bg-white w-full rounded-md py-2'>Location Using Google Map</button>
                        </div>

                        <div className="relative z-0 md:w-full mb-5 group mx-10 md:mx-0">
                            <h1 className='w-full text-white text-sm text-center justify-center y-2'>We will send your user name and password via your  mobile number</h1>
                        </div>
                    </form>


                    <div className='flex flex-row mx-auto text-white playfair-font mt-10 pb-20'>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-8 hover:bg-green-900' onClick={() => { router.back() }}>Back</button>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-8 hover:bg-green-900' onClick={() => { console.log("hello") }}>Register</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default FarmerRegister