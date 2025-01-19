import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      const createUser =(email, password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const logInUser =(email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }



      // observer
      useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  loading(false);
                  console.log('observer', currentUser);
            });
            return ()=>{
                 return unSubscribe()
            }
      }, []);


      const authInfo ={
            user,
            loading,
            createUser,
            logInUser,
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;