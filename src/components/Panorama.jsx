import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide, Texture } from "three";
import Overlay from "./Overlay";

const textureCache = {};

export default function Panorama(props) {
  let { location, onPathChosen, tourGraph } = props;
  let { locationId, name, image, overlays } = location;

  // This reference will give us direct access to the mesh
  const mesh = useRef();
  let [texture, setTexture] = useState(new Texture());

  function loadPanorama() {
    if (image in textureCache) {
      setTexture(textureCache[image]);
      return;
    }
    import(`../assets/${image}`).then((res) => {
      const texture = new TextureLoader().load(res.default);
      textureCache[image] = texture;
      setTexture(texture);
    });
  }

  useEffect(loadPanorama, [image]);

  const [interaction, setInteraction] = useState("");

  const handleInteraction = (i) => {
    setInteraction(i);
  };

  console.log(overlays);
  let overlayComponents = overlays.map((overlay) => {
    return (
      <Overlay
        {...overlay}
        scaleFactor={12}
        key={overlay.title}
        onClick={() => handleInteraction(overlay.information)}
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
