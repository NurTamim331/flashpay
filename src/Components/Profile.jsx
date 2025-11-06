import React, { use } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    const { user } = use(AuthContext); // user from Firebase context
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/edit-profile");
    };
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                
                <div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <div className="relative bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
                        {/* Edit icon */}
                        <button
                            onClick={handleEdit}
                            className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            <FaEdit size={22} />
                        </button>

                        {/* Profile picture */}
                        <div className="flex justify-center mb-4">
                            <img
                                src={
                                    user.photoURL ||
                                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                }
                                alt="Profile"
                                className="w-28 h-28 rounded-full object-cover border-4 border-blue-400"
                            />
                        </div>

                        {/* User info */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                            {user.displayName || "Unnamed User"}
                        </h2>
                        <p className="text-gray-600 mb-4"><span className='font-semibold'>Email</span> : {user.email}</p>

                        <div className="text-sm text-gray-500 space-y-1">
                            <p>
                                <strong>Account Created:</strong>{" "}
                                {user.metadata?.creationTime
                                    ? new Date(user.metadata.creationTime).toLocaleString()
                                    : "N/A"}
                            </p>
                            <p>
                                <strong>Last Sign-in:</strong>{" "}
                                {user.metadata?.lastSignInTime
                                    ? new Date(user.metadata.lastSignInTime).toLocaleString()
                                    : "N/A"}
                            </p>
                            <p>
                                <strong>User ID:</strong> {user.uid}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Profile;