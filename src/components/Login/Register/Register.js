
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/Authprovider';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value
        console.log(name, email, password, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className='mt-5 text-center text-red-500 text-3xl font-semibold'>Register Now</h2>
                <input type="name" name='name' placeholder="enter your name" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                <br />
                <input type="text" name='photoURL' placeholder="enter your photo url" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                <br />
                <input type="email" name='email' placeholder="enter your email" className="input input-bordered input-primary w-full max-w-xs mb-5 mt-5" />
                <br />
                <input type="password" name='password' placeholder="enter your password" className="input input-bordered input-primary w-full max-w-xs mb-8" />
                <br />
                <button className="btn btn-outline btn-primary">Register</button>
                <br />
                <h2 className='text-2xl font-bold text-red-600'>{error}</h2>
            </form>
        </div>
    );
};

export default Register;