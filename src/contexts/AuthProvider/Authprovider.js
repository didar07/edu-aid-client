import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside cng', currentUser)
            setUser(currentUser)
        })

        return () => {
            Unsubscribe()
        }

    }, [])

    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;