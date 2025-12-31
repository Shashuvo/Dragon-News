import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className="flex gap-2 md:gap-5 items-center bg-accent p-2 md:py-4 md:pl-4 md:pr-24 shadow-md">
            <h1 className="bg-base-200 text-base-300 px-6 py-2 font-medium text-sm md:text-xl">Latest</h1>

            <Marquee pauseOnHover={true} speed={50}>
                <p className="font-semibold text-sm md:text-lg mr-2 md:mr-5">Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className="font-semibold text-sm md:text-lg mr-2 md:mr-5">Match Highlights: Germany vs Spain — as it happened   !</p>
                <p className="font-semibold text-sm md:text-lg mr-2 md:mr-5">Match Highlights: Germany vs Spain — as it happened   !</p>
            </Marquee>
        </div>
    );
};

export default Latest;