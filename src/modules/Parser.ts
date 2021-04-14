import { TourGraph } from "../types/TourGraph";
import { Location } from "../types/Location";
import { OverlayData } from "../types/OverlayData";
import {
  Interaction,
  InfoInteraction,
  LinkInteraction,
  TraverseInteraction,
} from "../types/Interactions";
import { InteractionType } from "../types/InteractionType";
export default class Parser {
  getGraph(graphObj: Record<string, any>): TourGraph[] {
    let graphs: TourGraph[] = [];

    for (let key in graphObj) {
      let {
        tourgraph_id,
        title,
        description,
        image,
        locations,
        default_location_id,
      } = graphObj[key];
      let newGraph = new TourGraph(
        tourgraph_id,
        title,
        description,
        image,
        this.getLocations(locations),
        default_location_id
      );
      graphs.push(newGraph);
    }

    return graphs;
  }

  private getLocations(locObj: Record<string, any>): Location[] {
    let locations: Location[] = [];

    for (let key in locObj) {
      let { location_id, image, overlays } = locObj[key];
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

  private getOverlays(overlayObj: Record<string, any>): OverlayData[] {
    let overlays: OverlayData[] = [];

    for (let key in overlayObj) {
      let {
        overlay_id,
        title,
        description,
        parent,
        position,
        interactions,
      } = overlayObj[key];

      let newOverlay = new OverlayData(
        overlay_id,
        title,
        description,
        parent,
        position,
        this.getInteractions(interactions)
      );
      overlays.push(newOverlay);
    }

    return overlays;
  }

  private getInteractions(interactionObj: Record<string, any>): Interaction[] {
    let interactions: Interaction[] = [];

    for (let key in interactionObj) {
      let interaction = interactionObj[key];
      let interaction_type = interactionObj[key]["interaction_type"];
      let { button_text } = interaction;

      // determine type of interaction
      switch (interaction_type) {
        case InteractionType.SHOWINFO:
          let { information } = interaction;

          let newInfoInteraction = new InfoInteraction(
            button_text,
            information
          );

          interactions.push(newInfoInteraction);
          break;

        case InteractionType.LINK:
          let { url } = interaction;

          let newLinkInteraction = new LinkInteraction(button_text, url);

          interactions.push(newLinkInteraction);
          break;

        case InteractionType.TRAVERSE:
          let { destination_id, video } = interaction;

          let newTraverseInteraction = new TraverseInteraction(
            button_text,
            destination_id,
            video
          );

          interactions.push(newTraverseInteraction);
          break;

        default:
          console.error("Invalid interaction type", interaction_type);
      }
    }
    return interactions;
  }
}
