import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutCourse = useLoaderData()
    console.log(checkoutCourse)
    return (
        <div>
            <h2 className='text-rose-500 text-center bg-sky-300 mx-28 mt-9 text-3xl font-bold rounded-lg p-4'>congratulation You are purchased this Course </h2>
            <h2>{checkoutCourse.title}</h2>
        </div>
    );
};

export default Checkout;