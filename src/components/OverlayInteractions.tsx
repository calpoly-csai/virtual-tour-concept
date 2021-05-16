/** @jsxImportSource @emotion/react */
import {
  Interaction,
  InfoInteraction,
  LinkInteraction,
  TraverseInteraction,
} from "../types/Interactions";
import {
  LinkInteractionC,
  InfoInteractionC,
  TraverseInteractionC,
} from "./Interaction";
interface OverlayInteractionsProps {
  interactions: Interaction[];
  setLocation: any;
}

export default function OverlayInteractions(props: OverlayInteractionsProps) {
  let { interactions, setLocation } = props;
  let buttons = interactions.map((interaction: Interaction, key) => {
    if (interaction instanceof InfoInteraction) {
      return <InfoInteractionC interaction={interaction} key={key} />;
    } else if (interaction instanceof LinkInteraction) {
      return <LinkInteractionC interaction={interaction} key={key} />;
    } else if (interaction instanceof TraverseInteraction) {
      return (
        <TraverseInteractionC
          interaction={interaction}
          setLocation={setLocation}
          key={key}
        />
      );
    }
  });

  return <div>{buttons}</div>;
}
