/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

const controlPanelCss = css`
  background-color: rgb(193, 255, 204);
  border-radius: 3px;
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

const instructionCss = css`
  font-size: 15px;
`;

export default function PathOverlay({position, scaleFactor, onClick, title, interaction}) {
  return (
    <mesh position={position}>
      <Html scaleFactor={scaleFactor}>
        <div css={controlPanelCss} onClick={onClick}>
          <h2 css={titleCss}>{title}</h2>
          <p css={instructionCss}>{interaction}</p>
        </div>
      </Html>
    </mesh>
  );
}
