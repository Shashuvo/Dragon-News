import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='card bg-base-100 w-11/12 md:w-full shrink-0 p-8 md:p-16 shadow-2xl'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center text-primary'>Register your account!</h1>
                <div className="divider my-6 md:my-10"></div>
                <form onSubmit={handleRegister} className='card-body'>
                    <fieldset className='fieldset'>
                        <label className="label font-bold text-lg md:text-xl text-primary">Your Name</label>
                        <input required type="text" name="name" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your name" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Photo URL</label>
                        <input required type="url" name="photo" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your Photo URL" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Email address</label>
                        <input required type="email" name="email" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your email address" />
                        <label className="label font-bold text-lg md:text-xl text-primary">Password</label>
                        <input required type="password" name="password" className="input w-full mb-3 text-secondary bg-base-300" placeholder="Enter your password" />
                        <label className='label text-xs md:text-[16px]'>
                            <input required type="checkbox" name="terms" className="checkbox" />Accept <span className='font-semibold'>terms & conditions</span>
                        </label>
                        <button type='submit' className="btn btn-primary text-white my-4">Register</button>
                        <p className='text-center font-bold text-md md:text-lg text-primary'>Already Have An Account?
                            <Link to="/auth/login" className='text-base-200 hover:underline'> Login</Link></p>
                    </fieldset>
                </form>

            </div>
        </div>
    );
};

export default Register;