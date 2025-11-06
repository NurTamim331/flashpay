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

const router = createBrowserRouter([
    {
        path:'/',
        Component:Home,
        children:[
            {
                path:'/',
                default:true,
                Component:Homelayout
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
        
    },
    {
        path:'/bills',
        element:<PrivateRuote>
            <BillPage></BillPage>
        </PrivateRuote>,
        loader:()=>fetch('../../public/Bills.json')
    },
    {
        path:'/billDetails/:id',
        Component:BillDetails,
        loader:()=>fetch('../../public/Bills.json')
    }
    
])
export default router;