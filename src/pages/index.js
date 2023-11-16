import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import AcCreation from "./AcCreation";
import UserDetail from "./UserDetail";
import Loading from "@/components/Loading";


function Home() {
    const router = useRouter();
    return (
        <>
            {/* <NavBar /> */}
            {/* <AcCreation /> */}
            <UserDetail />
            {/* <Loading /> */}
        </>
    );
}

export default Home;
