import React from "react";
import { Search, LogOut, Film } from "lucide-react";
import "./navbar.css";


const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="navbar-1">
        
        <div className="first_container">
          <div className="logo">
            <Film className="h-8 w-8" style={{ color: "#ef4444" }} />
            <span className="title">CinemaHub</span>
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
            <button>
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        <div className="border-t">
          <div className="nav_items">
            <a href="/">Home</a>
            <a href="#">My Bookings</a>
            <a href="#">Contact Us</a>
            <a href="/PrivateBooking">PrivateBooking</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
