import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./earth_hologram/scene.gltf");

  return <primitive object={earth.scene} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <ambientLight />
      <Earth />
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
};

export default EarthCanvas;
