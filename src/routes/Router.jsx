import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Bills from "../Components/Bills";
import Profile from "../Components/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Home,
        
        
    },
    {
        path:'/login',
        Component:Login
    },
    {
        path:'/register',
        Component:Register
    }
])
export default router;