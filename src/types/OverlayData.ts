import { Vector3 } from "three";
import { Interaction } from "./Interactions";

export class OverlayData {
  overlayId: number;
  title: string;
  description: string;
  parent: number;
  position: Vector3;
  interactions: Interaction[];

  constructor(
    overlayId: number,
    title: string,
    description: string,
    parent: number,
    position: Vector3,
    interactions: Interaction[]
  ) {
    this.overlayId = overlayId;
    this.title = title;
    this.description = description;
    this.parent = parent;
    this.position = position;
    this.interactions = interactions;
  }
}
