import { useState } from "react"
import {auth,db} from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

export default function useSignUp() {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    const signUp=async(name,email,password)=>{
        try{
            setLoading(true);
            const res=await createUserWithEmailAndPassword(auth,email,password);
           await  setDoc(doc(db,"users",res.user.uid),{
                name,
                email,
                createdAt: serverTimestamp()
            });
             setLoading(false);
            return (res.user);
        }catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,signUp}
}
