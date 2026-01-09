import React from 'react';

const Login = () => {
    return (

        <div className="card bg-base-100 w-10/12 md:w-8/12 mx-auto mt-12 md:mt-16 shrink-0 shadow-2xl">
            <h1 className="text-4xl font-semibold text-center py-12">Login your account!</h1>
            <div className="divider pb-8 w-10/12 mx-auto"></div>
            <div className="card-body w-10/12 mx-auto pb-12">
                <fieldset className="fieldset w-full">
                    <label className="label w-full">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>

    );
};

export default Login;