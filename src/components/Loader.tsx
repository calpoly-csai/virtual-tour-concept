/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const loaderCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 2s infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return <div css={loaderCss}></div>;
}
