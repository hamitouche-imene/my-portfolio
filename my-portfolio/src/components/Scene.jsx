import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="#B6465F" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ height: "300px", width: "300px" }}>
      <ambientLight intensity={1} />
      <Sphere />
    </Canvas>
  );
}
