import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";


export default function () {
    return (
        <nav
            class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-green-400 backdrop-filter backdrop-blur-xl rounded-lg m-2">
            <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span class="font-semibold text-xl tracking-tight">Greenie UMD</span>
                </div>
                <div class="block lg:hidden ">
                    <button
                        id="nav"
                        class="flex items-center px-3 py-2 border-2 rounded border-green-400  text-green-400  hover:text-green-400 hover:border-green-400 ">
                    </button>
                </div>
            </div>

            <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                <div class="text-md font-bold text-slate-700 lg:flex-grow">
                    <Link href="#responsive-header"
                        class="block group mt-4 lg:inline-block lg:mt-0 hover:text-green-400 px-4 py-2 rounded  mr-2">
                        User Details
                        <div class="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                </div>

                <div class="relative mx-auto text-gray-600 lg:block hidden">
                    <input
                        class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search" />
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">                    </button>
                </div>
                <div class="flex ">
                    <Link href="#"
                        class="block group text-md px-4 py-2 rounded text-slate-700 ml-2 font-bold hover:text-green-400 mt-4 lg:mt-0">Sign
                        in
                        <div class="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                    <Link href="#"
                        class="block group text-md px-4 ml-2 py-2 rounded text-slate-700 font-bold hover:text-green-400 mt-4 lg:mt-0">login
                        <div class="bg-green-400 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                    </Link>

                </div>
            </div>

        </nav>
    )
}
