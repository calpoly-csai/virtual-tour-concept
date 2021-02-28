export class TeleportInteraction {
  interactionType: string;
  locationId: number;
  information: string;

  constructor(locationId: number, information: string) {
    this.interactionType = "TELEPORT";
    this.locationId = locationId;
    this.information = information;
  }

  teleport() {
    // ?
  }
}

export class InformationInteraction {
  interactionType: string;
  resourceURL: string;

  constructor(resourceURL: string) {
    this.interactionType = "SHOWINFO";
    this.resourceURL = resourceURL;
  }

  getInfo() {
    // add API Information Here
  }
}
