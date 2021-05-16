/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  InfoInteraction,
  LinkInteraction,
  TraverseInteraction,
} from "../types/Interactions";
import { useState } from "react";

import Parser from "../modules/Parser";
import JohnsYard from "../test/johns-yard.json";
import { TourGraph } from "../types/TourGraph";

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

interface TraverseInteractionProps {
  interaction: TraverseInteraction;
  setLocation: any;
}

// Remove onClicks from class and set them in here
export function InfoInteractionC(props: InfoInteractionProps) {
  const { interaction } = props;
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

export function LinkInteractionC(props: LinkInteractionProps) {
  const { interaction } = props;
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

const getLocationFromId = (graph: TourGraph, id: number) => {
  if (!graph) return null;
  return graph.locations.find((loc) => loc.locationId === id) || null;
};

export function TraverseInteractionC(props: TraverseInteractionProps) {
  const { interaction, setLocation } = props;
  const { Icon, onClick } = interaction;

  //   TODO: Instead of calling this again change to an emitter function
  let parser = new Parser();
  let tourGraphs = parser.getGraph(JohnsYard);
  let graph = tourGraphs[0];
  let location = getLocationFromId(graph, interaction.destinationId);

  return (
    <>
      <button css={buttonCss} onClick={() => setLocation(location)}>
        <Icon />
        <span>{interaction.buttonText}</span>
      </button>
    </>
  );
}
