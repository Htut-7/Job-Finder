import { useState } from "react";
import {auth} from "../firebase/Firebase";
import { signOut } from "firebase/auth";

export default function useSignOut() {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);

    const logOut=async()=>{
       try{
        setLoading(true);
        let res=await signOut(auth);
        setLoading(false);
        return (res.user)
       }catch(error){
        setError(error.message);
        setLoading(false);
       }
    }

  return {loading,error,logOut}
}
