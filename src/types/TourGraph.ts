import { Location } from "./Location";

export class TourGraph {
  tourgraphId: number;
  title: string;
  description: string;
  image: string;
  locations: Location[];
  defaultLocationId: number;

  constructor(
    tourgraphId: number,
    title: string,
    description: string,
    image: string,
    locations: Location[],
    defaultLocationId: number
  ) {
    this.tourgraphId = tourgraphId;
    this.title = title;
    this.description = description;
    this.image = image;
    this.locations = locations;
    this.defaultLocationId = defaultLocationId;
  }
}
