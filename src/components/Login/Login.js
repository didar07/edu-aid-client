import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
const Login = () => {

    const [error, setError] = useState('')
    const { providerLogin, signIn, githubLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className='flex justify-evenly'>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2 className='mt-5 text-center text-red-500 text-3xl font-semibold'>Please Login</h2>
                    <input type="email" name='email' placeholder="enter your email" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                    <br />
                    <input type="password" name='password' placeholder="enter your password" className="input input-bordered input-primary w-full max-w-xs mb-8" />
                    <br />
                    <button className="btn btn-outline btn-primary">Login</button>
                    <br />
                    <h2 className='text-2xl font-bold text-red-600'>{error}</h2>
                    <br />
                    <p>Dont have an account? <Link className='bg-sky-300 rounded p-1' to='/register'>Register Now</Link></p>
                </form>
            </div>
            <div className='mt-20'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-dark mr-6"><FaGoogle></FaGoogle> Login with Google</button>
                <button onClick={handleGithubSignIn} className="btn btn-outline btn-dark"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default Login;