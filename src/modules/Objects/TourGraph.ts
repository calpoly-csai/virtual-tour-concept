import { Location } from "./Location";

export class TourGraph {
  tourgraphId: number;
  title: string;
  description: string;
  image: string;
  locations: Location[];
  defaultLocation: Location;

  constructor(
    tourgraphId: number,
    title: string,
    description: string,
    image: string,
    locations: Location[],
    defaultLocation: Location
  ) {
      this.tourgraphId = tourgraphId;
      this.title = title;
      this.description = description;
      this.image = image;
      this.locations = locations;
      this.defaultLocation = defaultLocation;
  }
}
