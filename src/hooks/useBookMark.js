import { addDoc, collection, deleteDoc, getDocs, query, where, doc } from "firebase/firestore";
import {db,auth} from "../firebase/Firebase";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useBookMark() {

    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [savedJobs,setSavedJobs]=useState([]);

    const saveJob=async(job)=>{
        try{
            setLoading(true);
            const user=auth.currentUser;

            if(!user){
                throw new Error('Please Login First');
            }

            await addDoc(collection(db,"bookmarks"),{
                uid:user.uid,
                title: job.title,
                company: job.company_name,
                location: job.location,
                tags: job.tags || [],
                url: job.url,
                createdAt: new Date()
            });
            toast.success("Job Saved");
        }catch(error){
            setError(error.message);
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }

    const fetchSavedJob=async()=>{
        try{
            setLoading(true);
            const user=auth.currentUser;

            if(!user){
                setSavedJobs([]);
                return;
            }

            const q=query(collection(db,"bookmarks"),
            where("uid","==",user.uid)
        )

        const querySnapShot=await getDocs(q);
        const jobs=querySnapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }));
        setSavedJobs(jobs);
        setLoading(false);


        }catch(error){
            setError(error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    const removeJob=async(id)=>{
        try{
            await deleteDoc(doc(db,"bookmarks",id));

            setSavedJobs((prev)=>
                prev.filter((job)=>job.id !== id)
            )
            toast.success("Job Removed");
        }catch(error){
            setError(error.message);
            setLoading(false);
            toast.error(error.message)
        }
    }


  return {error,loading,savedJobs,saveJob,fetchSavedJob,removeJob}
}
