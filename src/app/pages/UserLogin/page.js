'use client'

import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import UserService from '@/service/userService'
import { toast } from 'react-toastify'
import { GlobalContext } from '@/app/context'
import Image from 'next/image'


const UserLogin = () => {
    const router = useRouter();
    const { userLogin } = UserService();
    const [loginForm, setLoginForm] = useState();
    const { setUserData } = useContext(GlobalContext);

    const Login = async () => {
        const LoginUser = await userLogin(loginForm)
        if (LoginUser.data.message === "Login Success") {
            await setUserData(LoginUser.data.checkUser);
            router.push('/pages/UserProfile')
            toast.success(LoginUser.data.message, {
                icon: '✅',
                position: toast.POSITION.TOP_RIGHT,
            });
            
        } else {
            toast.error(LoginUser.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                icon: '❗',
            });
        }
    }

    return (
        <>
            <div className="w-full min-h-screen" style={{ backgroundImage: "url('/assests/back.png')", backgroundSize: 'cover' }}>

                {/* Content goes here */}

                <div className='flex flex-col w-full'>
                    <div className="h-auto relative mx-auto justify-center items-center mt-10">
                        <div className="absolute inset-0 bg-black opacity-80 rounded-2xl "></div> {/* Overlay */}
                        <Image width={100} height={100} className='relative z-10 mx-auto w-40' src='/assests/Logo.png' alt='logo' /> {/* Logo */}
                    </div>

                    <h1 className=' text-white playfair-font text-center md:text-4xl text-4xl font-bold mx-10 mt-20'>User Login</h1>
                    <div className="flex flex-col gap-6 w-72 items-center mx-auto mt-10">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input
                                onChange={(event) => {
                                    setLoginForm({
                                        ...loginForm,
                                        email: event.target.value
                                    })
                                }}
                                type='text'
                                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Email
                            </label>
                        </div>
                        <div className="relative w-full min-w-[200px] h-11">
                            <input
                                onChange={(event) => {
                                    setLoginForm({
                                        ...loginForm,
                                        password: event.target.value
                                    })
                                }}
                                type='password'
                                className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-blue-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white focus:border-white"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">Password
                            </label>
                        </div>
                    </div>

                    <div className='flex flex-row mx-auto text-white playfair-font mt-10 mb-20'>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-8 hover:bg-green-900' onClick={() => { router.back() }}>Back</button>
                        <button className='bg-green-600 p-2 rounded-xl md:px-6 px-4 mx-8 hover:bg-green-900' onClick={() => { Login() }}>Login</button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default UserLogin