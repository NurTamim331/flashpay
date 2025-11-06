import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Slides from '../Components/Slides';
import { MdElectricalServices } from "react-icons/md";
import { FaBell, FaCashRegister, FaClock, FaFire, FaGasPump, FaGift, FaMoneyBill, FaSearch, FaWater } from 'react-icons/fa';
import { SiInternetcomputer } from 'react-icons/si';
import { BiHome, BiMobile } from 'react-icons/bi';
import { PiTelevision } from 'react-icons/pi';
import { AiFillInsurance } from 'react-icons/ai';
import { MdOutlineSecurity } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jfif';
const Homelayout = () => {
    return (
        <div>
            <section className='flex flex-col justify-center items-center gap-y-2 gap-x-1 bg-gray-100 mb-2'>
                <h1 className='text-2xl font-bold'>Support of major services </h1>
                <Slides></Slides>
            </section>
            {/* available services section */}
            <section className='mt-5 '>
                <div className='flex gap-y-2 flex-col justify-center items-between '>
                    <h1 className='text-2xl font-bold'>QuickPay</h1>
                    <p className='text-lg text-gray-700'>Pay All kinds of bills from one platform</p>
                    {/* card holder */}
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-2 gap-x-4 mt-2'>
                        {/* cards */}
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <MdElectricalServices className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Electricity</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <FaWater className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Water</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-3 rounded-lg text-xl'>
                            <FaFire className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>GAS</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <SiInternetcomputer className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Internet</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <BiMobile className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Mobile</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <PiTelevision className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Cable TV</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <BiHome className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Rent</p>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-violet-200 p-4 rounded-lg text-xl'>
                            <AiFillInsurance className='rounded-full bg-yellow-200 p-1' size={40} />
                            <p>Insurance</p>
                        </div>


                    </div>
                </div>
            </section>
            <section className='flex flex-col justify-center items-between w-full mt-4 py-5'>
                <h1 className='text-xl font-bold '>Why Choose US ?</h1>
                <p className='text-md font-serif'>All your bills just a click away</p>
                {/* card holder */}
                <div className=' gap-y-2 grid gap-x-2 mt-2 grid-cols-2 md:grid-cols-4 bg-gray-50'>
                    {/* cards */}
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <MdOutlineSecurity color='#9333EA' size={40}></MdOutlineSecurity>
                        <h3 className='font-semibold '>Secure Payments</h3>
                        <p>Bank-level encryption ensures your transactions are safe and protected

                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaClock color='#9333EA' size={40}></FaClock>
                        <h3 className='font-semibold '>24/7 Availability</h3>
                        <p>Pay your bills anytime, anywhere with our always-on platform

                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaBell color='#9333EA' size={40}></FaBell>
                        <h3 className='font-semibold '>Smart Reminders</h3>
                        <p>Never miss a due date with intelligent payment notifications

                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaGift color='#9333EA' size={40}></FaGift>
                        <h3 className='font-semibold '>Rewards & Cashback</h3>
                        <p>Earn points and get cashback on every bill payment you make
                        </p>
                    </div>
                </div>

            </section>
            {/* how it works */}
            <section className='flex flex-col justify-center items-center w-full mt-4 p-5 '>
                <h1 className='text-xl font-bold '>How it works ?</h1>
                <p className='text-md font-serif'>Pay your bills in just 4 steps</p>
                {/* card holder */}
                <div className=' gap-y-2 grid gap-x-2 mt-2 grid-cols-2 md:grid-cols-4 bg-gray-50'>
                    {/* cards */}
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <IoPersonAddSharp color='#9333EA' size={40}></IoPersonAddSharp >
                        <h3 className='font-semibold '>Create Account</h3>
                        <p>Sign up in seconds with your email or phone number
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaSearch color='#9333EA' size={40} />
                        <h3 className='font-semibold '>Select Service</h3>
                        <p>Choose the utility bill you want to pay from our list

                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaMoneyBill color='#9333EA' size={40} />
                        <h3 className='font-semibold '>Make Payment</h3>
                        <p>Enter bill details and pay using your preferred method
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start shadow-xl p-3 bg-violet-50 rounded-xl gap-y-1'>
                        <FaBell color='#9333EA' size={40} />
                        <h3 className='font-semibold '>Get Confirmation</h3>
                        <p>Receive instant confirmation and payment receipt
                        </p>
                    </div>
                </div>

            </section>
            {/* review section */}
            <section className='flex flex-col justify-center items-center mt-5'>
                <h1 className='text-xl font-bold '>What our users say</h1>
                <p className='text-md font-serif mb-4'>Join thousands of satisfied customers</p>
                {/* card holder */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2'>
                    <article class="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* <!-- soft top glow --> */}
                        <div class="absolute inset-x-0 -top-6 h-8 pointer-events-none bg-linear-to-r from-pink-100/70 via-purple-100/60 to-transparent blur-md"></div>

                        <div class="p-6 md:p-8">
                            {/* <!-- stars --> */}
                            <div class="flex items-center gap-1 mb-4">
                                {/* <!-- 5 stars (SVG) --> */}
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                            </div>

                            {/* <!-- quote block --> */}
                            <div class="flex items-start gap-4 mb-6">
                                {/* <!-- quote icon --> */}
                                <div class="text-gray-300 shrink-0 mt-1">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17v1.66A3.17 3.17 0 0 0 5.17 16h.66A3.17 3.17 0 0 0 9 12.83V9.66A3.66 3.66 0 0 0 7.17 6zM21.17 6A5.17 5.17 0 0 0 16 11.17v1.66A3.17 3.17 0 0 0 19.17 16h.66A3.17 3.17 0 0 0 23 12.83V9.66A3.66 3.66 0 0 0 21.17 6z" />
                                    </svg>
                                </div>

                                <p class="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                                    “PayUtility has made managing my business utilities so much easier. I can pay all my bills in one place and never miss a deadline!”
                                </p>
                            </div>

                            {/* <!-- avatar + name --> */}
                            <div class="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/100?img=47" alt="Sarah Johnson" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white shadow-sm" />
                                <div>
                                    <h3 class="text-gray-800 font-semibold text-sm md:text-base">Sarah Johnson</h3>
                                    <p class="text-gray-500 text-xs md:text-sm">Small Business Owner</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* <!-- soft top glow --> */}
                        <div class="absolute inset-x-0 -top-6 h-8 pointer-events-none bg-linear-to-r from-pink-100/70 via-purple-100/60 to-transparent blur-md"></div>

                        <div class="p-6 md:p-8">
                            {/* <!-- stars --> */}
                            <div class="flex items-center gap-1 mb-4">
                                {/* <!-- 5 stars (SVG) --> */}
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                            </div>

                            {/* <!-- quote block --> */}
                            <div class="flex items-start gap-4 mb-6">
                                {/* <!-- quote icon --> */}
                                <div class="text-gray-300 shrink-0 mt-1">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17v1.66A3.17 3.17 0 0 0 5.17 16h.66A3.17 3.17 0 0 0 9 12.83V9.66A3.66 3.66 0 0 0 7.17 6zM21.17 6A5.17 5.17 0 0 0 16 11.17v1.66A3.17 3.17 0 0 0 19.17 16h.66A3.17 3.17 0 0 0 23 12.83V9.66A3.66 3.66 0 0 0 21.17 6z" />
                                    </svg>
                                </div>

                                <p class="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                                    "The automatic payment reminders are a lifesaver. I used to forget payment dates, but not anymore. Highly recommended!"
                                </p>
                            </div>

                            {/* <!-- avatar + name --> */}
                            <div class="flex items-center gap-4">
                                <img src={person2} alt="Sarah Johnson" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white shadow-sm" />
                                <div>
                                    <h3 class="text-gray-800 font-semibold text-sm md:text-base">Michael Chenel</h3>
                                    <p class="text-gray-500 text-xs md:text-sm">Freelancer</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                        {/* <!-- soft top glow --> */}
                        <div class="absolute inset-x-0 -top-6 h-8 pointer-events-none bg-linear-to-r from-pink-100/70 via-purple-100/60 to-transparent blur-md"></div>

                        <div class="p-6 md:p-8">
                            {/* <!-- stars --> */}
                            <div class="flex items-center gap-1 mb-4">
                                {/* <!-- 5 stars (SVG) --> */}
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                                <svg class="w-5 h-5 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.335 24 12 19.77 4.665 24l1.635-8.694L.6 9.75l7.732-1.732L12 .587z" /></svg>
                            </div>

                            {/* <!-- quote block --> */}
                            <div class="flex items-start gap-4 mb-6">
                                {/* <!-- quote icon --> */}
                                <div class="text-gray-300 shrink-0 mt-1">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17v1.66A3.17 3.17 0 0 0 5.17 16h.66A3.17 3.17 0 0 0 9 12.83V9.66A3.66 3.66 0 0 0 7.17 6zM21.17 6A5.17 5.17 0 0 0 16 11.17v1.66A3.17 3.17 0 0 0 19.17 16h.66A3.17 3.17 0 0 0 23 12.83V9.66A3.66 3.66 0 0 0 21.17 6z" />
                                    </svg>
                                </div>

                                <p class="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                                    "Fast, secure, and super convenient. The cashback rewards are an added bonus. This is now my go-to platform for all bill payments."
                                </p>
                            </div>

                            {/* <!-- avatar + name --> */}
                            <div class="flex items-center gap-4">
                                <img src={person3} alt="Sarah Johnson" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white shadow-sm" />
                                <div>
                                    <h3 class="text-gray-800 font-semibold text-sm md:text-base">Henrique Rodriguez</h3>
                                    <p class="text-gray-500 text-xs md:text-sm">Working Professional</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Homelayout;