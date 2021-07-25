/** @jsxImportSource @emotion/react */
import { Canvas } from "@react-three/fiber";
import Panorama from "./Panorama";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import ArgoApi from "../modules/api";
import { OrbitControls } from "@react-three/drei";
import ExampleTour from "../test/example-tour.json";
// import Path from "./Path";
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
  const [tourGraph, setTourGraph] = useState<Tour.Graph>(ExampleTour);
  const [location, setLocation] = useState<Tour.Location>(
    tourGraph.locations[tourGraph.startingLocation]
  );
  console.log(tourGraph);
  // useEffect(() => {
  //   ArgoApi.getTour("test")
  //     .then((tour) => {
  //       if (!tour) return;
  //       setTourGraph(tour);
  //       setLocation(tour.locations[tour.startingLocation]);
  //     })
  //     .catch(console.error);
  // }, []);

  // const [locationHistory, setLocationHistory] = useState([]);
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

  return (
    <div className="tour" css={tourStyle}>
      {location ? (
        <Canvas style={{ display: isPath ? "none" : "block" }}>
          {!isPath && (
            <>
              <pointLight intensity={2} position={[7, 5, 1]} />
              <Panorama location={location} />
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
      ) : (
        <Loader />
      )}

      <p css={instructionsCss}>{instructions}</p>
    </div>
  );
}
