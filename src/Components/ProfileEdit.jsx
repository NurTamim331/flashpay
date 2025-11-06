import React, { use, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ProfileEdit = () => {
    
    const { loading,user } = use(AuthContext);
    if(loading){
        return <span className='loading-ball loading'></span>
    }
    const [imageUrl, setImageUrl] = useState(user.photoURL);
    const [name,setName] =  useState(user.displayName);
    const navigate = useNavigate()
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        let url = form.new_url.value;
        let nm = form.new_name.value;
        if(!url){
            url = user.photoURL;
        }
        if(!nm){
            nm = user.displayName
        }
        setName(nm)
        setImageUrl(url)
        try {
            // ✅ Update the Firebase Auth user’s photoURL
            await updateProfile(user, {
                photoURL: url,
                displayName:nm
            });

            toast.success("Profile image updated successfully!");
            navigate('/profile')
        } catch (error) {
            toast.error("Failed to update profile image!");
            console.log(error.message); // gotta check it
        }
    };

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex justify-center items-center bg-gray-50'>
                <div className='bg-white p-5 flex justify-center items-center'>
                    <img src={user.photoURL} className='max-w-20' />
                    <form onSubmit={handleUpdate} className='flex flex-col justify-center gap-y-2 items-center p-2'>
                        <label htmlFor="new_url">Provide the new image URL here</label>
                        <input name='new_url' className='bg-gray-100 p-2 input' type="text" placeholder='image url' />
                        <label htmlFor="name">New User Name</label>
                        <input name='new_name' className='bg-gray-100 p-2 input' type="text" placeholder='New User Name' />
                        <button type='submit' className='btn hover:bg-green-400 bg-green-200'>Submit</button>
                    </form>
                </div>
            </main>
            <footer>
                <Footer>

                </Footer>
            </footer>
        </div>
    );
};

export default ProfileEdit;