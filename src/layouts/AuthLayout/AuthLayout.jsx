import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className="w-full md:w-11/12 mx-auto pt-2 md:pt-5">
                <Navbar></Navbar>
            </header>
        </div>
    );
};

export default AuthLayout;