import "../css/FeaturedJob.css";
import JobCard from "./JobCard";

const jobs = [
  {
    id:1,
    title:"Frontend Developer",
    company:"Google",
    location:"Remote",
    salary:"$4k - $7k",
    type:"Full Time"
  },

  {
    id:2,
    title:"UI/UX Designer",
    company:"Spotify",
    location:"Hybrid",
    salary:"$3k - $6k",
    type:"Part Time"
  },

  {
    id:3,
    title:"Backend Developer",
    company:"Netflix",
    location:"Onsite",
    salary:"$5k - $9k",
    type:"Full Time"
  }
];

export default function FeaturedJobs() {
  return (
    <section className="featured-section">

      <div className="featured-top">

        <div>
          <h2>Featured Jobs</h2>

          <p>
            Explore opportunities from top companies
            hiring worldwide.
          </p>
        </div>

        <button>
          View All Jobs
        </button>

      </div>

      <div className="jobs-grid">

        {jobs.map(job => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            type={job.type}
          />
        ))}

      </div>

    </section>
  );
}