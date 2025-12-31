import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Latest from '../../components/Latest/Latest';
import Navbar from '../../components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className="latest-news w-full md:w-11/12 mx-auto mt-4 md:mt-7">
                <Latest></Latest>
            </section>
            <nav className="w-full md:w-11/12 mx-auto mt-2 md:mt-5">
                <Navbar></Navbar>
            </nav>
            <main>
                <section className="nav-left"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="nav-right"></section>
            </main>
        </div>
    );
};

export default HomeLayout;