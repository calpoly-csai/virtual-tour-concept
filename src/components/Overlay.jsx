/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";
import OverlayInteractions from "./OverlayInteractions"

const controlPanelCss = css`
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  opacity: 0.75;
  padding: 20px 20px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 30px transparent;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0 25px #ffffff;
  }
`;

const titleCss = css`
  text-align: center;
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
  interactions
}) {
  
  return (
    <mesh position={position}>
      <Html scaleFactor={scaleFactor}>
        <div css={controlPanelCss} onClick={onClick}>
          <h2 css={titleCss}>{title}</h2>
          <p css={descriptionCss}>{description}</p>
          <OverlayInteractions interactions={interactions}/>
        </div>
      </Html>
    </mesh>
  );
}
