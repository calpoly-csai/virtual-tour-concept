export abstract class Interaction {
  buttonText: string;

  constructor(buttonText: string) {
    this.buttonText = buttonText;
  }
}
export class InfoInteraction extends Interaction {
  information: string;

  constructor(buttonText: string, information: string) {
    super(buttonText);
    this.information = information;
  }
}

export class TraverseInteraction extends Interaction {
  destinationId: number;
  video: string;

  constructor(buttonText: string, destinationId: number, video: string) {
    super(buttonText);
    this.destinationId = destinationId;
    this.video = video;
  }
}

export class LinkInteraction extends Interaction {
  url: string;

  constructor(buttonText: string, url: string) {
    super(buttonText);
    this.url = url;
  }
}
