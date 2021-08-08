import produce from "immer";
import { useEffect, useState } from "react";

interface TourState {
  location?: Tour.Location;
}

let graphListeners: React.Dispatch<React.SetStateAction<any>>[] = [];
let stateListeners: React.Dispatch<React.SetStateAction<any>>[] = [];
let tourGraph: Tour.Graph;
let tourState: TourState = {};

export function useTourGraph(): [
  Tour.Graph,
  (newTourGraph: Tour.Graph) => void
] {
  const listener = useState<Tour.Graph>()[1];
  useEffect(() => {
    graphListeners.push(listener);
    return () =>
      void (graphListeners = graphListeners.filter((l) => l !== listener));
  });

  function setTourGraph(newTourGraph: Tour.Graph) {
    tourGraph = newTourGraph;
    graphListeners.forEach((l) => l(newTourGraph));
  }

  return [tourGraph, setTourGraph];
}

export function useTourState(): [
  TourState,
  (updater: (tourState: TourState, tourGraph: Tour.Graph) => void) => void
] {
  const listener = useState<Tour.Graph>()[1];
  const [graph] = useTourGraph();
  useEffect(() => {
    stateListeners.push(listener);
    return () =>
      void (stateListeners = stateListeners.filter((l) => l !== listener));
  });

  function setTourState(
    updater: (tourState: TourState, tourGraph: Tour.Graph) => void
  ) {
    tourState = produce(tourState, (ts: TourState) => updater(ts, graph));
    stateListeners.forEach((l) => l(tourState));
  }

  return [tourState, setTourState];
}
