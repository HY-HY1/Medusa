"use client"
import React from 'react';
import { useUser } from '@/hooks/useUser';
import { Button } from '@/components/ui/button';
import { Logout } from '@/utils/logout';

const Dashboard = () => {
    const { customer, loading, error } = useUser(); // Updated from 'user' to 'customer'
    
    if (loading) {
        return <>Loading</>;
    }

    console.log('Customer:', customer);

    return (
        <>
            {/* You can access properties of the customer object here */}
            <div>
                <p className='text-[20px]'>Welcome <b className=' capitalize'>{customer?.first_name}</b> </p>
                <p className='text-[14px] opacity-80'>{customer?.email}</p>
            </div>
            <div className='py-2'> 
                <Button onClick={() => Logout()} variant={'destructive'} size={'sm'}>Logout</Button>
            </div>
            {/* Render other information as needed */}
        </>
    );
}

export default Dashboard;
