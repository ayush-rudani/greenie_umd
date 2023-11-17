import Link from "next/link";
import { useRouter } from "next/router";
import AcCreation from "../components/AcCreation";
import UserDetail from "../components/UserDetail";
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import Dashboard from "../components/dashboard";


function Home() {
    const router = useRouter();
    return (
        <>
            <Dashboard />
            {/* <NavBar /> */}
            {/* <AcCreation /> */}
            {/* <UserDetail /> */}
            {/* <Loading /> */}
        </>
    );
}

export default Home;
