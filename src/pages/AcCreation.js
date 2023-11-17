import Head from "next/head";
import SignIn from '@/components/SignIn';

export default function AcCreation() {

    const [value, setValue] = useState({
        username: "",
        password: "",
    });

    const handleInputs = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { username, password });
    };

    return (
        <>
            <head>
                <title>Account Creation</title>
            </head>
            <SignIn />
        </>

    );
};

