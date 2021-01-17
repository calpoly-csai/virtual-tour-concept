class Path {
  start: number;
  end: number;
  assetName: any;

  constructor(start: number, end: number, asset: any) {
    this.start = start;
    this.end = end;
    this.assetName = asset;
  }
}

class Location {
  choices: Array<any>;
  assetName: string;

  constructor(asset: any) {
    this.choices = [];
    this.assetName = asset;
  }
}

export default class TourGraph {
  current = null;
  paths = [];
  locations = {};

  load(graph:any): void {
    this.paths = [];
    this.locations = [];
  }

  addPath() {}
}
