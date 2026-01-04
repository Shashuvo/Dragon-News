import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    // loading data
    const data = useLoaderData();
    const [news, setNews] = useState([]);
    // loading id
    const { id } = useParams();
    useEffect(() => {
        if (id == '0') {
            setTimeout(() => {
                setNews(data);
            }, 0)
            return;
        }
        else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setTimeout(() => {
                setNews(filteredNews);
            }, 0);
        }
        else {
            const filteredNews = data.filter(news => String(news.category_id) === id);

            setTimeout(() => {
                setNews(filteredNews);
            }, 0);
        }
    }, [data, id]);
    return (
        <div>
            <h1>{news.length} news Found.</h1>
        </div>
    );
};

export default CategoryNews;