import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='card bg-base-100 w-11/12 md:w-full shrink-0 p-8 md:p-16 shadow-2xl'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center text-primary'>Register your account!</h1>
                <div className="divider my-6 md:my-10"></div>
                <div className='card-body'>
                    <form className='fieldset'>
                        <label className="label font-bold text-lg md:text-xl text-primary">Your Name</label>
                        <input type="text" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your name" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Photo URL</label>
                        <input type="url" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your Photo URL" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Email address</label>
                        <input type="email" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your email address" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Password</label>
                        <input type="password" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your password" />
                        <label className='label text-xs md:text-[16px]'>
                            <input type="checkbox" name="terms" className="checkbox" />Accept <span className='font-semibold'>terms & conditions</span>
                        </label>
                        <button className="btn btn-primary text-white my-4">Register</button>
                        <p className='text-center font-bold text-md md:text-lg text-primary'>Already Have An Account?
                            <Link to="/auth/login" className='text-base-200 hover:underline'> Login</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;