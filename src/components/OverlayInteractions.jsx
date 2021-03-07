/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Html } from "@react-three/drei";

const controlPanelCss = css`
  background-color: rgb(193, 255, 204);
  border-radius: 3px;
  opacity: 0.75;
  padding: 20px 20px;
  width: 300px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 30px transparent;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0 25px #ffffff;
  }
`;

const titleCss = css`
  text-align: center;
`;

const instructionCss = css`
  font-size: 15px;
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

export default function OverlayInteractions({interactions}) {
  return (
    <p>Overlay Interactions</p>
  );
}
