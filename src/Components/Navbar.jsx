import React, { use, useState } from 'react';
import logo from '../assets/logo.jpg'
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { toast } from 'react-toastify';
const Navbar = () => {
    const { logOut,balance,setBalance } = use(AuthContext);
    const [view, setView] = useState(false);
    
    const toggleView = () => {
        setView(!view);
    }
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    }
    const toRegister = () => {
        navigate('/register');
    }
    const { user, loading, setLoading } = use(AuthContext);
    const handleLogout = ()=>{
        logOut().then(()=>{
            toast.success("Logged Out");
            navigate('/');
        }).catch((error)=>{
            toast.error(error.message);
        })
    }
    console.log(user);
    if (loading) {
        return <div className='flex justify-center items-center gap-x-3 p-4'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div> // if laoding is not done, the system doesn't get enough time to get the user info and just assumes no one is logged in
    }

    return (
        <div className="navbar bg-gray-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <div
                        tabIndex="-1"
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className='px-2 py-1' to='/'>Home</NavLink>
                        <NavLink className='px-2 py-1' to='/bills'>Bills</NavLink>
                        <NavLink className='px-2 py-1' to='/profile'>Profile</NavLink>

                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-20' src={logo} alt="" />

                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink className='px-2 py-1' to='/'>Home</NavLink>
                    <NavLink className='px-2 py-1' to='/bills'>Bills</NavLink>
                    <NavLink className='px-2 py-1' to='/profile'>Profile</NavLink>
                </ul>
            </div>
            <div className="navbar-end text-black ">
                {
                    user?.email?
                        <div className='flex gap-x-2 '>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <img src={user.photoURL} alt="" />
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-violet-500">
                                    <li>Email: {user.email}</li>
                                    <li>Balance: {balance}</li>
                                    
                                </ul>
                            </div>
                            <button onClick={handleLogout} className="btn btn-error">Logout</button>

                        </div>
                        :
                        <div className='flex gap-2'>
                            <button onClick={toLogin} className='btn  bg-violet-200'>Login</button>
                            <button onClick={toRegister} className='btn  bg-violet-500'>Sign up</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;