import React from 'react';
import swimmingImg from "../../../assets/swimming.png"
import classImg from "../../../assets/class.png"
import playgroundImg from "../../../assets/playground.png"
import bgImg from "../../../assets/bg.png"

const QZone = () => {
    return (
        <div>
            {/* Q-zone */}
            <div className='w-11/12 mx-auto md:w-full bg-base-300'>
                <h1 className='font-semibold text-md md:text-xl pt-5 pl-5'>Q-Zone</h1>
                <div className="Image flex flex-col gap-5 w-full pb-5 mt-3 md:mt-7">
                    <img className='w-11/12 mx-auto md:w-full' src={swimmingImg} alt="Swimming Image" />
                    <img className='w-11/12 mx-auto md:w-full' src={classImg} alt="Class Image" />
                    <img className='w-11/12 mx-auto md:w-full' src={playgroundImg} alt="Playground Image" />
                </div>
            </div>
            {/* BG image */}
            <div className='mt-3 md:mt-7'>
                <img className='w-11/12 mx-auto md:w-full' src={bgImg} alt="BG Image" />
            </div>
        </div>
    );
};

export default QZone;