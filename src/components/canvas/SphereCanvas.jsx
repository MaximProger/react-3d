import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Sphere = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight />
      <ambientLight intensity={0.5} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, 10, 10]} />
      {/* <directionalLight position={[0, 0, 0.05]} /> */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <sphereGeometry />
        <meshStandardMaterial
          color="#A629C2"
          polygonOffset
          polygonOffsetFactor={-1}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const SphereCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Sphere imgUrl={icon} />
    </Canvas>
  );
};

export default SphereCanvas;
