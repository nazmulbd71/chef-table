import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import AllChef from "../components/Pages/AllChef/AllChef";
import Foods from "../components/Pages/Foods/Foods";
import Blogs from "../components/Pages/Blogs/Blogs";
import About from "../components/Pages/About/About";
import ChefDetails from "../components/Pages/ChefDetails/ChefDetails";
import Login from "../Layouts/LoginLayout/Login";
import Register from "../Layouts/LoginLayout/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/chef",
                element: <AllChef></AllChef>,
                loader: () => fetch('https://chef-table-server-three.vercel.app/chefAll'),
            },
            {
                path: "/foods",
                element: <Foods></Foods>,
            },
            {
                path: "/blogs",
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/chefAll/:id",
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://chef-table-server-three.vercel.app/chefAll/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },

        ]
    },
    {

        path: "*",
        element: <ErrorPage></ErrorPage>,
    }

])

export default router;