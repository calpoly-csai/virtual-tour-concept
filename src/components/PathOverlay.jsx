/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

const controlPanelCss = css`
  background-color: pink;
  border-radius: 3px;
  opacity: 0.75;
  padding: 20px 100px;
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

export default function PathOverlay(props) {
  return (
    <mesh position={props.position}>
      <Html scaleFactor={props.scaleFactor}>
        <div css={controlPanelCss} onClick={props.onClick}>
          <h2 css={titleCss}>{props.title}</h2>
          <p css={instructionCss}>{props.interaction}</p>
        </div>
      </Html>
    </mesh>
  );
}
