
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails/CourseDetails';

import React from 'react';
const RightSideNav = () => {


    const allCourse = useLoaderData()
    // console.log(allCourse)
    return (
        <div>

            {
                allCourse.map(course => <CourseDetails
                    key={course._id} course={course}>

                </CourseDetails>)
            }
        </div>
    );
};

export default RightSideNav;