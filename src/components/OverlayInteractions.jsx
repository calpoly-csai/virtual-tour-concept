/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonCss = css`
    color: #ffffff;
    background-color: blue;
    text-align: center;
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
    let key = -1;
    let buttons = interactions.map((interaction) => {
        key++;
        return <button css={buttonCss} key={key}>{interaction.buttonText}</button>
    })

  return (
      <div>{buttons}</div>
  );
}
