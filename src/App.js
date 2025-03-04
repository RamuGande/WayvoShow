import "./App.css";
import PrivateBooking from "./components/Navbar/private_booking/PrivateBooking";
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
        <Route path="/PrivateBooking" element={<PrivateBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
