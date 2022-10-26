import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'
const LeftSideNav = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://edu-aid-server.vercel.app/python-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='lg:w-2/3 sm:w-full'>
            <h2 className='mx-36 text-3xl text-green-500 font-bold bg-slate-300 p-3 rounded ml-3 mt-5'>Our Available Courses lists Are Below</h2>
            <div>
                {
                    courses.map(course => <li className='course text-3xl font-bold bg-blue-300 rounded p-4 mt-5 mb-5 mr-60 mx-20 w-50' key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;