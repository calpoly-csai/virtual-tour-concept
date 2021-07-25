namespace Tour {
  export interface Graph {
    title: string;
    description: string;
    startingLocation: string;
    locations: {
      [location: string]: TourLocation;
    };
  }

  export interface Location {
    title: string;
    description: string;
    panorama: string;
    overlays: Overlay[];
  }

  export interface Overlay {
    title: string;
    description: string;
    position: [number, number, number];
    actions: OverlayAction[];
  }

  export type OverlayAction = ActionBase &
    (LinkAction | PathAction | PortalAction | InfoAction);

  interface ActionBase {
    title: string;
  }

  export interface LinkAction {
    type: "external-link";
    title: string;
    link: string;
  }

  export interface PathAction {
    type: "path";
    video: string;
    destination: string;
  }

  export interface PortalAction {
    type: "portal";
    destination: string;
  }

  export interface InfoAction {
    type: "info";
    information: string;
  }
}
