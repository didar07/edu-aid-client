import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkoutCourse = useLoaderData()
    console.log(checkoutCourse)
    return (
        <div>
            {checkoutCourse.length}
        </div>
    );
};

export default Checkout;