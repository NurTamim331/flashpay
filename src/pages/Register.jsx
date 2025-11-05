import React, { use } from 'react';
import logo from '../assets/logo.jpg'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
const Register = () => {
    const { signUp, setUser, setLoading, user } = use(AuthContext);
    const addNewUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const url = form.photo_url.value;
        const pass = form.password.value;

        signUp(email, pass).then(newUser => {
            newUser.displayName = name;
            newUser.photoURL = url;
            setUser(newUser);
            console.log(user);
            toast.success("Signed up successfully 🎉🎉 ");

        }).catch((e) => {
            toast.error(e.message)
        })

    }

    return (
        <div className='bg-violet-50'>
            <header className='w-full'>
                <Navbar></Navbar>
            </header>

            <main className='w-11/12 mx-auto mt-2  flex flex-col justify-center items-center '>
                <img src={logo} className='w-[20%] max-h-20 object-contain rounded-full' alt="" />
                {/* login card container */}
                <div className='bg-white shadow-xl mb-2 rounded-xl flex flex-col justify-center items-start gap-y-2 p-4 mt-2'>
                    <h1 className='text-center w-full font-bold'>Sign up</h1>
                    <p className='text-md w-full text-center text-gray-600'>Enter your credentials to get started ! </p>
                    <form onSubmit={addNewUser} className="flex flex-col w-full max-w-md mx-auto gap-6 bg-white p-6 rounded-xl shadow-md">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name Here"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                name='name'
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email here"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                name='email'
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Photo URL</label>
                            <input
                                type="text"
                                placeholder="Enter the link to your photo here"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                name='photo_url'
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                name='password'
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9333EA] text-white font-semibold py-3 rounded-lg hover:bg-violet-900 transition-colors"
                        >
                            Sign Up
                        </button>
                        <p>
                            
                        </p>
                    </form>
                    <div className="flex items-center gap-4 w-full my-4">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-gray-500 text-sm">Or continue with</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <button type='submit' className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with gmail
                        </button>
                    </div>

                    <div>
                        Already Have An account? <Link className='text-[#9333EA] ml-1 font-semibold hover:text-red-500' to='/login'>Login Here</Link>
                    </div>




                </div>
            </main>
            <footer className='w-full'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Register;