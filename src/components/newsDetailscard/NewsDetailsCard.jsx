import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const {
        category_id,
        title,
        details,
        thumbnail_url,
        rating,
        total_view,
        author,
        others,
    } = news;
    console.log(title,
        details,
        thumbnail_url,
        rating,
        total_view,
        author,
        others,)
    return (
        <div className="w-full h-fit mt-3 md:mt-7 overflow-hidden rounded-2xl border-secondary border shadow-md hover:shadow-lg transition bg-white">
            {/* Image */}
            <div className="relative">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-full p-7 object-cover"
                />
                <span className="absolute top-10 left-10 bg-base-200 text-white text-xs px-3 py-1 rounded-full">
                    Trending
                </span>
            </div>

            {/* Content */}
            <div className="p-7 space-y-3">
                <h2 className="text-2xl text-primary font-bold leading-snug line-clamp-2">
                    {title}
                </h2>

                <p className=" text-secondary">
                    {details}
                </p>

                {/* Author + Views */}
                <div className="flex items-center justify-between pt-2 text-xs text-secondary">
                    <div className="flex items-center gap-2">
                        <img
                            src={author?.img || "/avatar.png"}
                            alt={author?.name || "Unknown"}
                            className="w-7 h-7 rounded-full"
                        />
                        <div>
                            <p className="font-medium text-primary">
                                {author?.name || "Unknown Author"}
                            </p>

                            <p>
                                {author?.published_date
                                    ? new Date(author.published_date).toDateString()
                                    : "Date unavailable"}
                            </p>
                        </div>
                    </div>

                    <span>👁 {total_view}</span>
                </div>

                {/* Button */}
                <Link to={`/categories/${category_id}`} className="block text-center w-full mt-3 border border-base-200 text-base-200 text-sm font-medium py-2 rounded-xl hover:bg-base-200 hover:text-white transition">
                    All news in this category
                </Link>
            </div>
        </div>
    );
};

export default NewsDetailsCard;