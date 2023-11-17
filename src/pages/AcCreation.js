import { useState } from "react";
import SignIn from '@/components/SignIn';

export const metadata = {
    title: 'Create Account',
}

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
            <SignIn />
        </>

    );
};

