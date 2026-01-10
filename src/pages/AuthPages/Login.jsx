import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='card bg-base-100 w-11/12 md:w-full shrink-0 p-8 md:p-16 shadow-2xl'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center text-primary'>Login Your Account!</h1>
                <div className="divider my-6 md:my-10"></div>
                <div className='card-body'>
                    <form className='fieldset'>
                        <label className="label font-bold text-lg md:text-xl text-primary">Email address</label>
                        <input type="email" name='email' className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your email address" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Password</label>
                        <input type="password" name='password' className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your password" />
                        <div><a className="link link-hover font-bold text-md md:text-lg text-primary">Forgot password?</a></div>
                        <button className="btn btn-primary text-white my-4">Login</button>
                        <p className='text-center font-bold text-md md:text-lg text-primary'>Dont’t Have An Account?
                            <Link to="/auth/register" className='text-base-200 hover:underline'> Register</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;