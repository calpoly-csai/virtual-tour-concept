import { Overlay } from "./Overlay";

export class Location {
  locationId: number;
  image: string;
  overlays: Overlay[];

  constructor(locationId: number, image: string, overlays: Overlay[]) {
    this.locationId = locationId;
    this.image = image;
    this.overlays = overlays;
  }
}
