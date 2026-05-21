import { useEffect } from "react";
import "../css/Saved.css";
import useBookMark from "../hooks/useBookMark";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/Firebase";

export default function Saved() {

  let {error,loading,savedJobs,fetchSavedJob,removeJob}=useBookMark();

   useEffect(()=>{
    const unsub=onAuthStateChanged(
      auth,
    (user)=>{
      if(user){
        fetchSavedJob();
      }
    }
    );
    return ()=>unsub();
   },[]);

  if(error){
    return <span className="error">{error}</span>
  }

  if(loading){
    return <span className="spinner"></span>
  }

  return (
    <section className="saved-Jobs">
     <div className="saved-header">
       <h2>Saved Jobs</h2>
      <p>View and Manage your bookmarked job Opportunities.</p>
     </div>

    {savedJobs.length===0 ? (
      <div className="empty-saved">
        <h2>No Saved Jobs Yet</h2>
        <p>Bookmark jobs to see them here</p>
      </div>
    ):(
      <div className="saved-grid">
        {savedJobs.map((j)=>(
          <div className="single-saved" key={j.id}>
            <h3>{j.title}</h3>
            <span>Company: {j.company_name}</span>
            <p>Tags: {j.tags?.join(", ")}</p>
            <span>Location: {j.location}</span>

            <Link to={j.url}>Details</Link>

            <div className="remove-btn">
              <FiDelete className="remove-icon" onClick={()=>removeJob(j.id)}/>
            </div>
          </div>
        ))}
      </div>
    )}

    </section>
  )
}
