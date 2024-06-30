import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Otp from "./pages/Otp.jsx";
import NavigationSetup from "./pages/NavigationSetup.jsx";
import Tracking from "./pages/Tracking.jsx";
import UserTypeSelection from "./pages/UserTypeSelection.jsx";
import Passenger from "./pages/Passenger.jsx";
import Driver from "./pages/Driver.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/navigation-setup" element={<NavigationSetup />} />
        <Route exact path="/tracking" element={<Tracking />} />
        <Route exact path="/user-type-selection" element={<UserTypeSelection />} />
        <Route exact path="/passenger" element={<Passenger />} />
        <Route exact path="/driver" element={<Driver />} />
      </Routes>
    </Router>
  );
}

export default App;