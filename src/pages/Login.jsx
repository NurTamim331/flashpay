import React, { use, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn, setLoading, setUser, loading } = use(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        const mail = form.email.value;
        const ps = form.password.value;

        const hasUppercase = /[A-Z]/.test(ps);  // checks for uppercase letter
        const hasLowercase = /[a-z]/.test(ps);  // checks for lowercase letter
        const isLongEnough = ps.length >= 6;    // checks for minimum length

        if (!hasUppercase) {
            setError("Password must have at least one uppercase letter.");

        }
        else if (!hasLowercase) {
            setError("Password must have at least one lowercase letter.");

        }
        else if (!isLongEnough) {
            setError("Password must be at least 6 characters long.");

        }
        else {
            signIn(mail, ps).then(newUser => {
                setUser(newUser.user);
                toast.success("Login successful 🎯");
                navigate('/');
            }).catch(error => {
                toast.error(error.message);
            })
        }
    }
    return (

        <div className='bg-violet-50'>
            <main className='w-11/12 mx-auto mt-2  flex flex-col justify-center items-center '>
                <img src={logo} className='w-[20%] max-h-20 object-contain rounded-full' alt="" />
                {/* login card container */}
                <div className='bg-white shadow-xl mb-2 rounded-xl flex flex-col justify-center items-start gap-y-2 p-4 mt-2'>
                    <h1 className='text-center w-full font-bold'>Login</h1>
                    <p className='text-md w-full text-center text-gray-600'>Enter your credentials to access your account</p>
                    <form onSubmit={handleLogin} className="flex flex-col w-full max-w-md mx-auto gap-6 bg-white p-6 rounded-xl shadow-md">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                name='email'
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <label className="text-gray-700 font-medium">Password</label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9333EA] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                    <div class="flex items-center gap-4 w-full my-4">
                        <div class="flex-1 h-px bg-gray-300"></div>
                        <span class="text-gray-500 text-sm">Or continue with</span>
                        <div class="flex-1 h-px bg-gray-300"></div>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        {
                            error ? <p>{error}</p> : <></>
                        }
                    </div>

                    <div>
                        Already Have An account? <Link className='text-[#9333EA] ml-1 font-semibold hover:text-red-500' to='/register'>Register Here</Link>
                    </div>




                </div>
            </main>
            
        </div>
    );
};

export default Login;