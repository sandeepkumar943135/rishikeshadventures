import { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="container nav-inner">
        {/* Logo */}
        <div className="logo">
          <a href="/">Rishikesh <span>Adventures</span></a>
        </div>

        {/* Menu */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/Activities">Activities</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>

          <button className="book-btn">Book Now</button>
        </div>

        {/* Mobile toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;