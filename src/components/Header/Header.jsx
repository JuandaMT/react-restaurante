import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <span>
          <Link to="/">Home /</Link>
          <Link to="/Reserve">Reserve /</Link>
          <Link to="/about">About</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
