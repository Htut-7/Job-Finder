import { useState } from "react";
import {auth,db} from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { serverTimestamp, updateDoc, doc } from "firebase/firestore";

export default function useSignIn() {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    const signIn=async(email,password)=>{
       try{
         let res=await signInWithEmailAndPassword(auth,email,password);
        const userRef=doc(db,"users",res.user.uid);
        await updateDoc(userRef,{
            lastLogin: serverTimestamp()
        });
        setLoading(false);
        return (res.user);
       }catch(error){
        setError(error.message);
        setLoading(false);
       }
    }

  return {loading,error,signIn}
}
