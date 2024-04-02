import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../services/firebase.config';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});   
 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

export async function signUp(username, email, password, phone) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', email), {
            username: username,
            phone: phone
        });
        console.log('User signed up successfully!');
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error; // Rethrow error to handle it where the function is called
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Return user object
    } catch (error) {
        console.error('Error signing in:', error.message);
        throw error; // Rethrow error to handle it where the function is called
    }
}

export function useAuth() {
    return useContext(AuthContext);
}
