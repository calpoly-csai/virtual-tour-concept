export class Overlay {
  overlayId: number;
  title: string;
  description: string;
  parent: number;
  position: number[];
  interactions: object[];

  constructor(
    overlayId: number,
    title: string,
    description: string,
    parent: number,
    position: number[],
    interactions: object[]
  ) {
    this.overlayId = overlayId;
    this.title = title;
    this.description = description;
    this.parent = parent;
    this.position = position;
    this.interactions = interactions;
  }
}
