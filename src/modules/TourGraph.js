class Path {
  constructor(start, end, asset) {
    this.start = start;
    this.end = end;
    this.assetName = asset;
  }
}

class Location {
  constructor(asset) {
    this.choices = [];
    this.assetName = asset;
  }
}

export default class TourGraph {
  current = null;
  paths = [];
  locations = {};

  load(graph) {
    this.paths = [];
    this.locations = [];
  }

  addPath() {}
}
