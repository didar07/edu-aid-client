import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'
const CourseDetails = ({ course }) => {

    const ref = React.createRef()


    const { details, image_url, title, rating, total_view, _id } = course
    return (

        <div>
            <Pdf targetRef={ref} filename="course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='mt-5 mb-5 text-center text-2xl font-bold bg-purple-600 px-6 py-3 rounded-lg'>Download file <FaDownload></FaDownload></button>}
            </Pdf>

            <div ref={ref} className="mr-20 card sm:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>

                    <h2 className='font-semibold'>Total purchase: {total_view}</h2>
                    <div className='flex items-center'>
                        <h2>Rating: {rating.number} </h2>
                        <FaStar className='text-yellow-500 ml-2'></FaStar>
                    </div>

                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to={`/singleCourse/${_id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;