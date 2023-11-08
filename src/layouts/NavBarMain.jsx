import React from "react";
import { Navbar, Button } from "@material-tailwind/react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "../components/navbar/NavList";import LogoImg from "../components/navbar/LogoImg";

//import axiosClient from "../axios";
//import { CheckBadgeIcon, ArrowRightOnRectangleIcon, EllipsisHorizontalIcon, } from "@heroicons/react/24/solid";
import {  UserIcon } from "@heroicons/react/24/solid";

export default function NavBarMain() {

    const navigation = [
        { 
            type: "LogoImg",
            title: null,     
            src: "/images/logo1.png", 
            alt: "F13 GamersClub",
            customClass: "ml-2 mr-9 hidden md:block",
        },
        { 
            type: "Item",      
            title: "Home", 
            href: "/",
            customClass: "hover:bg-white hover:text-black rounded",
        },
        /*{ 
            type: "NavList",
            title: "NavList Title", 
            customClass: "hover:bg-white hover:text-black rounded md:mb-0 ",
            list: [
                { 
                    title: "Item 1", 
                    href: "#link", 
                    customClass: "hover:text-black text-white md:text-black rounded font-medium", 
                    icon: { type: EllipsisHorizontalIcon, customClass: "md:text-orange-500 text-white" } },
                { 
                    title: "Item 2", 
                    href: "#link", 
                    customClass: "hover:text-black text-white md:text-black rounded font-medium", 
                    icon: { type: CheckBadgeIcon, customClass: "md:text-orange-500 text-white " }
                },
            ]
        },*/
    ];

    const profileMenu = [
        { 
            type: "Item",
            title: "Meu Perfil", 
            icon: UserIcon,
            href: "/",
            //href: "/user-profile",
            customClass: "hover:bg-white hover:text-black  mr-2 rounded",
        },
        /*{ 
            type: "Item",
            title: "Sair", 
            icon: ArrowRightOnRectangleIcon,
            onClick: (ev) => logout(ev),
            customClass: "hover:bg-white hover:text-black bg-red-600 rounded",
        },*/
    ]

  return (
        <Disclosure as="nav" className="bg-orange-500">
            {({ open }) => (
                <>
                    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 bg-orange-500 border-none shadow-none">
                        <div className="flex items-center justify-between ">
                            <div className="hidden lg:block">
                                <NavList details={ navigation }/>
                            </div>
                            <div className="hidden gap-2 lg:flex">
                                <NavList details={ profileMenu }/>
                            </div>

                            <Navbar className="md:hidden ms:flex mx-auto max-w-screen-xl px-4 py-2 bg-orange-500 border-none shadow-none">
                                <div className="flex justify-between text-blue-gray-900">
                                    <>
                                        <LogoImg src="/images/logo1.png" alt="F13 GamersClub" customClass=" " />
                                    </>
                                    <>
                                        <Disclosure.Button className="items-center justify-center rounded-md bg-white p-2 text-black hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-8"aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-8" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </>
                                </div>
                            </Navbar>
                        </div>
                    </Navbar>
                    <Disclosure.Panel className="md:hidden ">
                        <div className="space-y-1 px-2 pt-2 pb-0 text-white sm:px-3">
                            <NavList details={ navigation }/>
                        </div>
                        <div className="border-t border-gray-700">
                            <div className="flex items-center justify-center mt-3 space-y-1 px-2">
                                <Disclosure.Button as="a" href="/" className="rounded-md px-3 py-2">
                                    <Button className="hover:bg-gray-700 hover:text-white">
                                        <UserIcon className="h-6 w-6 ml-4 mb-2"/> Meu Perfil
                                    </Button>
                                </Disclosure.Button>
                                {/*
                                    <Disclosure.Button as="a" href="/" onClick={(ev) => logout(ev)} className="rounded-md px-3 py-2 ">
                                        <Button className="hover:bg-red-700 bg-red-600 hover:text-white mb-1">
                                            <ArrowRightOnRectangleIcon className="h-6 w-6 mb-2"/> Sair
                                        </Button>
                                    </Disclosure.Button>
                                */}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
  );
}