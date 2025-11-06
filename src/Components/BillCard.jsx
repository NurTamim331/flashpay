import React, { use } from "react";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const BillCard = ({ bill }) => {
    const {paid} = use(AuthContext)
    const { bill_type, icon, organization, amount, due_date,id } = bill;
    const navigate = useNavigate();
    const handleRedirect = ()=>{
        navigate(`/billDetails/${bill.id}`)
    }
    return (
        <div className="bg-blue-100 shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300 flex justify-between items-center cursor-pointer border border-gray-100">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                <img
                    src={icon}
                    alt={bill_type}
                    className="w-12 h-12 object-contain bg-gray-50 rounded-xl p-2"
                />
                <div>
                    <h2 className="text-lg font-semibold capitalize text-gray-800 flex gap-x-2 justify-between items-center">
                        {bill_type} {paid.includes((Number)(id)) ? <SiTicktick color="green"/>:<></>}
                    </h2>
                    <p className="text-sm text-gray-500">{organization}</p>
                    {due_date && (
                        <p className="text-xs text-gray-400 mt-1">
                            Due: {new Date(due_date).toLocaleDateString()}
                        </p>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
                <p className="text-xl font-bold text-violet-600">৳ {amount}</p>
                <button onClick={handleRedirect}
                    className="mt-2 text-sm bg-violet-500 text-white px-3 py-1 rounded-md hover:bg-violet-600"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default BillCard;
