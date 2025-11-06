import React, { use } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ForgetPassword = () => {
    const { resetEmail } = use(AuthContext);
    const navigate = useNavigate();
    const handleReset = (e) => {
        e.preventDefault();
        const email =  e.target.mail.value;
        resetEmail(email).then(()=>{
            toast('Password reset email sent');

        }).catch(error=>{
            toast.error(error.message);
        }).finally(()=>{
            navigate('/login');
        })
    }
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex justify-center items-center mx-auto bg-white'>
                <form onSubmit={handleReset} className='bg-yellow-50 flex justify-center items-center flex-col p-5 my-10 rounded-lg gap-y-3' >
                    <label htmlFor="mail">Reset mail will be sent</label>
                    <input name='mail' type="text" placeholder='Your email' className='input p-2' />
                    <button type='submit' className='btn bg-[#93a4fe]'>Submit</button>
                </form>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ForgetPassword;