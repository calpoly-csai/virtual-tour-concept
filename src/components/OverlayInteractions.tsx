/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, ArrowRight, Info, Aperture } from "react-feather";

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
function getActionIcon(interaction: Tour.OverlayAction) {
  switch (interaction.type) {
    case "external-link":
      return Link;
    case "path":
      return ArrowRight;
    case "portal":
      return Aperture;
    case "info":
      return Info;
    default:
      return () => <div></div>;
  }
}

// opens a new tab with the given link
function linkOnClick(link: string) {
  window.open(link, "_blank");
}

// returns the proper onClick method for each interaction
function getClickAction(interaction: Tour.OverlayAction) {
  if (interaction.type === "external-link") {
    return () => linkOnClick(interaction.link);
  } else {
    return () => {};
  }
}

interface OverlayInteractionsProps {
  interactions: Tour.OverlayAction[];
}

export default function OverlayInteractions(props: OverlayInteractionsProps) {
  let { interactions } = props;
  let buttons = interactions.map((interaction, key) => {
    const Icon = getActionIcon(interaction);
    let onClick = getClickAction(interaction);
    return (
      <button css={buttonCss} key={key} onClick={onClick}>
        <Icon />
        <span>{interaction.title}</span>
      </button>
    );
  });

  return <div>{buttons}</div>;
}
