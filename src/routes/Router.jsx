import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Bills from "../Components/Bills";
import Profile from "../Components/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homelayout from "../layouts/Homelayout";
import BillPage from "../pages/BillPage";
import BillDetails from "../Components/BillDetails";
import PrivateRuote from "../Provider/PrivateRuote";
import ProfileEdit from "../Components/ProfileEdit";
import ForgetPassword from "../Components/ForgetPassword";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                path: '/',
                default: true,
                Component: Homelayout
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]

    },
    {
        path: '/bills',
        element: <PrivateRuote>
            <BillPage></BillPage>
        </PrivateRuote>,
        loader: () => fetch('/Bills.json')
    },
    {
        path: '/billDetails/:id',
        element: <PrivateRuote>
            <BillDetails></BillDetails>
        </PrivateRuote>,
        loader: () => fetch('/Bills.json')
    },
    {
        path: '/profile',
        element: <PrivateRuote>
            <Profile></Profile>
        </PrivateRuote>,

    },
    {
        path: '/edit-profile',
        element: <PrivateRuote>
            <ProfileEdit></ProfileEdit>
        </PrivateRuote>,
    },
    {
        path:'/forget',
        Component:ForgetPassword
    }

])
export default router;