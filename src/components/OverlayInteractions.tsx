/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Interaction, InfoInteraction } from "../types/Interactions";

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
interface OverlayInteractionsProps {
  interactions: Interaction[];
}

export default function OverlayInteractions(args: OverlayInteractionsProps) {
  let { interactions } = args;
  let buttons = interactions.map((interaction: Interaction, key) => {
    const { Icon, onClick } = interaction;
    const isVisible = false;

    // grab information if InfoInteraction
    if (interaction instanceof InfoInteraction) {
      var { information } = interaction;
      // TODO: Create a ShowInfo component with useState to toggle its appearance
    }

    return (
      <>
        <button css={buttonCss} key={key} onClick={onClick}>
          <Icon />
          <span>{interaction.buttonText}</span>
        </button>
        {information && isVisible && <div>information</div>}
      </>
    );
  });

  return <div>{buttons}</div>;
}
