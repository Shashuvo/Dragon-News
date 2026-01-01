import React, { use } from 'react';
const categoryPromise = fetch("/public/categories.json").then(res=>
    res.json()
);

const Categories = () => {
    const category = use(categoryPromise);
    return (
        <div>
            <h1 className='font-semibold text-sm md:text-xl'>All Category {category.length}</h1>
        </div>
    );
};

export default Categories;