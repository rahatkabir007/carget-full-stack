import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    //user hook for email/google signin
    const [user, setUser] = useState({});
    //hook for refresh handling
    const [isLoading, setIsLoading] = useState(true);

    //error set
    const [success, setSuccess] = useState('');
    const [authError, setAuthError] = useState('');
    const [passError, setPassError] = useState('');

    //auth for everyone
    const auth = getAuth();

    //google provider
    const googleProvider = new GoogleAuthProvider();

    //registration functionality 
    const registerUser = (email, password, history, setMatch) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = '/home'
                setSuccess('User Regestration Succesfull!')
                history.push(destination);
                setAuthError('');
                setPassError('');
            })
            .catch(() => {
                setAuthError('Email Already In Use!');
                setPassError('');
                setSuccess('');
                setMatch('');
            })
            .finally(() => setIsLoading(false));
    }

    //login functionality
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/home'
                history.replace(destination);
                setSuccess('User Login Succesfull!')
                setPassError('');
                setAuthError('');
            })
            .catch((error) => {
                setPassError("Your Email or Password Could Be Incorrect or Empty!");
                setAuthError('');
                setSuccess('');
            })
            .finally(() => setIsLoading(false));
    }


    //handling google sign in
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(() => {
                const destination = location.state?.from || '/home'
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {
                setAuthError('Email Already In Use!');
            })
            .finally(() => setIsLoading(false));
    }

    //observing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    //handling signout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setSuccess('');
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logOut,
        success,
        setAuthError,
        authError,
        passError


    }
};

export default useFirebase;