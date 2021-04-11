/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, ArrowRight, Info } from "react-feather";
import {
  Interaction,
  InfoInteraction,
  LinkInteraction,
  TraverseInteraction,
} from "../types/Interactions";

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

// returns the proper icon for each interaction
function returnIcon(interaction: Interaction) {
  if (interaction instanceof LinkInteraction) {
    return Link;
  } else if (interaction instanceof TraverseInteraction) {
    return ArrowRight;
  }
  // default to the Info icon
  return Info;
}

// opens a new tab with the given link
function linkOnClick(link: string) {
  window.open(link, "_blank");
}

// returns the proper onClick method for each interaction
function returnOnClick(interaction: Interaction) {
  if (interaction instanceof LinkInteraction) {
    return () => linkOnClick(interaction.url);
  } else {
    return () => {};
  }
}

interface OverlayInteractionsProps {
  interactions: Interaction[];
}

export default function OverlayInteractions(args: OverlayInteractionsProps) {
  let { interactions } = args;
  let buttons = interactions.map((interaction, key) => {
    const Icon = returnIcon(interaction);
    let onClick = returnOnClick(interaction);
    return (
      <button css={buttonCss} key={key} onClick={onClick}>
        <Icon />
        <span>{interaction.buttonText}</span>
      </button>
    );
  });

  return <div>{buttons}</div>;
}
