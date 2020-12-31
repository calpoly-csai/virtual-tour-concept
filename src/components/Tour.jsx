/** @jsxImportSource @emotion/react */
import { Canvas } from "react-three-fiber";
import Panorama from "./Panorama";
import { css } from "@emotion/react";
import { useState } from "react";
import TourGraph from "../assets/tour-graph.json";
import { OrbitControls } from "@react-three/drei";
import Path from "./Path";
import Loader from "./Loader";

const tourStyle = css`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const instructionsCss = css`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
`;

export default function Tour() {
  const [location, setLocation] = useState(TourGraph.porch);
  const [locationHistory, setLocationHistory] = useState([]);
  const isPath = !!location.video;
  const instructions = isPath
    ? "Scroll to walk forward and backward."
    : "Click and drag to look around.";

  const handlePathEnd = (moveForward) => {
    let loc = moveForward
      ? TourGraph[location.destination]
      : locationHistory[locationHistory.length - 1];
    console.log("New Location", loc);
    setLocation(loc);
  };
  const handlePathChoice = (i) => {
    window.scroll({ top: 0 });
    setLocationHistory((hist) => [...hist, location]);
    setLocation(location.paths[i]);
  };

  return (
    <div className="tour" css={tourStyle}>
      <Loader />
      <Canvas camera={[0, 0, 0]} style={{ display: isPath ? "none" : "block" }}>
        {!isPath && (
          <>
            <pointLight intensity={2} position={[7, 5, 1]} />
            <Panorama {...location} onPathChosen={handlePathChoice} />
            <OrbitControls
              position={[0, 0, 0]}
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={1.57}
              minPolarAngle={1.571}
              maxDistance={0.1}
            />
          </>
        )}
      </Canvas>
      {isPath && <Path {...location} onPathEnd={handlePathEnd} />}

      <p css={instructionsCss}>{instructions}</p>
    </div>
  );
}
