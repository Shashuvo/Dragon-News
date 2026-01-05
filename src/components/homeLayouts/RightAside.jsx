import React from 'react';
import SocialLogin from './SocialLogin/SocialLogin';
import FindUs from './FindUs/FindUs';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightAside;