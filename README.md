# Virtual Tour Concept

A 3D Tour renderer proof of concept based off of the [Cal Poly Virtual Tour Brief](https://docs.google.com/document/d/1KFxSek3xubSyxoo7UeFDOJGK2J3Jbt1TP-mtxb-HVr4/edit?usp=sharing). This would be the frontend application of the tour where users would walk around and explore key areas of the Cal Poly Campus. In the demo, you'll be strolling through John's front yard.

[Check it out Live](https://sleepy-mclean-e6f76f.netlify.app)

This will push your browser. For the smoothest experience, use Safari.

## What it does:

1. Explore a panoramic view with interactive elements.
2. Active walk cycle which allows users to stroll to the next location.
3. Abstracts tour graph to a JSON file so the experience can be adapted and extended without writing more JavaScript. The app acts as a renderer.

## What should be added:

1. Progressive Loading: everything is loaded up front which makes the Time To Interactive rather slow.
2. Accurate depth mapping: the panoramas are mapped to a sphere. We'll likely want to create accurate cubemaps instead so there isn't distortion when looking straight up or down.
3. 360 panorama: I took the panoramas with an iPhone. We're gonna need a better camera for the real thing.
4. Cross Browser Support: We're gonna need to stabilize the build across the board.

## Development Setup:

1. Clone this repo.
2. At the root of the repo run `npm install`
3. Run `npm start`
4. Open your browser to `localhost:3000`
