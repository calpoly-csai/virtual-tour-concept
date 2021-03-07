/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";
import OverlayInteractions from "./OverlayInteractions";

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

export default function Overlay({
  position,
  scaleFactor,
  onClick,
  title,
  description,
  interactions,
}) {
  return (
    <mesh position={position}>
      <Html scaleFactor={scaleFactor}>
        <div css={controlPanelCss} onClick={onClick}>
          <h2 css={titleCss}>{title}</h2>
          <p css={descriptionCss}>{description}</p>
          <OverlayInteractions interactions={interactions} />
        </div>
      </Html>
    </mesh>
  );
}
