/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, ArrowRight, Info } from "react-feather";
import {
  InfoInteraction,
  LinkInteraction,
  TraverseInteraction,
} from "../modules/Objects/Interactions";

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

// let interactions = somethinghere.map((interaction) => {

//   switch (interaction.interactionType) {
//     case InteractionType.SHOWINFO:
//       return <Interaction
//         {...interaction}
//         scaleFactor={12}
//         key={overlay.title}
//         interaction={interaction}
//         onClick={() => handleInteraction(interaction.information)}
//         />

//     // case OverlayType.TRAVERSE:

//     //   break;

//     default:
//       return <Interaction
//         {...interaction}
//         scaleFactor={12}
//         key="Not a valid interaction"
//         interaction={interaction}
//         onClick={() => handleInteraction(interaction.information)}
//         />
//   }
// });

// returns the proper icon for each interaction
function returnIcon(interaction) {
  if (interaction instanceof InfoInteraction) {
    return Info;
  } else if (interaction instanceof LinkInteraction) {
    return Link;
  } else if (interaction instanceof TraverseInteraction) {
    return ArrowRight;
  }
}

export default function OverlayInteractions({ interactions }) {
  let buttons = interactions.map((interaction, key) => {
    const Icon = returnIcon(interaction);
    console.log(Icon);
    return (
      <button css={buttonCss} key={key}>
        <Icon />
        <span>{interaction.buttonText}</span>
      </button>
    );
  });

  return <div>{buttons}</div>;
}
