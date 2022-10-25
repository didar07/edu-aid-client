import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <div className='flex justify-between'>
            <LeftSideNav></LeftSideNav>
            <RightSideNav></RightSideNav>
        </div>
    );
};

export default Courses;