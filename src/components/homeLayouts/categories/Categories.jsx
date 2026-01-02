import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/public/categories.json").then(res =>
    res.json()
);

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className='font-semibold text-md md:text-xl pl-5 md:pl-0'>All Category</h1>
            <div className='grid grid-cols-1 gap-2 mt-3 md:gap-7 md:mt-7 w-11/12 mx-auto md:w-full'>
                {
                    categories.map(category => (
                        <NavLink
                            className="btn border-none bg-base-100 shadow-none text-sm md:text-xl font-semibold text-secondary"
                            key={category.id}
                            to={`/categories/${category.id}`}>
                            <span className="w-full text-center md:text-start md:pl-20">
                                {category.name}
                            </span>
                        </NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;