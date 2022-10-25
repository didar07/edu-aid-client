import React from 'react';

const CourseDetails = ({ course }) => {
    const { details, image_url, title, rating, total_view } = course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        <h2 className='font-semibold'>Total purchase: {total_view}</h2>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Get Premium Access</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;