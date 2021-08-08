/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, ArrowRight, Info, Aperture } from "react-feather";
import { LocationContext } from "./Tour";
import { useContext } from "react";
import { useTourState } from "../hooks/useTourState";

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

// returns the proper onClick method for each interaction
function getClickAction(
  interaction: Tour.OverlayAction,
  updateTourState: ReturnType<typeof useTourState>[1]
) {
  switch (interaction.type) {
    case "external-link":
      return () => window.open(interaction.link, "_blank");
    case "path":
      return () => {}; // TODO: Get paths working
    case "portal":
      return () => {
        updateTourState((state, graph) => {
          state.location = graph.locations[interaction.destination];
        });
      };
    default:
      return () => {};
  }
}

interface OverlayInteractionsProps {
  interactions: Tour.OverlayAction[];
}

export default function OverlayInteractions(props: OverlayInteractionsProps) {
  const updateTourState = useTourState()[1];
  let { interactions } = props;
  let buttons = interactions.map((interaction, key) => {
    const Icon = getActionIcon(interaction);
    let onClick = getClickAction(interaction, updateTourState);
    return (
      <button css={buttonCss} key={key} onClick={onClick}>
        <Icon />
        <span>{interaction.title}</span>
      </button>
    );
  });

  return <div>{buttons}</div>;
}
