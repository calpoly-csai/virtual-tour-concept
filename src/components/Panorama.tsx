import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide, Texture } from "three";
import Overlay from "./Overlay";
import { Location } from "../types/Location";
import { OverlayData } from "../types/OverlayData";

let textureCache: Texture | null = null;

interface PanoramaProps {
  location: Location;
  setLocation: any;
}

export default function Panorama(props: PanoramaProps) {
  let { location, setLocation } = props;
  let { image, overlays } = location;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  let [texture, setTexture] = useState(new Texture());

  function loadPanorama() {
    // removed since texture cache will always have a value after init
    // if (textureCache) {
    //   setTexture(textureCache);
    //   return;
    // }
    import(`../assets/${image}`).then((res) => {
      const texture = new TextureLoader().load(res.default);
      textureCache = texture;
      setTexture(texture);
    });
  }

  useEffect(loadPanorama, [image]);

  let overlayComponents = overlays.map((overlay: OverlayData) => {
    return (
      <Overlay
        {...overlay}
        distanceFactor={12}
        key={overlay.title}
        onClick={() => {}}
        setLocation={setLocation}
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
