import React, { useEffect, useState } from "react";
import { Search, LogOut, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [user,setuser]=useState('')
  useEffect(()=>{
    setuser(sessionStorage.getItem("user"));
   
  })
  
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.setItem("user", "");
    window.location.reload();
  };

  const handleLogin = () => {
    navigate('/log');
  };

  return (
    <nav className="navbar">
      <div className="navbar-1">
        <div className="first_container">
          <div className="logo">
            <img style={{ height: '250px', width: '300px' }} src={require('../../assets/images/mainlogo.png')} alt="img" />
          </div>
          <div className="first_sub_container">
            <div className="search_and_input">
              <div className="search_bar">
                <input type="text" placeholder="Search movies" />
                <button className="search">
                  <Search />
                </button>
              </div>
            </div>
            {user ? (
              <button onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            ) : (
              <button onClick={handleLogin}>
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
        <div className="border-t">
          <div className="nav_items">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/private-booking">Private Booking</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;