import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-900 h-20">
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link className="text-3xl text-white" to="/">
          CyberMovie
        </Link>
        <nav>
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "text-yellow-200 text-lg";
              return "text-white text-lg";
            }}
            to="/signup"
          >
            Sign Up
          </NavLink>
          <span className="text-white text-xl"> | </span>
          <NavLink
            className={({ isActive }) => {
              if (isActive) return "text-yellow-200 text-lg";
              return "text-white text-lg";
            }}
            to="/login"
          >
            Log In
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
