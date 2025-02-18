import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import "./Projects.css";

export default function Projects() {
  // Character X-position starts around -10 so the first project is visible
  const [charX, setCharX] = useState(-10);

  // Movement direction: "left", "right", or "none"
  const [direction, setDirection] = useState("none");

  // Local hover states for the buttons
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  // Toggle left movement: if already moving left, stop; otherwise, move left.
  const toggleLeft = () => {
    setDirection((prev) => (prev === "left" ? "none" : "left"));
  };

  // Toggle right movement: if already moving right, stop; otherwise, move right.
  const toggleRight = () => {
    setDirection((prev) => (prev === "right" ? "none" : "right"));
  };

  return (
    <div className="projects-page">
      <Canvas
        className="projects-canvas"
        camera={{ position: [0, 5, 30], fov: 30 }}
      >
        <Scene charX={charX} direction={direction} setCharX={setCharX} />
      </Canvas>

      {/* Movement buttons in bottom-left */}
      <div className="controls-vertical-left">
        {/* LEFT BUTTON */}
        <button
          onMouseEnter={() => setHoverLeft(true)}
          onMouseLeave={() => setHoverLeft(false)}
          onClick={toggleLeft}
        >
          {direction === "left"
            ? "Stop"
            : hoverLeft
            ? "move left <<"
            : "<<"}
        </button>

        {/* RIGHT BUTTON */}
        <button
          onMouseEnter={() => setHoverRight(true)}
          onMouseLeave={() => setHoverRight(false)}
          onClick={toggleRight}
        >
          {direction === "right"
            ? "Stop"
            : hoverRight
            ? "move right >>"
            : ">>"}
        </button>
      </div>
    </div>
  );
}
