import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";
import AcCreation from "./AcCreation";


function Home() {
    const router = useRouter();
    return (
        <>
            <NavBar />
            <AcCreation />
        </>
    );
}

export default Home;
