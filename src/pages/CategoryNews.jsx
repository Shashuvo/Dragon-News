import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    return (
        <div>
            <h1>CategoryNews {id}</h1>
        </div>
    );
};

export default CategoryNews;