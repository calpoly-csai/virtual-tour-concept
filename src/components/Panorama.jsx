import { useRef, useState, useEffect } from "react";
import { TextureLoader, DoubleSide, Texture } from "three";
import PathChoice from "./PathChoice";

const textureCache = {};

export default function Panorama(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  let [texture, setTexture] = useState(new Texture());

  function loadPanorama() {
    if (props.image in textureCache) {
      setTexture(textureCache[props.image]);
      return;
    }
    import(`../assets/${props.image}`).then((res) => {
      const texture = new TextureLoader().load(res.default);
      textureCache[props.image] = texture;
      setTexture(texture);
    });
  }

  useEffect(loadPanorama, [props.image]);

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
        <meshBasicMaterial map={texture} side={DoubleSide} />
      </mesh>
      {choices}
    </group>
  );
}
