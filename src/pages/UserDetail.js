import UserD from '@/components/UserD';
import { Metadata } from 'next';

export const metadata = {
    title: 'User Detail',
}

export default function UserDetail() {
    return (
        <>
            <UserD />
        </>
    )
}

