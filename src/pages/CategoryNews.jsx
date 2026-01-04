import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/homeLayouts/NewsCard/NewsCard';

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
            <h1 className='font-semibold text-md md:text-xl pl-5 md:pl-0'>Dragon News Home</h1>
            <div className='grid grid-cols-1 gap-2 mt-3 md:gap-7 md:mt-7 w-11/12 mx-auto md:w-full'>
                {
                    news.map((news)=><NewsCard news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;