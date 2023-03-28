import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navb = () => {
  return (
    <>
      <main>
        <nav>
          <div className="nav-left">
            <h2 className="nav-title">Name</h2>
          </div>
          <div className="nav-right">
            <ol className="nav-list">
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>

              <NavLink to="works" className="nav-item">
                My Works
              </NavLink>
              <NavLink to="contact" className="nav-item">
                Contact
              </NavLink>
            </ol>
          </div>
        </nav>

        <Outlet />

        <footer className="footer">&copy; Aditya 2023</footer>
      </main>
    </>
  );
};

export default Navb;
