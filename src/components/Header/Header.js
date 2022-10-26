import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../contexts/AuthProvider/Authprovider'
import { FaUser } from 'react-icons/fa';
import { Stack, Switch } from '@chakra-ui/react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <nav className='nav flex justify-between'>
            <div className='flex align-middle'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.ocTNmZBZrwvB5iYUkmIsqwHaB2&pid=Api&P=0" alt="" />
                <div><h2 className='text-3xl font-bold ml-4'>Edu-Aid</h2></div>
            </div>

            <Stack direction='row'>
                <Switch colorScheme='blackAlpha' size='lg' />
            </Stack>


            <div >
                <Link className='nav-link mr-4' to='/home'>Home</Link>
                <Link className='nav-link mr-4' to='/course/:id'>Courses</Link>
                <Link className='nav-link mr-4' to='/faq'>Faq</Link>
                {
                    user?.uid ?
                        <>
                            <button className='text-white' onClick={handleLogOut}>Log out</button>
                        </>
                        :
                        <Link className='nav-link mr-4' to='/login'>Login</Link>
                }

                <Link className='nav-link mr-4 mt-4'>{
                    user?.photoURL ?
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                            <img className='rounded' style={{ height: "40px" }} src={user?.photoURL} alt="" />
                        </div>

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