import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Install from "./pages/Install";
import LoginSuccess from "./pages/LoginSuccess";
import ConnectionSuccess from "./pages/ConnectionSuccess";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-V5TRW2V091");
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginsuccess" element={<LoginSuccess />} />
        <Route path="/connectionsuccess" element={<ConnectionSuccess />} />
        <Route path="/install" element={<Install />} />
      </Routes>
    </Router>
  );
}

export default App;
