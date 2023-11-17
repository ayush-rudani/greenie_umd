import React from 'react';
import Head from "next/head";
import UserDetail from "./UserDetail";
import SignIn from '@/components/SignIn';

export default function Dashboard() {
    return (
        <>
            <head>
                <title>Dashboard</title>
            </head>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '60%' }} className="border-r-4 border-indigo-500">
                    <UserDetail />
                </div>
                <div style={{ width: '40%' }}>
                    <SignIn />
                </div>
            </div>
        </>
    )
}
