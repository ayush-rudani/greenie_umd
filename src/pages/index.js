import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";


function Home() {
    const router = useRouter();

    return (
        <NavBar />
    );
}

export default Home;
