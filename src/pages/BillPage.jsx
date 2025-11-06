import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import BillCard from '../Components/BillCard';

const BillPage = () => {
    const bills = useLoaderData();
    const [filter, setFilter] = useState(""); // default: show all

    // Ensure bills is an array, otherwise showing error in firebase deployment
    const billsArray = Array.isArray(bills) ? bills : [];

    // Filter bills by bill_type
    const filteredBills = filter? 
            billsArray.filter(bill => bill.bill_type.toLowerCase() === filter.toLowerCase())
            : billsArray;

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='my-4 w-11/12 mx-auto'>
                {/* Filter dropdown */}
                <div className="mb-4 flex justify-center">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value="">All Bills</option>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="water">Water</option>
                        <option value="postpaid">Postpaid</option>
                        <option value="cable tv">Cable TV</option>
                    </select>
                </div>

                {/* Bill cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2'>
                    {filteredBills.map(bill => (
                        <BillCard key={bill.id} bill={bill} />
                    ))}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default BillPage;
