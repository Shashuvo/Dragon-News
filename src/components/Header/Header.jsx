import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 gap-3'>
            <img className='w-2/3 md:w-1/3' src={logo} alt="Logo Image" />
            <p className='text-secondary text-xs md:text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-sm md:text-xl text-secondary font-medium'><span className='text-primary'>{format(new Date(), 'EEEE')}</span>{format(new Date(), ', MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;