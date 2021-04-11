import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide, Texture } from "three";
import { Overlay, OverlayProps } from "./Overlay";
import { Location } from "../types/Location";
import { OverlayData } from "../types/OverlayData";

let textureCache: Texture | null = null;
// let textureCache = null;

interface PanoramaProps {
  location: Location;
}

export default function Panorama(props: PanoramaProps) {
  let { location } = props;
  let { locationId, name, image, overlays } = location;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  let [texture, setTexture] = useState(new Texture());

  function loadPanorama() {
    if (textureCache) {
      setTexture(textureCache);
      return;
    }
    import(`../assets/${image}`).then((res) => {
      const texture = new TextureLoader().load(res.default);
      textureCache = texture;
      setTexture(texture);
    });
  }

  useEffect(loadPanorama, [image]);

  const [interaction, setInteraction] = useState("");

  // const handleInteraction = (i) => {
  //   setInteraction(i);
  // };

  console.log(overlays);
  let overlayComponents = overlays.map((overlay: OverlayData) => {
    return (
      <Overlay
        {...overlay}
        distanceFactor={12}
        key={overlay.title}
        onClick={() => {}}
        // onClick={() => handleInteraction(overlay.information)}
      />
    );
  });

  return (
    <group>
      <mesh {...props} ref={mesh}>
        <sphereBufferGeometry args={[10, 100, 212]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
      {overlayComponents}
    </group>
  );
}
