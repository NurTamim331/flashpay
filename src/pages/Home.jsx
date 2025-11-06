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


const Home = () => {
    return (
        <div >
            <header className='w-full ' >
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
            <Outlet>
                
            </Outlet>
            </main>
            <footer className='w-full' >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;