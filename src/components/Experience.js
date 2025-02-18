import React, { useCallback } from "react";
import "./Experience.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Experience = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("✅ Particles Engine Loaded:", engine); // Debugging
    await loadSlim(engine);
  }, []);

  return (
    <div className="experience-container">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -2 },
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: {
                distance: 140,
                links: { opacity: 1 },
              },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: {
              value: 100,
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Optional background styling */}
      <div className="experience-background" />

      {/* Working Experience Section */}
      <h2 className="section-title">Working Experience</h2>

      <div className="section experience-section">
        
        <div className="background-block">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">May 2024 – July 2024</div>
              <div className="timeline-content">
                <h3 className="timeline-role">Academic Technology Services Student Worker </h3>
                <h4 className="timeline-company">New York Institute of Technology</h4>
                <p>
                -- Support the staff in integrating teaching and learning tools like Canvas, LMS, and WordPress into course development projects.
                -- Worked on migrating the content and edits from the old NYIT site to the new one
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="background-block">
          <div className="timeline-item">
            <div className="timeline-date">September 2024 – Present</div>
            <div className="timeline-content">
              <h3 className="timeline-role">Website Developer</h3>
              <h4 className="timeline-company">STEP For a Better World LEO Club</h4>
              <p>
              -- Handling the organization website by updating content, editing design & features. 
              -- Used GitHub for deployment and tech stack: HTML, CSS, JS and SQL.
              </p>
            </div>
          </div>
        </div>

        <div className="background-block">
          <div className="timeline-item">
            <div className="timeline-date">October 2024 – February 2025</div>
            <div className="timeline-content">
              <h3 className="timeline-role">Software Developer</h3>
              <h4 className="timeline-company">DesiBoy.net</h4>
              <p>
              -- Used web services and RESTful APIs to facilitate smooth data sharing using robust backend architecture through Node.js and Express.js.
              -- Developed React.js and Tailwind CSS modular components and then implemented them, which has resulted in reduction of time,
                 keeping consistent designs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Experience Section */}
      <h2 className="section-title">Education Experience</h2>
      <div className="section education-exp">
        
        <div className="backgrounds-block">
          <div className="timeline-item">
            <div className="timeline-date">September 2022 - May 2026</div>
            <div className="timeline-content">
              <h3 className="timeline-role">Bachelor of Computer Science, (T.K. Steele Scholarship Award, $104k)</h3>
              <h4 className="timeline-company">New York Institute of Technology</h4>
              <p>
              -- Relevant Coursework: Data Structures & Algorithms, Introduction to Software Engineering, Computer Networks, Computer
              Organization & Architecture, Elements of Discrete Structures, Communications for Technical Professions, Information
              Systems, Digital Logistics
              -- Awards & Certificates: 7x24 Exchange Metro NY Chapter (Received $5k)
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">June 2020 - May 2022</div>
            <div className="timeline-content">
              <h3 className="timeline-role">High School Diploma (GPA: 3.90/4.00)</h3>
              <h4 className="timeline-company">Chitrakoot Public School</h4>
              <p>
              Awards & Certificates: Google Code to Learn (Winner), Vigyantaram Innovation Contest (5th rank),
              IBM workshop on Chatbot, 2nd Place Winner, Codevidhya Learn to Code (Winner)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
