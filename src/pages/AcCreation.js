import React, { useState } from 'react';

export default function () {

    const [value, setValue] = useState({
        username: "",
        password: "",
    });

    const handleInputs = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy request handling
        console.log('Submitted:', { username, password });
    };

    return (
        <>
            <div className="w-full max-w-sm p-4 mx-auto sm:p-6 md:p-8 mt-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                        Sign In
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Username
                        </label>
                        <input
                            value={value.username}
                            onChange={handleInputs}
                            type="username"
                            name="username"
                            id="username"
                            className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            value={value.password}
                            onChange={handleInputs}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="ml-auto text-sm text-green-700 hover:underline dark:text-green-400"
                        >
                            Lost Password?
                        </a>
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-500"
                    >
                        Sign in
                    </button>
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <a
                            href="#"
                            className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                            Create account
                        </a>
                    </div> */}
                </form>
            </div>
        </>
    );
};

