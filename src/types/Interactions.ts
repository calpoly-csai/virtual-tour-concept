import { Icon, Link, ArrowRight, Info } from "react-feather";
export abstract class Interaction {
  buttonText: string;
  Icon: Icon = Info;
  isVisible: boolean = false;
  onClick: (event: React.MouseEvent) => void = () => {};

  constructor(buttonText: string) {
    this.buttonText = buttonText;
  }
}
export class InfoInteraction extends Interaction {
  information: string;

  constructor(buttonText: string, information: string) {
    super(buttonText);
    this.information = information;
    this.Icon = Info;
    this.onClick = () => (this.isVisible = !this.isVisible);
  }
}

export class TraverseInteraction extends Interaction {
  destinationId: number;
  video: string;

  constructor(buttonText: string, destinationId: number, video: string) {
    super(buttonText);
    this.destinationId = destinationId;
    this.video = video;
    this.Icon = ArrowRight;
  }
}

export class LinkInteraction extends Interaction {
  url: string;

  constructor(buttonText: string, url: string) {
    super(buttonText);
    this.url = url;
    this.Icon = Link;
    this.onClick = () => window.open(url, "_blank");
  }
}
