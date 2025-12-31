import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';
import Latest from '../../components/Latest/Latest';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <section className="latest-news"><Latest></Latest></section>
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