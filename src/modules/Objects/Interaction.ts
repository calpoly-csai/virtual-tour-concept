export class TeleportInteraction {
  interactionType: string;
  locationId: number;
  information: string;

  constructor(locationId: number, information: string) {
    this.interactionType = "TELEPORT";
    this.locationId = locationId;
    this.information = information;
  }
}

export class InformationInteraction {
  interactionType: string;
  information: string;

  constructor(information: string) {
    this.interactionType = "SHOWINFO";
    this.information = information;
  }
}
