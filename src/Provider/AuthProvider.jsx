import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Manage user
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('user find',currentUser)
        setUser(currentUser)
    });
    return () => {
        unSubscribe();
    }

  },[])
  //Sign in
  const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  //Logout ouser
  const logOut =()=>{
    return signOut(auth);
  }
  const authInfo = {
    user,
    createUser,
    logOut,
    signIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
