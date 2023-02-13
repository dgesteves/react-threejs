import { BoxProps, useBox } from "@react-three/cannon";
import { RefObject } from "react";
import { BufferGeometry, Mesh } from "three";

export default function Cube(props: BoxProps) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    rotation: [0.4, 0.2, 0.5],
    ...props,
  }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 10, 0);
      }}
      receiveShadow={true}
      castShadow={true}
      ref={ref as RefObject<Mesh<BufferGeometry>>}
    >
      <boxGeometry />
      <meshLambertMaterial color="hotpink" />
    </mesh>
  );
}
