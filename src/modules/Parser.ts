import { TourGraph } from "./Objects/TourGraph";
import { Location } from "./Objects/Location";
import { Overlay } from "./Objects/Overlay";
import { Action } from "./Objects/Action";
import { ActionType } from "./Objects/ActionTypes/ActionType";

export default class Parser {
  getGraph(graphObj: Record<string, any>): TourGraph[] {
    let graphs: TourGraph[] = [];

    for (let key in graphObj) {
      let graph = graphObj[key];
      let newGraph = new TourGraph(
        graph.tourgraph_id,
        graph.title,
        graph.description,
        graph.image,
        this.getLocations(graph.locations),
        graph.default_location
      );
      graphs.push(newGraph);
    }

    console.log(graphs);
    return graphs;
  }

  private getLocations(obj: object): Location[] {
    let locations: Location[] = [];

    return locations;
  }

  private getOverlays(obj: object): Overlay[] {
    let overlays: Overlay[] = [];

    return overlays;
  }

  private getActions(): Action[] {
    let actions: Action[] = [];

    return actions;
  }
}
