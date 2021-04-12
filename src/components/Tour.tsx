/** @jsxImportSource @emotion/react */
import { Canvas } from "@react-three/fiber";
import Panorama from "./Panorama";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import JohnsYard from "../test/johns-yard.json";
import { OrbitControls } from "@react-three/drei";
import Path from "./Path";
import Loader from "./Loader";
import Parser from "../modules/Parser";
import { TourGraph } from "../types/TourGraph";
import { Location } from "../types/Location";

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
  const [tourGraph, setTourGraph] = useState<TourGraph | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [locationHistory, setLocationHistory] = useState([]);
  // const isPath = !!location.video;
  const isPath = false;
  const instructions = isPath
    ? "Scroll to walk forward and backward."
    : "Click and drag to look around.";

  // const handlePathEnd = (moveForward) => {
  //   let loc = moveForward
  //     ? TourGraphJSON[location.destination]
  //     : locationHistory[locationHistory.length - 1];
  //   console.log("New Location", loc);
  //   setLocation(loc);
  // };

  // temp comment - this is what john calls when pathchoice onclick is activated
  // const handlePathChoice = (i) => {
  //   window.scroll({ top: 0 });
  //   setLocationHistory((hist) => [...hist, location]);
  //   setLocation(location.paths[i]);
  // };

  const getLocationFromId = (graph: TourGraph, id: number) => {
    if (!graph) return null;
    return graph.locations.find((loc) => loc.locationId === id) || null;
  };

  // Parse the JSON into a TourGraph object and load location on init
  useEffect(() => {
    let parser = new Parser();
    let tourGraphs = parser.getGraph(JohnsYard);
    if (tourGraphs && tourGraphs.length > 0) {
      let graph = tourGraphs[0]; // Default to the first graph in the list
      let defaultLocation = getLocationFromId(graph, graph.defaultLocationId);
      setTourGraph(graph);
      setLocation(defaultLocation);
    }
  }, []);

  return (
    <div className="tour" css={tourStyle}>
      {!location && <Loader />}
      {location && (
        <Canvas style={{ display: isPath ? "none" : "block" }}>
          {!isPath && (
            <>
              <pointLight intensity={2} position={[7, 5, 1]} />
              <Panorama location={location} />
              {/* <Panorama location={location} onPathChosen={handlePathChoice} /> */}
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
      )}
      {/* {isPath && <Path {...location} onPathEnd={handlePathEnd} tourGraph={tourGraph} />} */}

      <p css={instructionsCss}>{instructions}</p>
    </div>
  );
}
