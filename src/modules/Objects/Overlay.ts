import { Action } from "./Action";

export class Overlay {
  overlay_id: number;
  title: string;
  description: string;
  parent: number;
  position: number[];
  action: Action;

  constructor(
    overlay_id: number,
    title: string,
    description: string,
    parent: number,
    position: number[],
    action: Action
  ) {
    this.overlay_id = overlay_id;
    this.title = title;
    this.description = description;
    this.parent = parent;
    this.position = position;
    this.action = action;
  }
}
