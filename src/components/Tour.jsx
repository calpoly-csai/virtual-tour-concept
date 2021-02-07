/** @jsxImportSource @emotion/react */
import { Canvas } from "react-three-fiber";
import Panorama from "./Panorama";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import TourGraphJSON from "../assets/tour-graph.json";
import JohnsYard from "../test/johns-yard.json";
import { OrbitControls } from "@react-three/drei";
import Path from "./Path";
import Loader from "./Loader";
import Parser from "../modules/Parser";

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
  const [tourGraph, setTourGraph] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationHistory, setLocationHistory] = useState([]);
  // const isPath = !!location.video;
  const isPath = false;
  const instructions = isPath
    ? "Scroll to walk forward and backward."
    : "Click and drag to look around.";

  const handlePathEnd = (moveForward) => {
    let loc = moveForward
      ? TourGraphJSON[location.destination]
      : locationHistory[locationHistory.length - 1];
    console.log("New Location", loc);
    setLocation(loc);
  };
  const handlePathChoice = (i) => {
    window.scroll({ top: 0 });
    setLocationHistory((hist) => [...hist, location]);
    setLocation(location.paths[i]);
  };

  // Parse the JSON into a TourGraph object and load location on init
  useEffect(() => {
    let parser = new Parser();
    let tourGraphs = parser.getGraph(JohnsYard);
    if (tourGraphs && tourGraphs.length > 0) {
      let graph = tourGraphs[0];
      let locations = graph.locations;
      setTourGraph(graph);
      // This assumes the locations are in order
      setLocation(locations[graph.defaultLocation]);
    }
  }, []);

  return (
    <div className="tour" css={tourStyle}>
      {!location && <Loader />}
      { location &&
      <Canvas camera={[0, 0, 0]} style={{ display: isPath ? "none" : "block" }}>
        {!isPath && (
          <>
            <pointLight intensity={2} position={[7, 5, 1]} />
            <Panorama location={location} onPathChosen={handlePathChoice} />
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
}
      {/* {isPath && <Path {...location} onPathEnd={handlePathEnd} tourGraph={tourGraph} />} */}

      <p css={instructionsCss}>{instructions}</p>
    </div>
  );
}
