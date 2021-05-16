/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InfoInteraction, LinkInteraction } from "../types/Interactions";
import { useState } from "react";

const buttonCss = css`
  padding: 7px 15px;
  background-color: #0099ff;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 10px;
  margin: 5px 0;
  font-size: 15px;

  &:active {
    transform: scale(0.95);
  }

  svg,
  span {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    margin-left: 5px;
    font-weight: 700;
  }
`;

const infoCss = css`
  padding: 7px 15px;
  background-color: #0099ff;
  color: white;
  border: none;
  width: 100%;
  /* cursor: pointer; */
  transition: transform 0.2s;
  border-radius: 10px;
  margin: 5px 0;
  font-size: 15px;

  /* &:active {
    transform: scale(0.95);
  } */

  svg,
  span {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    margin-left: 5px;
    font-weight: 700;
  }
`;

interface InfoInteractionProps {
  interaction: InfoInteraction;
}

interface LinkInteractionProps {
  interaction: LinkInteraction;
}

export function InfoInteractionC(args: InfoInteractionProps) {
  const { interaction } = args;
  const [toggleButton, setToggleButton] = useState(false);
  const { Icon, information } = interaction;
  const onClick = () => setToggleButton(!toggleButton);

  return (
    <>
      <button css={buttonCss} onClick={onClick}>
        <Icon />
        <span>{interaction.buttonText}</span>
      </button>
      {toggleButton && <div css={infoCss}>{information}</div>}
    </>
  );
}

export function LinkInteractionC(args: LinkInteractionProps) {
  const { interaction } = args;
  const { Icon, onClick } = interaction;

  return (
    <>
      <button css={buttonCss} onClick={onClick}>
        <Icon />
        <span>{interaction.buttonText}</span>
      </button>
    </>
  );
}
