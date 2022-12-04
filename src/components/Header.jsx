import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-900 h-20">
      <div className="container mx-auto flex items-center justify-between h-full">
        <a className="text-3xl text-white" href>
          CyberMovie
        </a>
        <nav>
          <a className="text-white text-lg" href>
            Sign Up
          </a>
          <span className="text-white text-xl"> | </span>
          <a className="text-white text-lg" href>
            Log In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
