import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import BillCard from '../Components/BillCard';

const BillPage = () => {
    const bills = useLoaderData();
    console.log(bills);
    const billsArray = Array.isArray(bills) ? bills : [];
    console.log(billsArray);
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 my-2 w-11/12 mx-auto'>
                {
                    bills.map(bill=><BillCard bill={bill}></BillCard>)
                }
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BillPage;