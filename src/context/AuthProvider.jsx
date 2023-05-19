import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile =(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    }).then(()=>{

    }).catch(error=>{
        console.log(error);
    })

}
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut=()=>{
    signOut(auth)
    .then(()=>{})
    .error(error=>console.log(error))
}

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
        setUser(loggedUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  }, []);
  const authInfo = {
    user,
    updateUserProfile,
    registerUser,
    signinUser,
    googleLogin,
    loading,
    logOut
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
