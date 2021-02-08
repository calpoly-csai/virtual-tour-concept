/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

// Design is the same as Overlay component

const controlPanelCss = css`
  background-color: white;
  border-radius: 7px;
  opacity: 0.75;
  padding: 20px 50px;
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

export default function PathChoice({ position, scaleFactor, onClick, title }) {
  return (
    <mesh position={position}>
      <Html scaleFactor={scaleFactor}>
        <div css={controlPanelCss} onClick={onClick}>
          <h2 css={titleCss}>{title}</h2>
          <p css={instructionCss}>Click to Visit</p>
        </div>
      </Html>
    </mesh>
  );
}
