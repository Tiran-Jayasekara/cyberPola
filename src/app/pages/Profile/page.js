'use client'
import { GlobalContext } from '@/app/context'
import React, { useContext } from 'react'

const Profile = () => {
    const { userData } = useContext(GlobalContext);
    console.log(userData.firstName);

    return (
        <>
            <div className='mt-20'>Profile</div>
            {userData ? <h1>{userData.firstName}</h1>:""}
            

        </>

    )
}

export default Profile