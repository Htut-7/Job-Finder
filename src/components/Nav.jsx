import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import {
  FiSearch,
  FiBookmark,
  FiUser,
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiLogOut
} from "react-icons/fi";
import "../css/Nav.css";
import useSignOut from "../hooks/useSignOut";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  let {logOut}=useSignOut();

  const {user}=useContext(AuthContext);

  return (
    <header className="nav-wrapper">

      <nav className="nav-bar">
        <Link to="/" className="logo">
          <span className="logo-span">Job</span>Finder
        </Link>

        <ul className="nav-links">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/job"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FiSearch />
              Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/saved"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FiBookmark />
              Saved
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
            >
              <FiInfo />
              About
            </NavLink>
          </li>

        </ul>

        <div className="nav-action">
             {! user && <>
               <Link to="/login" className="login">
            Login
          </Link>

          <Link to="/register" className="register">
            <FiUser />
            Register
          </Link>
              </>}
         

          {!! user &&<button className="logout-btn" onClick={logOut}>
            <FiLogOut/>
            Logout
          </button>}

        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <NavLink
          to="/"
          className="mobile-item"
        >
          <FiHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/jobs"
          className="mobile-item"
        >
          <FiSearch />
          <span>Jobs</span>
        </NavLink>

        <NavLink
          to="/saved"
          className="mobile-item"
        >
          <FiBookmark />
          <span>Saved</span>
        </NavLink>

        <NavLink
          to="/about"
          className="mobile-item"
        >
          <FiInfo />
          <span>About</span>
        </NavLink>

        <Link to="/login" className="mobile-login">
          Login
        </Link>

        <Link to="/register" className="mobile-register">
          Register
        </Link>

        <button className="mobile-logout">
          <FiLogOut/>
          Logout
        </button>

      </div>

    </header>
  );
}