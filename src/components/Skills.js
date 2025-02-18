import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./Skills.css";
import { SiReact,  SiDjango, SiGit, SiDocker, SiFigma, SiNodedotjs, SiFlask, SiSpringboot, SiTensorflow, SiJavascript, SiMysql, SiBlender, SiThreedotjs } from "react-icons/si";

/* React Icons (Simple Icons) */
import {
  
  SiHtml5,
  SiCss3,
  SiGo,
  SiCplusplus,
  SiPython,
  
} from "react-icons/si";

// If you have a plugin like 'babel-plugin-glsl/macro', you can import glsl from "babel-plugin-glsl/macro";
// For simplicity, let's inline the shader code as strings here:

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;

  // Simple pseudo-random function based on UV coordinates
  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    // Scale UV coordinates to repeat the grid more often
    vec2 uv = vUv * 12.0;
    
    // Move the grid vertically over time
    uv.y += uTime * 0.5;

    // Create horizontal line effect:
    float lineWidth = 0.02;
    float line = step(lineWidth, fract(uv.y));

    // Use a pseudo-random flicker based on the grid cell
    float flicker = rand(floor(uv));
    float intensity = line * (0.4 + 0.6 * flicker);

   vec3 electricSilver = vec3(0.75, 0.75, 0.75); // adjust these values as needed
  // Mix black and electric silver based on a time-varying factor
  vec3 baseColor = mix(vec3(0.1), electricSilver, fract(uTime * 0.2));

  // Multiply the base color by the computed intensity
  vec3 color = baseColor * intensity;

  gl_FragColor = vec4(color, 1.0);
}
`;


/* A small helper component that draws our grid plane with a custom shader. */
function GridPlane() {
  const materialRef = useRef();

  // Animate the uniform 'uTime' + optional camera motion
  useFrame(({ clock, camera }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
    // Example camera animation (slight zoom in/out):
    camera.position.z = 5 + Math.sin(clock.getElapsedTime() * 0.5) * 2;
    camera.lookAt(0, 0, 0);
  });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  return (
    <mesh>
      {/* A large plane to fill the view */}
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

const Skills = () => {
  return (
    <div className="skills-page">
      <Canvas className="skills-canvas" camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["black"]} />
        <GridPlane />
      </Canvas>


      <div className="skills-heading">My Technical Skills</div>
      
      {/* Center everything in the page */}
      <div className="skills-container">
      
        {/* The gradient box that holds the ring of skills */}
        <div className="gradient-box">
          {/* Center text */}
          <div className="center-text"> Languages</div>

          {/* Circle container for skill items */}
          <div className="circle-container">
            {/* 1) Java */}
            <div className="skill-item" style={{ "--angle": "-90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 85 }}>
                <div className="skill-icon">
                  <SiJavascript size={24} color="#E76F00" />
                </div>
                <span className="skill-label">Java</span>
              </div>
            </div>

            {/* 2) HTML */}
            <div className="skill-item" style={{ "--angle": "-30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 90 }}>
                <div className="skill-icon">
                  <SiHtml5 size={24} color="#E44D26" />
                </div>
                <span className="skill-label">HTML</span>
              </div>
            </div>

            {/* 3) CSS */}
            <div className="skill-item" style={{ "--angle": "30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 80 }}>
                <div className="skill-icon">
                  <SiCss3 size={24} color="#1572B6" />
                </div>
                <span className="skill-label">CSS</span>
              </div>
            </div>

            {/* 4) Go */}
            <div className="skill-item" style={{ "--angle": "150deg" }}>
              <div className="progress-circle" style={{ "--percentage": 60 }}>
                <div className="skill-icon">
                  <SiGo size={24} color="#00ADD8" />
                </div>
                <span className="skill-label">Go</span>
              </div>
            </div>

            {/* 5) C++ */}
            <div className="skill-item" style={{ "--angle": "210deg" }}>
              <div className="progress-circle" style={{ "--percentage": 75 }}>
                <div className="skill-icon">
                  <SiCplusplus size={24} color="#00599C" />
                </div>
                <span className="skill-label">C++</span>
              </div>
            </div>

            {/* 6) Python */}
            <div className="skill-item" style={{ "--angle": "90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 85 }}>
                <div className="skill-icon">
                  <SiPython size={24} color="#3776AB" />
                </div>
                <span className="skill-label">Python</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-box">
          <div className="center-text">Frameworks</div>
          <div className="circle-container">
            {/* Example ring of frameworks */}
            <div className="skill-item" style={{ "--angle": "-90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 80 }}>
                <div className="skill-icon">
                  <SiReact size={24} color="#61DBFB" />
                </div>
                <span className="skill-label">React</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "-30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiNodedotjs size={24} color="#339933" />
                </div>
                <span className="skill-label">Node.js</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 60 }}>
                <div className="skill-icon">
                  <SiDjango size={24}  />
                </div>
                <span className="skill-label">Django</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "205deg" }}>
              <div className="progress-circle" style={{ "--percentage": 60 }}>
                <div className="skill-icon">
                  <SiSpringboot size={24}  />
                </div>
                <span className="skill-label">Springboot</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiFlask size={24}  />
                </div>
                <span className="skill-label">Flask</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "150deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiTensorflow size={24}  />
                </div>
                <span className="skill-label">Tensor Flow</span>
              </div>
            </div>
            {/* ... Add more if you want ... */}
          </div>
        </div>

        {/* 3) Tools Box */}
        <div className="gradient-box">
          <div className="center-text">Tools</div>
          <div className="circle-container">
            {/* Example ring of tools */}
            <div className="skill-item" style={{ "--angle": "-90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 80 }}>
                <div className="skill-icon">
                  <SiGit size={24} color="#F05032" />
                </div>
                <span className="skill-label">Git/Github</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "-30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 65 }}>
                <div className="skill-icon">
                  <SiDocker size={24} color="#2496ED" />
                </div>
                <span className="skill-label">Docker</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "30deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiFigma size={24} color="#A259FF" />
                </div>
                <span className="skill-label">Figma</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "90deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiThreedotjs size={24} color="#A259FF" />
                </div>
                <span className="skill-label">Three.js</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "210deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiMysql size={24} />
                </div>
                <span className="skill-label">MySQL</span>
              </div>
            </div>
            <div className="skill-item" style={{ "--angle": "150deg" }}>
              <div className="progress-circle" style={{ "--percentage": 70 }}>
                <div className="skill-icon">
                  <SiBlender size={24} />
                </div>
                <span className="skill-label">Blender</span>
              </div>
            </div>
            {/* ... Add more if you want ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
