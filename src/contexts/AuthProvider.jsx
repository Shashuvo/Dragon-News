import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    // Create User with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // context value
    const authData = {
        createUser,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;