import { Action } from "./Action";

export class Overlay {
  overlayId: number;
  title: string;
  description: string;
  parent: number;
  position: number[];
  action: Action;

  constructor(
    overlayId: number,
    title: string,
    description: string,
    parent: number,
    position: number[],
    action: Action
  ) {
    this.overlayId = overlayId;
    this.title = title;
    this.description = description;
    this.parent = parent;
    this.position = position;
    this.action = action;
  }
}
