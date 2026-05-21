import { useState } from "react";
import "../css/Hero.css";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const [search,setSearch]=useState('');

  const navigate=useNavigate();

  const handleSearch=()=>{
    navigate(
      `/job?search=${search}`
    )
  }

  return (
    <section className="hero-section">

      <div className="overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          <FiMapPin />
          Trusted by thousands of job seekers
        </div>

        <h1>
          Find Your Dream <span>Career</span> <br />
          With Top Companies
        </h1>

        <p>
          Search thousands of remote and onsite jobs from the best
          companies around the world and start your next career journey.
        </p>

        <div className="hero-search">

          <div className="search-input">
            <FiSearch />
            <input
              type="text"
              placeholder="Search jobs, companies, keywords..."
              onChange={(e)=>setSearch(e.target.value)} value={search}
            />
          </div>

          <button onClick={handleSearch}>
            Search Jobs
          </button>

        </div>

      </div>

    </section>
  );
}