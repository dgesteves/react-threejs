import { PlaneProps, usePlane } from "@react-three/cannon";
import { RefObject } from "react";
import { BufferGeometry, Mesh } from "three";

export default function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref as RefObject<Mesh<BufferGeometry>>} receiveShadow={true}>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent={true} opacity={0.4} />
    </mesh>
  );
}
