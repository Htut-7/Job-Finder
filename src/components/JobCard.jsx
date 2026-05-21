import "../css/JobCard.css";
import { FiMapPin, FiBookmark } from "react-icons/fi";

export default function JobCard({
  title,
  company,
  location,
  salary,
  type,
  logo,
  url
}) {
  return (
    <div className="job-card">

      <div className="job-top">

        <div className="job-company">

          <div className="company-logo">
            {logo ? (

      <img
         src={logo}
         alt={company}
         onError={(e)=>{
            e.target.style.display = "none";
         }}
      />

   ) : (

      <span>{company?.charAt(0)}</span>

   )}
          </div>

          <div>
            <h4>{company}</h4>
            <span>{location}</span>
          </div>

        </div>

        <button className="bookmark-btn">
          <FiBookmark />
        </button>

      </div>

      <h3>Job Title:{title}</h3>

      <div className="job-tags">

        <span>{type}</span>

        <span className="salary">
          {salary}
        </span>

      </div>

      <div className="job-bottom">

        <div className="job-location">
          <FiMapPin />
          <span>{location}</span>
        </div>

          <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="details-btn"
    >
      Details
    </a>

      </div>

    </div>
  );
}