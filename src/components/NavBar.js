import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


export default function () {
    return (
        <nav
            className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-green-400 backdrop-filter backdrop-blur-xl rounded-lg m-2">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight">Greenie UMD</span>
                </div>
                <div className="block lg:hidden ">
                    <button
                        id="nav"
                        className="flex items-center px-3 py-2 border-2 rounded border-green-400  text-green-400  hover:text-green-400 hover:border-green-400 ">
                    </button>
                </div>
            </div>

            <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div className="text-md font-bold text-slate-700 lg:flex-grow">
                    <Link href="#responsive-header"
                        className="block group mt-4 lg:inline-block lg:mt-0 hover:text-green-400 px-4 py-2 rounded  mr-2">
                        User Details
                        <div className="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                </div>

                <div className="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">                    </button>
                </div>
                <div className="flex ">
                    <Link href="#"
                        className="block group text-md px-4 py-2 rounded text-slate-700 ml-2 font-bold hover:text-green-400 mt-4 lg:mt-0">Sign
                        in
                        <div className="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                    <Link href="#"
                        className="block group text-md px-4 ml-2 py-2 rounded text-slate-700 font-bold hover:text-green-400 mt-4 lg:mt-0">login
                        <div className="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                </div>
            </div>

        </nav>
    )
}
