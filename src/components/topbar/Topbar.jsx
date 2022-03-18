import React from 'react'
import { NavLink } from "react-router-dom";

// STYLES
import './Topbar.css'

const Topbar = () => {

  return (
    <>
      <header class="p-2 bg-dark text-white fixed-top NavHeight">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center">
              <li>
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="nav-link mx-2 px-2 text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/companies"
                  activeClassName="active"
                  className="nav-link mx-2 px-2 text-white"
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shares"
                  activeClassName="active"
                  className="nav-link mx-2 px-2 text-white"
                >
                  Shares
                </NavLink>
              </li>
            </ul>

            <div className="text-end d-flex">
              <NavLink
                className="nav-link mx-2 px-2 text-white btn btn-outline-warning"
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>

              <NavLink
                className="nav-link mx-2 px-2 text-white btn btn-outline-warning"
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Topbar