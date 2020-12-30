import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide } from "three";
import { useLoader } from "react-three-fiber";
import PathChoice from "./PathChoice";

export default function Panorama(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const texture = useLoader(TextureLoader, props.image);

  let choices = props.paths.map((path, i) => (
    <PathChoice
      {...path}
      scaleFactor={12}
      key={path.title}
      onClick={() => props.onPathChosen(i)}
    />
  ));

  return (
    <group>
      <mesh {...props} ref={mesh}>
        <sphereBufferGeometry args={[10, 100, 212]} />
        <meshStandardMaterial map={texture} side={DoubleSide} />
      </mesh>
      {choices}
    </group>
  );
}
