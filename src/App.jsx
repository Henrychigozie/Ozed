import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import AboutUs from "./Components/About.jsx";
import Service from "./Components/Service.jsx";
import ContactPage from "./Components/ContactUs.jsx";
import BookingPage from "./Components/BookingPage.jsx";
import FloatingCallButton from "./Components/FloatingCallButton.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="/booking" element={<BookingPage />} />
          {/* Fallback for 404s */}
          <Route path="*" element={<Hero />} />
        </Routes>
        <FloatingCallButton />
      </main>
    </Router>
  );
}

export default App;
