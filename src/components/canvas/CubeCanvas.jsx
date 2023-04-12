import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const mesh = useRef();
  const cube = useGLTF("./cube_transparent_artistic_reference/scene.gltf");

  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  return (
    <mesh ref={mesh}>
      <primitive object={cube.scene} />
    </mesh>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CubeCanvas;
