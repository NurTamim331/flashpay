import React, { createContext, useEffect, useState } from "react";
import app from "../../public/firebase/firebase.config";
export const AuthContext = createContext();
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [paid,setPaid] = useState([]);
    const [user, setUser] = useState(null);
    // loading state mainly handles the async operation of firebase. When we are waiting for firebase to respond, we can show a loader using this loading state.
    // laoding true means we are waiting for firebase, so don't redirect yet
    const [loading, setLoading] = useState(true);
    const [balance, setBalance] = useState(10000);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const logOut = () => {
        return signOut(auth);
    };
    // aoon auth state change ensures that the user is getting saved in login/register and also on page refresh
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // now that we have the user data, we can say that loadin is done
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        balance,
        setBalance,
        paid,setPaid
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;