
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails/CourseDetails';

import React from 'react';

const RightSideNav = () => {

    const allCourse = useLoaderData()
    // console.log(allCourse)
    return (
        <div>

            <h2 className='font-bold content-center mt-5 p-3 mr-16 mb-8 text-3xl text-center text-green-400 bg-slate-300 rounded-lg'>Courses Details are here</h2>
            {
                allCourse.map(course => <CourseDetails
                    key={course._id} course={course}>

                </CourseDetails>)
            }
        </div>
    );
};

export default RightSideNav;