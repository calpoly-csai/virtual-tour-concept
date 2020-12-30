/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

const controlPanelCss = css`
  background-color: white;
  border-radius: 7px;
  opacity: 0.7;
  padding: 20px 50px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 30px transparent;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0 20px #000000;
  }
`;

const titleCss = css`
  text-align: center;
`;

const instructionCss = css`
  font-size: 15px;
`;

export default function PathChoice(props) {
  return (
    <mesh position={props.position}>
      <Html scaleFactor={props.scaleFactor}>
        <div css={controlPanelCss} onClick={props.onClick}>
          <h2 css={titleCss}>{props.title}</h2>
          <p css={instructionCss}>Click to Visit</p>
        </div>
      </Html>
    </mesh>
  );
}
