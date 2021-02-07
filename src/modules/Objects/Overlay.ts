import { OverlayType } from "./OverlayType";
export class Overlay {
  overlayId: number;
  overlayType: typeof OverlayType;
  title: string;
  description: string;
  parent: number;
  position: number[];
  args: object;

  constructor(
    overlayId: number,
    overlayType: typeof OverlayType,
    title: string,
    description: string,
    parent: number,
    position: number[],
    args: object
  ) {
    this.overlayId = overlayId;
    this.overlayType = overlayType;
    this.title = title;
    this.description = description;
    this.parent = parent;
    this.position = position;
    this.args = args
  }
}
