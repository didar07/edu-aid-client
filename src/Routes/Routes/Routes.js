import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Checkout from "../../components/Courses/Checkout/Checkout";
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Login/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])