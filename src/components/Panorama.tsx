import { useRef } from "react";
import { DoubleSide, Texture } from "three";
import Overlay from "./Overlay";
import { useMemo } from "react";
import ArgoAPI from "../modules/api";

interface PanoramaProps {
  location: Tour.Location;
}

export default function Panorama({ location }: PanoramaProps) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  let texture = useMemo(() => ArgoAPI.getTexture(location.panorama), [
    location,
  ]);

  let overlayComponents = location.overlays.map((overlay: Tour.Overlay) => {
    return <Overlay {...overlay} key={overlay.title} />;
  });

  return (
    <group>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[10, 100, 212]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
      {overlayComponents}
    </group>
  );
}
