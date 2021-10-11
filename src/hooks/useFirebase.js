
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [ user, setUser] =useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const handleGoogleSingIn = () =>{
        return signInWithPopup(auth, googleProvider);
            
    }

    const logOut = () =>{
        
        signOut(auth)
            .then(() => {
            setUser({});
          })
            
    }
//Observe whether user auth state changed or not
    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
        });
    } ,[])

    return {
        user,
        handleGoogleSingIn,
        logOut
    }
    
}
export default useFirebase;