import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import AboutUs from "./Components/about.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar onNavigate={setPage} currentPage={page} />
      {page === "home" && <Hero onNavigate={setPage} />}
      {page === "about" && <AboutUs />}
    </>
  );
}

export default App;
