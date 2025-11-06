import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRuote = ({ children }) => {
    const { user, loading } = use(AuthContext);
    
    const location = useLocation();
    return (
        <div>
            {
                loading ? <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                    <span className="loading loading-ring loading-xl"></span>
                </div>
                :
                <></>
            }
            {
                user ? children : <Navigate state={location.pathname} to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivateRuote;