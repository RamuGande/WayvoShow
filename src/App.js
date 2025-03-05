import "./App.css";
import PrivateBooking from "./components/Navbar/private_booking/PrivateBooking";
import LoginSignup from "./components/LoginSignUp/LoginSignup";
import MovieDetails from "./components/Booking/Moviedetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home";


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login_Signup" element={<LoginSignup />} />
        <Route path="/PrivateBooking" element={<PrivateBooking />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
