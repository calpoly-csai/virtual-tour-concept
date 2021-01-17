/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";

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

type PathOverlayProps = {
  position: Vector3,
  scaleFactor: number,
  title: string,
  onClick: () => void,
  interaction: string
};

export default function PathOverlay(props: PathOverlayProps) {
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
