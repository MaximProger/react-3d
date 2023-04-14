import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Rainbow = () => {
  const rainbow = useGLTF("./jack_trigger/scene.gltf");

  return (
    <mesh rotation={[0.2, 5, -0.2]} position={[0, -1, 0]}>
      <primitive object={rainbow.scene} scale={2.5} />
    </mesh>
  );
};

const RainbowCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <ambientLight />
      <pointLight position={[0, 20, 10]} intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Rainbow />
      <OrbitControls />
    </Canvas>
  );
};

export default RainbowCanvas;
