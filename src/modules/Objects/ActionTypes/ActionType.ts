import { FetchInfoAction } from "./FetchInfoAction";
import { TraversePathAction } from "./TraversePathAction";

export const actionTypeMapping: {[actionType: string]: any} = {
  "TRAVERSE": () => new TraversePathAction(),
  "SHOWINFO": () => new FetchInfoAction()
}
export interface ActionType {
  execute(args?: object): any;
}