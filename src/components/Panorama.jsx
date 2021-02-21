import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide, Texture } from "three";
import Overlay from "./Overlay";
import {OverlayType} from "../modules/Objects/OverlayType";
import PathChoice from "./PathChoice";

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

  // let choices = paths.map((path, i) => (
  //   <PathChoice
  //     {...path}
  //     scaleFactor={12}
  //     key={path.title}
  //     onClick={() => onPathChosen(i)}
  //   />
  // ));

  // TODO: Move all this actiontype stuff over to overlaytype components
  console.log(overlays);
  console.log(interaction);
  let Overlays = overlays.map((overlay) => {

    // TODO: Get rid of overlay types, make them action types
    switch (overlay.overlayType) {
      case OverlayType.SHOWINFO:
        return <Overlay
          {...overlay}
          scaleFactor={12}
          key={overlay.title}
          interaction={interaction}
          onClick={() => handleInteraction(overlay.information)}
          />

      // case OverlayType.TRAVERSE:

      //   break;

      default:
        return <Overlay
          {...overlay}
          scaleFactor={12}
          key="Not a valid overlay"
          interaction={interaction}
          onClick={() => handleInteraction(overlay.information)}
          />
    }
  });

  return (
    <group>
      <mesh {...props} ref={mesh}>
        <sphereBufferGeometry args={[10, 100, 212]} />
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
      {/* {choices} */}
      {Overlays}
    </group>
  );
}
