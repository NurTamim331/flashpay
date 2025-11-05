import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../public/Firebase/firebase.config'
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (current_user) => {
            setUser(current_user);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        };
    }, [auth]);
    const authData = {
        user,
        setUser,
        signUp,
        setLoading,
        loading,
        signIn
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;