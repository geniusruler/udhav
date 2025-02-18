import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/image.png";
import astronaut from "../assets/images/astronaut.png";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const [glow, setGlow] = useState(false);
  
  const navigate = useNavigate();
  // Function to initialize particles
  const particlesInit = useCallback(async (engine) => {
    console.log("✅ Particles Engine Loaded:", engine); // Debugging
    await loadSlim(engine);
  }, []);
  
  


  return (
    <div className="hero-section" id="home">
      {/* ✅ Background Particles */}
      <Particles id="tsparticles" init={particlesInit} options={{
    fullScreen: { enable: true, zIndex: -2 }, // ✅ Fix z-index
    background: { color: "transparent" },
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: { enable: true, speed: 1, direction: "none" },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      }
    },
    detectRetina: true
  }} />
     
      {/* Background Image */}
      <div className="background-container">
        <img src={astronaut} alt="Hello World Background" className="background-image" />
      </div>


      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-profile">
          <img src={profile} alt="Profile" className="profile-image" />
        </div>
        <div className="hero-text">
        <h1 className={`hero-heading ${glow ? "glow-effect" : ""}`}>
      Hi! I'm{" "}
      <span
        className="highlight"
        onAnimationEnd={() => setTimeout(() => setGlow(true), 1000)} // Delay glow after typing completes
      >
        <Typewriter
          words={["Udhav Agarwal"]}
          loop={1} // Runs once
          cursor
          cursorStyle="|"
          typeSpeed={90} // Slow-motion typing
          deleteSpeed={50} // Smooth deletion speed
          delaySpeed={1200} // Delay before restarting (if looped)
          onLoopDone={() => setGlow(true)} // Activate glow after typing completes
        />
      </span>
    </h1>
          <p>
            I am an enthusiastic Computer Science student at NYIT, a tinkerer whose interests lie in AI innovation,
            software development, and entrepreneurship. I love innovation & creation. 
          </p>
          <button className="connect-btn"onClick={() => navigate("/contact")}>Let's Connect</button>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/geniusruler" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
          <span>GitHub</span>
        </a>
        
      </div>
    </div>
  );
};

export default HeroSection;
