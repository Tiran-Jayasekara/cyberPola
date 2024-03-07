'use client'
import Footer from '@/app/components/Footer';
import { GlobalContext } from '@/app/context'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'
import UserService from '@/service/userService';

const UserProfile = () => {
    const { userData } = useContext(GlobalContext);
    const router = useRouter();
    const { GetUserData } = UserService();
    const [user, setUser] = useState();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        if (userData) {
            const data = await GetUserData(userData);
            setUser(data.data.userData[0]);
            console.log(data.data.userData[0]);
        } else {

        }

    }

    return (
        <>
            <div className='flex flex-col'>
                <Image width={2000} height={100} src='/assests/01.jpg' alt='Cover' />

                <h1 className='text-green-900 playfair-font text-center md:text-4xl text-2xl font-bold mx-10 md:mt-20 mt-10 mb-10'>User profile</h1>

                {user ? <>
                    {/* <Image width={100} height={100} className='mx-auto rounded-full w-40 h-40' src='/assests/profile.jpeg' alt='' /> */}
                    <p className='playfair-font text-center mt-10'>{user.firstName} {user.lastName}</p>
                    <p className='playfair-font text-center mt-4'>{user.email}</p>
                    <p className='playfair-font text-center mt-4'>{user.mobile}</p>
                    <p className='playfair-font text-center mt-4'>{user.province}</p>
                    <p className='playfair-font text-center mt-4'>{user.town}</p>
                    <p className='playfair-font text-center mt-4'>{user.zipCode}</p>
                </>
                    : ""}

            </div>

            {user ? <div className='flex flex-row mx-auto justify-center items-center mt-20 '>
                <button onClick={() => { router.push('/pages/shops') }} className='bg-green-600 mx-4 p-2 rounded-2xl text-white playfair-font px-4'>Visit Shops</button>
                <button onClick={() => { router.push('/pages/ShoppingCenter') }} className='bg-green-600 mx-4 p-2 rounded-2xl playfair-font text-white px-4'>Shopping Center</button>
            </div> : ""}

            <Footer />
        </>
    )
}

export default UserProfile