import React from 'react'
import AcCreation from "./AcCreation";
import UserDetail from "./UserDetail";
import Loading from "@/components/Loading";

export default function Dashboard() {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '60%' }} className="border-r-4 border-indigo-500">
                    <UserDetail />
                </div>
                <div style={{ width: '40%' }}>
                    <AcCreation />
                </div>
            </div>
        </>
    )
}
