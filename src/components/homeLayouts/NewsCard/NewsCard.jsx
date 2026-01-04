import React, { useState } from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from "react-icons/fa";

const formatDate = (isoOrDateString) => {
    if (!isoOrDateString) return "";
    const d = new Date(isoOrDateString);
    // Example output: 2025-04-22
    return d.toISOString().slice(0, 10);
};

const renderStars = (ratingNumber = 0) => {
    const full = Math.round(ratingNumber); // 4.2 -> 4
    return Array.from({ length: 5 }, (_, i) => (
        <FaStar
            key={i}
            className={i < full ? "text-orange-400" : "text-secondary"}
        />
    ));
};

const NewsCard = ({ news }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const {
        title,
        details,
        author,
        thumbnail_url,
        rating,
        total_view,
    } = news || {};


    return (
        <div className="card bg-base-100 border-3 border-base-300 rounded-xl ">
            {/* Top bar */}
            <div className="flex items-center justify-between bg-base-300 px-5 py-4">
                <div className="flex items-center gap-4">
                    <img
                        src={author?.img}
                        alt={author?.name || "Author"}
                        className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold leading-5">{author?.name}</p>
                        <p className="text-sm text-secondary">
                            {formatDate(author?.published_date)}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-secondary">
                    <button className="btn btn-ghost btn-sm hover:bg-orange-400 p-2">
                        <FaRegBookmark className="text-lg" />
                    </button>
                    <button className="btn btn-ghost btn-sm hover:bg-orange-400 p-2">
                        <FaShareAlt className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Body */}
            <div className="px-5 pb-5 my-5">
                <h2 className="text-xl md:text-2xl font-bold leading-snug">
                    {title}
                </h2>

                <figure className="mt-4 rounded-xl overflow-hidden">
                    <img
                        src={thumbnail_url}
                        alt={title}
                        className="w-full h-52 md:h-60 object-cover"
                    />
                </figure>

                <p className="mt-4 text-secondary leading-relaxed">
                    {isExpanded ? details : details.slice(0, 160) + "..."}
                </p>


                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 text-orange-500 font-semibold hover:underline"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>


                <div className="divider my-4" />

                {/* Bottom bar */}
                <div className="flex items-center justify-between">
                    {/* rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            {renderStars(rating?.number)}
                        </div>
                        <span className="font-semibold text-secondary">
                            {rating?.number}
                        </span>
                    </div>

                    {/* views */}
                    <div className="flex items-center gap-2 text-secondary">
                        <FaRegEye />
                        <span className="font-semibold">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
