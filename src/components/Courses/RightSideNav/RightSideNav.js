
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails/CourseDetails';

const RightSideNav = () => {



    const allCourse = useLoaderData()
    // console.log(allCourse)
    return (
        <div>

            <h2>right side nav {allCourse.length}</h2>
            {
                allCourse.map(course => <CourseDetails
                    key={course._id} course={course}>

                </CourseDetails>)
            }
        </div>
    );
};

export default RightSideNav;