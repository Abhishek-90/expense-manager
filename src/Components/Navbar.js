import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

const Navbar = (props) => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem('authToken');
        navigate('/');
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>
            </ul>
          </div>
          {localStorage.getItem("authToken") === null ? (
            <Link className="btn btn-primary mx-2" to="/signup" role="button">
              Sign Up
            </Link>
          ) : (
            <button className="btn btn-primary mx-2" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
