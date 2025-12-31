import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
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