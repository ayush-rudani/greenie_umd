

import SignIn from '@/components/SignIn';
import UserD from '@/components/UserD';

export default function Dashboard() {
    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '60%' }} className="border-r-4 border-indigo-500">
                    <UserD />
                </div>
                <div style={{ width: '40%' }}>
                    <SignIn />
                </div>
            </div>
        </>
    )
}
