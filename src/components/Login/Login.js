import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className='flex justify-evenly'>
            <div>
                <form>
                    <h2 className='mt-5 text-center text-red-500 text-3xl font-semibold'>Please Login</h2>
                    <input type="email" name='email' placeholder="enter your email" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                    <br />
                    <input type="password" name='password' placeholder="enter your password" className="input input-bordered input-primary w-full max-w-xs mb-8" />
                    <br />
                    <button className="btn btn-outline btn-primary">Login</button>
                    <br />
                    <p>Dont have an account? <Link to='/register'>Register Now</Link></p>
                </form>
            </div>
            <div className='mt-20'>
                <button className="btn btn-outline btn-dark mr-6"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-outline btn-dark"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default Login;