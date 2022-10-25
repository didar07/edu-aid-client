import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../contexts/AuthProvider/Authprovider'
import { FaUser } from 'react-icons/fa';
const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <nav className='nav flex justify-between'>
            <div className='flex align-middle'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.ocTNmZBZrwvB5iYUkmIsqwHaB2&pid=Api&P=0" alt="" />
                <div><h2 className='text-3xl font-bold ml-4'>Edu-Aid</h2></div>
            </div>
            <div className='align-top'>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">White</span>
                        <input type="radio" name="radio-6" className="radio checked:bg-white" checked />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Dark</span>
                        <input type="radio" name="radio-6" className="radio checked:bg-black" checked />
                    </label>
                </div>
            </div>



            <div >
                <Link className='nav-link mr-4' to='/home'>Home</Link>
                <Link className='nav-link mr-4' to='/course/:id'>Courses</Link>
                <Link className='nav-link mr-4' to='/faq'>Faq</Link>
                {
                    user?.uid ?
                        <span className='text-white'>{user?.displayName}</span>
                        :
                        <Link className='nav-link mr-4' to='/login'>Login</Link>
                }

                <Link className='nav-link mr-4'>{
                    user?.photoURL ? <img className='rounded' style={{ height: "40px" }} src={user?.photoURL2} alt="" />
                        :
                        <FaUser></FaUser>
                }</Link>
                <Link className='nav-link mr-4' to='/blog'>Blog</Link>
                <Link className='nav-link mr-4'></Link>

            </div>
        </nav>
    );
};

export default Header;