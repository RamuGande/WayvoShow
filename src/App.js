import "./App.css";

import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home/Home";
import LoginSignup from "./components/LoginSignUp/LoginSignup"
import Admin from './components/Admin/Admin'
import ThreaterOwner from "./components/Vender/Vender"
import PrivateBooking from "./components/private_booking/PrivateBooking";
import Contact from './components/Contact/Contact'
import MovieDetails from "./components/Booking/Moviedetails";
import AdminHome from "./components/AdminHome/AdminHome";
import VenderHome from "./components/VenderHome/MovieForm";
import UserProfile from "./components/MyBooking/UserProfile";
import SeatSelection from "./components/Booking/SeatSelection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/log" element={<LoginSignup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vender" element={<ThreaterOwner />} />
        <Route path="/private-booking" element={<PrivateBooking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/venderhome" element={<VenderHome />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/seats/:showId" element={<SeatSelection />} />
        </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
