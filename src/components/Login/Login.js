import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <form>
                    <h2 className='mt-5 text-center text-red-500 text-3xl font-semibold'>Please Login</h2>
                    <input type="email" name='email' placeholder="enter your email" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                    <br />
                    <input type="password" name='password' placeholder="enter your password" className="input input-bordered input-primary w-full max-w-xs mb-8" />
                    <br />
                    <button className="btn btn-outline btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;