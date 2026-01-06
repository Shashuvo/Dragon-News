import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-semibold text-md md:text-xl pl-5 md:pl-0'>Find Us</h1>
            <div className="join join-vertical w-full mt-3 md:mt-7">
                <button className="btn w-11/12 mx-auto md:w-full bg-base-100 border-secondary shadow-none justify-start h-14">
                    <TiSocialFacebook className='bg-base-300 rounded-full text-[#3B599C] w-6 h-6 p-1' />
                    Facebook
                </button>
                <button className="btn w-11/12 mx-auto md:w-full bg-base-100 border-secondary shadow-none justify-start h-14">
                    <TbBrandGithubFilled className='bg-base-300 rounded-full w-6 h-6 p-1' />
                    GitHub</button>
                <button className="btn w-11/12 mx-auto md:w-full bg-base-100 border-secondary shadow-none justify-start h-14">
                    <FaInstagram className='bg-base-300 rounded-full text-[#D82D7E] w-6 h-6 p-1' />
                    Instagram</button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default FindUs;