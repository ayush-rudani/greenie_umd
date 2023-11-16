import React from 'react'

export default function UserDetail() {
    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5 w-5/6 mx-auto">
                <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white  m-2">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search for users" />
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-50">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">ID</th>
                            <th scope="col" class="px-6 py-3">Name</th>
                            <th scope="col" class="px-6 py-3">Phone</th>
                            <th scope="col" class="px-6 py-3">Creation date</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="bg-white border-b hover:bg-gray-50">
                            <td class="px-7 py-4 text-gray-500">
                                1
                            </td>
                            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <img class="w-10 h-10 rounded-full" src="user.png" alt="" />
                                <div class="ps-3">
                                    <div class="text-base font-semibold">Ayush Rudani</div>
                                    <div class="font-normal text-gray-500">ayush_rudani@google.com</div>
                                </div>
                            </th>
                            <td class="px-6 py-4 text-gray-950">1234567890</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center text-gray-800">1-Dec-2020</div>
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-green-600  hover:underline">Edit user</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
