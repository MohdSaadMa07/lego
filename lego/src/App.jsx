import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Community from "./Components/Community/Community";
import Contact from "./Components/Contact/Contact";
import "./App.css"; // Ensure global styles are included
import Discover from "./Components/DIscover/Discover";

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Discover/>
      <Community />
      <Contact />
      
    </>
  );
}
