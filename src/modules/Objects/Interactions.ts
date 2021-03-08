export class InfoInteraction {
  buttonText: string;
  information: string;

  constructor(buttonText: string, information: string) {
    this.buttonText = buttonText;
    this.information = information;
  }
}

export class TraverseInteraction {
  buttonText: string;
  destinationId: number;
  video: string;

  constructor(buttonText: string, destinationId: number, video: string) {
    this.buttonText = buttonText;
    this.destinationId = destinationId;
    this.video = video;
  }
}

export class LinkInteraction {
  buttonText: string;
  url: string;

  constructor(buttonText: string, url: string) {
    this.buttonText = buttonText;
    this.url = url;
  }
}

export type Interaction =
  | InfoInteraction
  | TraverseInteraction
  | LinkInteraction;
