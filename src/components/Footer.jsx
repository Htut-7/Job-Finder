import "../css/Footer.css";
import {
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiTwitter
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-wrapper">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="logo">
              Job<span>Finder</span>
            </div>

            <p>
              Find remote and onsite opportunities from top companies
              around the world and build your dream career faster.
            </p>

            <div className="social-icons">
              <a href="#">
                <FiTwitter />
              </a>

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiLinkedin />
              </a>

              <a href="#">
                <FiGithub />
              </a>
            </div>

          </div>

          <div className="footer-links">

            <div className="footer-column">

   <h4>Jobs</h4>

   <Link to="/job?search=remote">
      Remote Jobs
   </Link>

   <Link to="/job?search=full time">
      Full Time
   </Link>

   <Link to="/job?search=part time">
      Part Time
   </Link>

   <Link to="/job?search=intern">
      Internships
   </Link>

</div>

            <div className="footer-column">
              <h4>Resources</h4>

              <a href="#">Career Tips</a>
              <a href="#">Resume Guide</a>
              <a href="#">Interview Prep</a>
              <a href="#">Support</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Partners</a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>© 2026 JobFinder. All rights reserved.</p>

          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>

        </div>

      </div>

    </footer>
  )
}