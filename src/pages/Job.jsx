import "../css/Job.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import useBookMark from "../hooks/useBookMark";
import { useSearchParams } from "react-router-dom";

export default function Job() {

    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [page,setPage]=useState(1);

    const [searchParams]=useSearchParams();

    const query=searchParams.get("search") || '';
    const [search,setSearch]=useState(query);

    let {saveJob}=useBookMark();


    const filteredJobs=jobs.filter((j)=>
      j.title.toLowerCase().includes(search.toLowerCase())

    ||

    j.company_name.toLowerCase().includes(search.toLowerCase())

    ||

    j.location.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(()=>{
        const fetchJobs=async()=>{
            try{
                setLoading(true);
                const res=await fetch(`https://www.arbeitnow.com/api/job-board-api?page=${page}`)
                if(!res.ok){
                    throw new Error(`HTTP Error ${res.status}`);
                }
                const data=await res.json();
                setJobs(data.data);
                setLoading(false);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fetchJobs();
    },[page])

    if(error){
        return <p className="error">{error}</p>
    }


  return (
    <section className="jobs-section">
        <div className="jobs-header">
            <h1>Latest Job Opportunities</h1>
            <p> Browse Jobs from top companies around the world.</p>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search by Title, Company or Location" onChange={(e)=>setSearch(e.target.value)} value={search}/>
        </div>

        {loading && <span className="spinner"></span>}

        <div className="jobs-grid">
           {filteredJobs.map((j)=>(
                <div className="single-job" key={j.slug}>
                  <h4>{j.title}</h4>
                  <span>Company: {j.company_name}</span>
                  <p>Tags: {j.tags?.join(", ")}</p>
                  
                  <span>Location: {j.location}</span>

                  <Link to={j.url}>Details</Link>

                  <div className="bookmark" onClick={()=>saveJob(j)}>
                    <FiBookmark className="bookmark-icon" />
                  </div>
                </div>
))}
        </div>
        {filteredJobs.length === 0 && !loading && (

   <div className="no-results">

      <h2>No Jobs Found</h2>

      <p>
         Try searching with different keywords.
      </p>

   </div>

)}

     <div className="modern-pagination">

    <button
      className="page-btn"
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
    >
      Previous
    </button>

    <div className="page-number">
      Page {page}
    </div>

    <button
      className="page-btn next"
      onClick={() => setPage(page + 1)}
    >
      Next
    </button>

</div>
    </section>
  )
}
