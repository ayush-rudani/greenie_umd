import Link from "next/link";
import { useRouter } from "next/router";
import { Metadata } from 'next';

import AcCreation from "./AcCreation";
import UserDetail from "./UserDetail";
import Dashboard from "./dashboard";
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";

export const metadata = {
    title: 'Dashboard',
}

export default function Home() {
    return (
        <>
            <Dashboard />
            {/* <NavBar /> */}
            {/* <AcCreation /> */}
            {/* <UserDetail /> */}
            {/* <Loading /> */}
        </>
    )
}

