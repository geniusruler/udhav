import React, { useMemo, useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { FaYoutube } from "react-icons/fa";

function StarryBackground() {
  // Generate star positions using useMemo so it's created only once
  const stars = useMemo(() => {
    const starCount = 1000; // Increase for more stars if desired
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      // Random position within a large cube. Adjust values as needed.
      positions[i * 3] = (Math.random() - 0.5) * 400; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400; // y
      positions[i * 3 + 2] = -Math.random() * 400 - 50; // z (placed behind the scene)
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={stars.length / 3}
          array={stars}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={1} sizeAttenuation={true} />
    </points>
  );
}

// Utility clamp
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Character model
function Model({ position, direction }) {
  const { scene, animations } = useGLTF("/models/character.glb");
  const { actions } = useAnimations(animations);
  const modelRef = useRef();

  // OPTIONAL: color tint if no texture
  useMemo(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.material.color.set("#c0c0c0");
      }
    });
  }, [scene]);

  // Switch animations if your .glb has "Walk" / "Idle"
  useEffect(() => {
    const walkAction = actions["Walking"];
    const idleAction = actions["Idle"];
    if (!walkAction || !idleAction) return;

    if (direction === "left" || direction === "right") {
      walkAction.reset().fadeIn(0.2).play();
      idleAction.fadeOut(0.2).stop();
    } else {
      idleAction.reset().fadeIn(0.2).play();
      walkAction.fadeOut(0.2).stop();
    }
  }, [direction, actions]);

  /**
   * Character rotation:
   * - If direction === "left", face left: rotation = [0, -Math.PI / 2, 0]
   * - If direction === "right", face right: rotation = [0, Math.PI / 2, 0]
   * - Otherwise (idle), keep default facing left
   */
  const getRotation = () => {
    if (direction === "right") return [0, Math.PI / 2, 0];
    if (direction === "left") return [0, -Math.PI / 2, 0];
    return [0, Math.PI / 2, 0]; // idle default
  };

  return (
    <primitive
      object={scene}
      ref={modelRef}
      position={position}
      rotation={getRotation()}
      scale={[2.0, 2.0, 2.0]}
    />
  );
}

/**
 * A project circle with optional "glass" overlay on hover
 */
function ProjectCard({
  textureUrl,
  position,
  label,
  date,
  scaleFactor = 1, // default 1 if not provided
  customClass,
  overlayText,
  youtubeUrl,
}) {
  const texture = useTexture(textureUrl);
  const [hovered, setHovered] = useState(false);
  

  // If this card has a customClass "project-one", adjust texture to simulate object-fit: contain
  if (customClass === "project-one") {
    texture.center.set(0.5, 0.5);
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
  }

  return (
    <group position={position} className={customClass} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <circleGeometry args={[3.0, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Glass overlay if hovered */}
      {hovered && customClass !== "project-one" &&  (
        <mesh position={[0, 0, 0.02]}>
          <circleGeometry args={[3.0, 64]} />
          <meshStandardMaterial color="#222" transparent opacity={0.8} />
          <Text
            position={[0, 1.4, 0.02]} 
            fontSize={0.28}
            textAlign="center"
            color="#fff"
            anchorX="center"
            anchorY="top"
            maxWidth={5}                 // Wrap text if it exceeds 5 units in width
            lineHeight={1.7}  
          >
            {overlayText}
          </Text>
          {youtubeUrl && (
            <Html position={[0, -2, 0.02]} transform occlude >
              <div
                style={{ cursor: "pointer", display: "flex", justifyContent: "center" }}
                onClick={() => window.open(youtubeUrl, "_blank")}
              >
                <FaYoutube size={20} color="red" />
              </div>
            </Html>
          )}
        </mesh>
      )}

      {/* Label text below circle */}
      <Text
        position={[0, -3.6, 0]}
        fontSize={0.5}
        color="#fff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>

      {/* Date text further below */}
      {date && (
        <Text
          position={[0, -4.4, 0]}
          fontSize={0.4}
          color="#ccc"
          anchorX="center"
          anchorY="middle"
        >
          {date}
        </Text>
      )}
    </group>
  );
}

export default function Scene({ charX, direction, setCharX }) {
  /**
   * Animate the character horizontally.
   * - Speed = 2 units/sec
   * - Clamped between x=-10..x=12 so the user can walk from the first project to the last.
   */
  useFrame((_, delta) => {
    const speed = 2;
    let nextX = charX;
    if (direction === "left") nextX -= speed * delta;
    if (direction === "right") nextX += speed * delta;
    nextX = clamp(nextX, -10, 12);
    setCharX(nextX);
  });

  /**
   * Show project cards only when the character is close enough:
   * - Project 2 appears if charX > -7
   * - Project 3 appears if charX > 1
   * - Project 4 appears if charX > 7
   */
  const showProject2 = charX > -7;
  const showProject3 = charX > 1;
  const showProject4 = charX > 7;

  return (
    <>
      <StarryBackground />
      {/* Basic lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 15, 10]} intensity={1} />

      {/* White line "floor" behind character => z=-2 */}
      <mesh position={[0, -6.9, -2]}>
        <boxGeometry args={[30, 0.3, 0.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Character model at z=0 (in front of the line), y=-6 so feet near the floor */}
      <Model position={[charX, -6, 0]} direction={direction} />

      {/* Project circles at y=4 => well above character, z=-2 => behind the line. */}
      <ProjectCard
        textureUrl="/images/image copy.png"
        position={[-11, 4, -2]}
        label="Ready?"
        overlayText=""
        customClass="project-one"
        scaleFactor={.8}
      />

      {showProject2 && (
        <ProjectCard
          textureUrl="/images/image copy 2.png"
          position={[-3.5, 4, -2]}
          label="Google Code to Learn"
          date="2019"
          overlayText={
            "- Developed an internal messaging app for students/teachers at my school using the MIT App Inventor.\n" +
            "- Won the national competition with approximately 5-10k participants.\n" +
            "- Was the only winner from my state."
          }
          scaleFactor={1}
          youtubeUrl="https://www.youtube.com/watch?v=pBy1vBO-GwM"
        />
      )}

      {showProject3 && (
        <ProjectCard
          textureUrl="/images/proj2.png"
          position={[4.5, 4, -2]}
          label="AI TM Software"
          date="2023-2024"
          overlayText={
            "- Created a task management app that uses Java Spring Boot (back-end) and React.js (front-end).\n" +
            "- Includes features such as create-read-update-delete and user authentication; integrated with MySQL database for data security." 
            
          }
          scaleFactor={1}
        />
      )}

      {/* Added extra horizontal space: x=10 -> x=12 */}
      {showProject4 && (
        <ProjectCard
          textureUrl="/images/project3.webp"
          position={[12.6, 4, -2]}
          label="AI Healthcare Assistant"
          date="2024 - 2025"
          overlayText={
            "- Designed a healthcare chatbot using OpenAI GPT-3/4 APIs to assess symptoms and schedule appointments (PostgreSQL).\n" +
            "- Built a Flask backend to handle patient queries.\n" +
            "- Deployed the chatbot on AWS using Docker."
          }
          scaleFactor={1}
        />
      )}
    </>
  );
}
