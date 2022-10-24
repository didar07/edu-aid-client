import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
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



            <div className='nav-link'>
                <Link className='mr-4' to='/home'>Home</Link>
                <Link className='mr-4' to='courses'>Courses</Link>
                <Link className='mr-4' to='/faq'>Faq</Link>
                <Link className='mr-4' to='/login'>Login</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;