'use client'
import React, { useContext, useState } from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/app/context';
import Image from 'next/image';

const NavBar = () => {

    const [openNav, setOpenNav] = useState(false);
    const router = useRouter();
    const { userData } = useContext(GlobalContext);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >


                <button className="flex items-center cursor-pointer" onClick={() => { router.push('/pages/MainPage'), setOpenNav(false) }}>
                    Home
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >

                <button className="flex items-center cursor-pointer" onClick={() => { router.push('/pages/shops'), setOpenNav(false) }}>
                    Shops
                </button>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
            >

                <button className="flex items-center cursor-pointer" onClick={() => { router.push('/pages/ShoppingCenter'), setOpenNav(false) }}>
                    Shopping Center
                </button>
            </Typography>
            {userData ?
                <>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
                    >
                        <button className="flex items-center cursor-pointer" onClick={() => { router.push('/pages/UserProfile'), setOpenNav(false) }}>
                            Account
                        </button>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-x-2 p-1 font-medium text-white playfair-font hover:text-yellow-600"
                    >
                        <div onClick={() => { router.push('/pages/Cart')}} className="flex flex-row ">
                            <Image src="/assests/cart.png" className="w-12 items-center justify-center mx-auto" alt="" width="100" height="100"/>
                        </div>
                    </Typography>
                </> : ""}

        </ul>
    );

    return (
        <Navbar className="mx-auto min-w-full px-4 py-0 lg:px-8 lg:py-2 bg-green-900 rounded-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium text-white md:text-2xl text-xl playfair-font"
                >
                    Cyber Pola
                </Typography>
                <div className="hidden lg:block">{navList}</div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}

                </div>
            </Collapse>
        </Navbar>
    );
}

export default NavBar