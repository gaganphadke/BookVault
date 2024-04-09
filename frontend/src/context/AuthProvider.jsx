import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth = getAuth(app);
const provider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const[user,setuser]=useState(null);
    const [loading,setloading]=useState(true);
    const createUser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

const login= ()=>{
    setloading(true)
    return signInWithPopup(auth,provider)
}

const login1=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>{
    return signOut(auth)
}

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setuser(currentUser);
            setloading(false);
        });
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        createUser,
        login,
        loading,
        login1,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider