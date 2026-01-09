import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className="w-full md:w-11/12 mx-auto pt-2 md:pt-5">
                <Navbar></Navbar>
            </header>
            <main className='w-full md:w-11/12 mx-auto mt-2 md:mt-5 md:grid md:grid-cols-12 gap-5'>
                <div className='col-span-2'></div>
                <section className='col-span-8'>
                    <Outlet></Outlet>
                </section>
                <div className='col-span-2'></div>
            </main>
        </div>
    );
};

export default AuthLayout;