import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightSideNav = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h2>right side nav {course.length}</h2>
        </div>
    );
};

export default RightSideNav;