import Loading from '@/components/Loading';
import React from 'react';
import { useState, useEffect } from "react";


export default function UserDetail() {
    const [isLoading, setIsLoading] = useState(true);

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [search, setSearch] = useState('');

    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }

    const filteredUser = users.filter(item =>
        item.username.toLowerCase().includes(search.toLowerCase())
    );

    function handleUserSelection(user) {
        setSelectedUser(user);
        setIsModalOpen(true);
        console.log(user);
    }

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5 w-5/6 mx-auto">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white  m-2">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="s_users" value={search} onChange={(e) => setSearch(e.target.value)} className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search for users" />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-50">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3">Creation date</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredUser.map(u => {
                                return (
                                    <tr className="bg-white border-b hover:bg-gray-50" key={u.id}>
                                        <td className="px-7 py-4 text-gray-500">
                                            {u.id}
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                            <img className="w-10 h-10 rounded-full" src="user.png" alt="" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{u.username}</div>
                                                <div className="font-normal text-gray-500">{u.email}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4 text-gray-950">{u.phone}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center text-gray-800">{u.creationDate}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div href="#" className="font-medium text-green-600  hover:underline hover:cursor-pointer" onClick={() => handleUserSelection(u)}>Edit user</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}