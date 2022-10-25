import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { details, image_url, title, rating, total_view, _id } = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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