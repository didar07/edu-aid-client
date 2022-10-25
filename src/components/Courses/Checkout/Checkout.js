import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const singleCourse = useLoaderData()
    const { image_url, title, total_view, rating, details } = singleCourse
    console.log(singleCourse.title)
    return (
        <div>
            <h2 className='text-rose-500 text-center bg-sky-300 mx-28 mt-9 text-3xl font-bold rounded-lg p-4'>congratulation You are purchased this Course </h2>
            <h2 className="text-rose-500 text-center bg-sky-300 mx-28 mt-9 text-3xl font-bold rounded-lg p-4">Your Purchased Coursed is <br />{singleCourse.title}</h2>
            <div className="ml-96 mt-10">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;