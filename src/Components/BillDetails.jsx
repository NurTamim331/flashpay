import React, { use } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router";
import Navbar from "./Navbar";
import Footer from '../Components/Footer'
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
const BillDetails = () => {
    let { id } = useParams();
    id = (Number)(id);
    const navigate = useNavigate();
    const bills = useLoaderData()
    const { paid, setPaid, balance, setBalance } = use(AuthContext);
    console.log(paid);

    // find the specific bill using the id from URL
    const bill = bills.find((b) => b.id === parseInt(id));
    const payBill = () => {
        // checking if the id is present in the array
        let found = false;
        for(let i = 0 ; i < paid.length; i++){
            if(paid[i] == id){
                found = true; break;
            }
        }

        if (found) {
            toast.error("Bill has already been paid", {
                position: 'bottom-center'
            });
        } else {
            if (balance - bill.amount >= 0) {
                setBalance(balance - bill.amount);
                setPaid([...paid, id]);
                toast.success("Bill Paid Successfully");
                 
            } else {
                toast.error("Insufficient Account Balance.");
            }
        }
    };
    if (!bill) {
        return (
            <div>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <div className="flex flex-col items-center justify-center h-screen">
                        <p className="text-gray-600 text-lg">Bill not found 😢</p>
                        <button
                            onClick={() => navigate(-1)}
                            className="mt-4 bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600"
                        >
                            Go Back
                        </button>
                    </div>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        );
    }

    const { bill_type, icon, organization, amount, due_date, account_no, status } = bill;

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <div className="max-w-xl  mx-auto my-10 bg-gray-200 text-white shadow-lg rounded-2xl p-6 border border-gray-100">
                    {/* Header Section */}
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={icon}
                            alt={bill_type}
                            className="w-16 h-16 object-contain bg-gray-50 rounded-xl p-2"
                        />
                        <div>
                            <h1 className="text-2xl font-semibold capitalize text-gray-800">{bill_type} Bill</h1>
                            <p className="text-gray-500">{organization}</p>
                        </div>
                    </div>

                    {/* Bill Info Section */}
                    <div className="space-y-3 text-gray-700">
                        <p>
                            <span className="font-semibold">Amount:</span>{" "}
                            <span className="text-violet-600 font-bold">৳ {amount}</span>
                        </p>
                        {due_date && (
                            <p>
                                <span className="font-semibold">Due Date:</span>{" "}
                                {new Date(due_date).toLocaleDateString()}
                            </p>
                        )}
                        {account_no && (
                            <p>
                                <span className="font-semibold">Account No:</span> {account_no}
                            </p>
                        )}
                        {status && (
                            <p>
                                <span className="font-semibold">Status:</span>{" "}
                                <span
                                    className={`${status === "paid" ? "text-green-600" : "text-red-500"
                                        } font-medium`}
                                >
                                    {status.toUpperCase()}
                                </span>
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                        >
                            Back
                        </button>
                        <button
                            onClick={payBill}
                            className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default BillDetails;
