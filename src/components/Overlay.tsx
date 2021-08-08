/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";
import OverlayInteractions from "./OverlayInteractions";

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const controlPanelCss = css`
  background-color: rgba(255, 255, 255, 0.87);
  border-radius: 10px;
  padding: 30px;
  width: 300px;
  text-align: left;
  box-shadow: 0 0 10px transparent;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0 10px #ffffff;
  }
`;

const titleCss = css`
  font-size: 30px;
  margin: 0;
`;

const descriptionCss = css`
  font-size: 15px;
`;

interface OverlayProps extends Tour.Overlay {
  onClick?: () => void;
}
/**
 * Converts normalized texture points to cartesian coordinates.
 * @param sphereRad Radius of textured sphere
 * @param u normalized x position on texture
 * @param v normalized y position on texture
 * @param depth normalized depth
 * @returns 3D cartesian coordinates: [x, y, z]
 */
function coordsToCartesian(
  sphereRad: number,
  u: number,
  v: number,
  depth: number
): [number, number, number] {
  // Spherical coordinates
  const phi = Math.PI * clamp(v, 0.4, 0.6);

  const theta = u * Math.PI * 2;

  // Cartesian Conversion
  let x = sphereRad * Math.sin(phi) * Math.cos(theta);
  let y = sphereRad * Math.cos(phi);
  let z = sphereRad * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
}

export default function Overlay(props: OverlayProps) {
  const distanceFactor = 12;
  let { position, onClick, title, description, actions } = props;
  const [x, y, z] = position;
  const pos = coordsToCartesian(10, x, y, 1 - z);

  return (
    <mesh position={pos}>
      <Html distanceFactor={distanceFactor}>
        <div css={controlPanelCss} onClick={onClick}>
          <h2 css={titleCss}>{title}</h2>
          <p css={descriptionCss}>{description}</p>
          <OverlayInteractions interactions={actions} />
        </div>
      </Html>
    </mesh>
  );
}
