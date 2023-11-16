import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import AcCreation from "./AcCreation";
import UserDetail from "./UserDetail";


function Home() {
    const router = useRouter();
    return (
        <>
            {/* <NavBar /> */}
            {/* <AcCreation /> */}
            <UserDetail />
        </>
    );
}

export default Home;
