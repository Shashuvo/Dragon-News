
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/homeLayouts/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/newsDetailscard/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});
    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setTimeout(() => {
            setNews(newsDetails)
        }, 0)
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-full md:w-11/12 mx-auto mt-2 md:mt-5 md:grid md:grid-cols-12 gap-5">
                <section className="main md:col-span-9">
                    <h1 className='font-semibold mt-3 md:mt-0 text-md md:text-xl pl-5 md:pl-0'>News Details</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className="md:col-span-3 md:sticky md:top-2 md:h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;