import { Overlay } from "./Overlay";

export class Location {
  locationId: number;
  name: string;
  image: string;
  overlays: Overlay[];

  constructor(locationId: number, name: string, image: string, overlays: Overlay[]) {
    this.locationId = locationId;
    this.name = name;
    this.image = image;
    this.overlays = overlays;
  }
}
