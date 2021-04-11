import { OverlayData } from "./OverlayData";

export class Location {
  locationId: number;
  name: string;
  image: string;
  overlays: OverlayData[];

  constructor(
    locationId: number,
    name: string,
    image: string,
    overlays: OverlayData[]
  ) {
    this.locationId = locationId;
    this.name = name;
    this.image = image;
    this.overlays = overlays;
  }
}
