import "../css/About.css";

import {
   FiUsers,
   FiBriefcase,
   FiGlobe,
   FiTarget
} from "react-icons/fi";

export default function About() {

  return (

    <section className="about-section">

      <div className="about-header">

        <span className="about-badge">
          About JobFinder
        </span>

        <h1>
          Connecting Talent With
          <span> Opportunity</span>
        </h1>

        <p>
          JobFinder helps professionals discover
          remote and onsite opportunities from
          top companies around the world with a
          fast, modern, and user-friendly experience.
        </p>

      </div>

      <div className="about-grid">

        <div className="about-card">

          <div className="about-icon">
            <FiBriefcase />
          </div>

          <h3>Thousands of Jobs</h3>

          <p>
            Explore job opportunities across
            multiple industries including tech,
            design, marketing, and business.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">
            <FiUsers />
          </div>

          <h3>Trusted by Job Seekers</h3>

          <p>
            Join thousands of professionals using
            JobFinder to build their dream careers.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">
            <FiGlobe />
          </div>

          <h3>Global Opportunities</h3>

          <p>
            Discover remote and onsite jobs from
            companies around the world in one place.
          </p>

        </div>

        <div className="about-card">

          <div className="about-icon">
            <FiTarget />
          </div>

          <h3>Simple & Fast Search</h3>

          <p>
            Search jobs by title, company,
            location, or keywords with a clean
            and responsive experience.
          </p>

        </div>

      </div>

    </section>

  )

}