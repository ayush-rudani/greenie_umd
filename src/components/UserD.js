import Loading from '@/components/Loading';
import { useState, useEffect } from "react";


export default function UserD() {

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
    }


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-5 w-5/6 mx-auto">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white  m-2">
                    <label htmlFor="table-search">User Details</label>
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
                                            <div href="#" className="font-medium text-green-600  hover:underline hover:cursor-pointer" onClick={() => handleUserSelection(u)}>Edit</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {isModalOpen &&
                (
                    <>
                        <div id="crud-modal" class="fixed flex items-center justify-center backdrop-blur z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow">

                                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                        <h3 class="text-lg font-semibold text-gray-900 ">
                                            User Details
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setIsModalOpen(false)}>
                                            <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>

                                    <form action="" class="p-4 md:p-5">
                                        <div class="grid gap-4 mb-4 grid-cols-2">
                                            <div class="col-span-2">
                                                <div className="flex justify-between">
                                                    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                                    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                                </div>
                                                <div className="flex justify-between"><div>{selectedUser.username}</div> <div> {selectedUser.email}</div></div>
                                            </div>
                                            <div class="col-span-2 sm:col-span-1">
                                                <label htmlFor="price" class="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                                                {selectedUser.phone}
                                            </div>
                                            <div class="col-span-2 sm:col-span-1">
                                                <label htmlFor="category" class="block mb-2 text-sm font-medium text-gray-900">Creation Date</label>
                                                {selectedUser.creationDate}
                                            </div>

                                        </div>
                                        <button class="text-white inline-flex items-center bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                            Generate Report
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}
