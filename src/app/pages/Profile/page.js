'use client'
import { GlobalContext } from '@/app/context'
import React, { useContext, useEffect, useState } from 'react'

const Profile = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        setUserData(JSON.parse(storedUserData))
    },[])

    return (
        <>
            <div className='mt-20'>Profile</div>
            {userData ? <h1>{userData.firstName}</h1> : ""}


        </>

    )
}

export default Profile