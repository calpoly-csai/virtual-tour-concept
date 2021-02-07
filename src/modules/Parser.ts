import { TourGraph } from "./Objects/TourGraph";
import { Location } from "./Objects/Location";
import { Overlay } from "./Objects/Overlay";
import { Action } from "./Objects/Action";
import { actionTypeMapping } from "./Objects/ActionTypes/ActionType";

// Type for the json object
type ActionJSON = {action_type: string, args: object};
export default class Parser {
  getGraph(graphObj: Record<string, any>): TourGraph[] {
    let graphs: TourGraph[] = [];

    for (let key in graphObj) {
      let {tourgraph_id, title, description, image, locations, default_location} = graphObj[key];
      let newGraph = new TourGraph(
        tourgraph_id,
        title,
        description,
        image,
        this.getLocations(locations),
        default_location
      );
      graphs.push(newGraph);
    }

    console.log(graphs);
    return graphs;
  }

  private getLocations(locObj: Record<string, any>): Location[] {
    let locations: Location[] = [];

    for (let key in locObj) {
      let {location_id, image, overlays} = locObj[key];
      let newLocation = new Location(
        location_id,
        key,
        image,
        this.getOverlays(overlays)
      );
      locations.push(newLocation);
    }

    return locations;
  }

  private getOverlays(overlayObj: Record<string, any>): Overlay[] {
    let overlays: Overlay[] = [];

    for (let key in overlayObj) {
      let {overlay_id, title, description, parent, position, action} = overlayObj[key];
      let newOverlay = new Overlay(
        overlay_id,
        title,
        description,
        parent,
        position,
        this.getAction(action)
      );
      overlays.push(newOverlay);
    }

    return overlays;
  }

  private getAction(actionObj: ActionJSON): Action {
    let {action_type, args} = actionObj;
    let action = new Action(
      actionTypeMapping[action_type](),
      args
    );

    return action;
  }
}
