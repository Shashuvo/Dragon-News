import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Latest from '../../components/Latest/Latest';
import Navbar from '../../components/Navbar/Navbar';
import LeftAside from '../../components/homeLayouts/LeftAside';
import RightAside from '../../components/homeLayouts/RightAside';

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
            <main className="w-full md:w-11/12 mx-auto mt-2 md:mt-5 md:grid md:grid-cols-12">
                <aside className="md:col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main md:col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="md:col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;