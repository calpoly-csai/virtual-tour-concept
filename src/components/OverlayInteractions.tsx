/** @jsxImportSource @emotion/react */
import {
  Interaction,
  InfoInteraction,
  LinkInteraction,
} from "../types/Interactions";
import { LinkInteractionC, InfoInteractionC } from "./Interaction";
interface OverlayInteractionsProps {
  interactions: Interaction[];
}

export default function OverlayInteractions(args: OverlayInteractionsProps) {
  let { interactions } = args;
  let buttons = interactions.map((interaction: Interaction, key) => {
    if (interaction instanceof InfoInteraction) {
      return <InfoInteractionC interaction={interaction} key={key} />;
    } else if (interaction instanceof LinkInteraction) {
      return <LinkInteractionC interaction={interaction} key={key} />;
    }
  });

  return <div>{buttons}</div>;
}
