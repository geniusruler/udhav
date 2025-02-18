// ProjectCard.js (optional separate file, or inline in Scene.js)
import React from "react";
import { useTexture } from "@react-three/drei";

export default function ProjectCard({ textureUrl, position }) {
  // Load the image as a texture
  const texture = useTexture(textureUrl);

  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      {/* Circle geometry facing the camera, radius ~1.5 */}
      <circleGeometry args={[1.5, 32]} />
      {/* Apply the texture */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
