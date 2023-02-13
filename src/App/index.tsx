import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Plane, Cube } from "../components";

import "./styles.css";

export default function App() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ alpha: false }}
      camera={{ position: [-1, 5, 5], fov: 45 }}
    >
      <OrbitControls />
      <color attach="background" args={["lightblue"]} />
      <ambientLight />
      <directionalLight
        position={[10, 10, 10]}
        castShadow={true}
        shadow-mapSize={[2048, 2048]}
      />
      <Physics>
        <Plane position={[0, -2.5, 0]} />
        <Cube position={[0.1, 5, 0]} />
        <Cube position={[0, 10, -1]} />
        <Cube position={[0, 20, -2]} />
      </Physics>
    </Canvas>
  );
}
