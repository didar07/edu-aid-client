import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <h2 className='mt-5 text-center text-red-500 text-3xl font-semibold'>Register Now</h2>
                <input type="name" name='name' placeholder="enter your name" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                <br />
                <input type="email" name='email' placeholder="enter your email" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                <br />
                <input type="password" name='password' placeholder="enter your password" className="input input-bordered input-primary w-full max-w-xs mb-8" />
                <br />
                <button className="btn btn-outline btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;