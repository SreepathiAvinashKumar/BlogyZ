'use client'

import { Navbar, Collapse, Typography, IconButton, Button } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import AuthContext from "./AuthContext";

export function NavBar({user}) {
    const {logout} = useContext(AuthContext);

    const router = useRouter();

    const [openNav, setOpenNav] = useState(false);


    const handleLogout = async () => {
       await logout();
    };

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    
    return (
        <Navbar  className={"sticky border-0 mb-2 bg-neutral-950  text-white top-0 z-30 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 "}>
            <div className=" flex items-center  justify-between">

                <Typography
                    as="a"
                    href="/"
                    variant="h4"
                    className="mr-4 cursor-pointer flex items-center justify-center"
                >
                    <Image alt="Logo" width={60} height={60} src={"/Images/icon.png"} />
                    BlogyZ
                </Typography>

                <div className="hidden lg:block">
                    <ul className={"my-2 flex flex-col text-white gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"}>

                        <Typography
                            as="li"
                            variant="medium"
                            color="blue-gray"
                            className="p-1 font-medium"
                        >
                            <Link href="../about" className="flex items-center link from-left hover:text-blue-500 hover:underline transition-colors">
                                Author
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            variant="medium"
                            color="blue-gray"
                            className="p-1 font-medium"
                        >
                            <Link href="../contact" className="flex items-center hover:text-blue-500 hover:underline hover:animate-pulse transition-colors">
                                Contact
                            </Link>

                        </Typography>
                        <Typography
                            as="li"
                            variant="medium"
                            color="blue-gray"
                            className="p-1 font-medium"
                        >

                            {(user) ? (
                                <Button onClick={handleLogout}>Logout</Button>
                              )
                                 : (
                                    <Link href="../login" className="flex items-center hover:text-blue-500 transition-colors">
                                    Account
                                </Link>
                            )}

                        </Typography>

                        <Typography
                            as="li"
                            variant="medium"
                            color="blue-gray"
                            className="p-1 font-medium"
                        >

                            {(user) ? (
                            <Link href="../publish" className="flex items-center transition-colors">
                            Write Blog
                            </Link>)
                                : (
                            <Button onClick={() => { router.push('/login') }} className="flex items-center transition-colors">
                                    Write Blog
                                </Button> )
                            }



                        </Typography>
                    </ul>
                </div>
                <IconButton color="white"
                    variant="gradient"
                    className="ml-auto h-9 w-9  hover:bg-white focus:bg-white  active:bg-white lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 50 50">
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
                    </svg>
                </IconButton>
            </div>
            <Collapse open={openNav}>

                <ul className="my-2 flex flex-col text-white gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

                    <Typography
                        as="li"
                        variant="medium"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <Link href="../about" className="flex items-center   hover:text-blue-500 hover:underline hover:animate-pulse transition-colors">
                            About us
                        </Link>
                    </Typography>
                    <Typography
                        as="li"
                        variant="medium"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <Link href="../contact" className="flex items-center hover:text-blue-500 hover:underline hover:animate-pulse transition-colors">
                            Contact
                        </Link>

                    </Typography>

                    <Typography
                        as="li"
                        variant="medium"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        {(!user) ? (

                            <Link href="../login" className="flex items-center hover:text-blue-500 transition-colors">
                                Account
                            </Link>) : (
                            <Button onClick={handleLogout}>Logout</Button>
                        )}

                    </Typography>

                    <Typography
                        as="li"
                        variant="medium"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <Link href="../publish" className="flex items-center    transition-colors">
                            Write Blog
                        </Link>

                    </Typography>
                </ul>


            </Collapse>
        </Navbar>
    );
}