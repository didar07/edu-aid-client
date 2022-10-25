import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubLogin = (providerGithubLogin) => {
        return signInWithPopup(auth, providerGithubLogin)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
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

    const authInfo = { user, providerLogin, logOut, createUser, signIn, githubLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;