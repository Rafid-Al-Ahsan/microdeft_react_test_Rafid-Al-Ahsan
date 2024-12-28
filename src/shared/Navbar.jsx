import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("authToken");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    // Redirect to login or homepage
    window.location.href = '/'; 
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger Icon */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span>
        </button>

        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/"><span className="text-[#2485C5]">MICRO</span><span className="text-[#c6c2c2]">DEFT</span></Link>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/addcourse"><li>Add Course</li></Link>
          <Link to="/card"><li>Courses</li></Link>

          {/* Contact Button */}
          <li>
            {!token && <Link to='/registration'><button className="text-black  px-4 py-2 rounded-lg  transition duration-300">Sign Up</button></Link>}
            {token && <button onClick={handleLogout} className="text-white bg-[#2485C5] px-4 py-2 rounded-lg hover:bg-[#3ca3e8]  transition duration-300">Logout</button>}
            {!token && <Link to='/login'><button className="text-white bg-[#2485C5] px-4 py-2 rounded-lg hover:bg-[#3ca3e8]  transition duration-300">Login</button></Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
