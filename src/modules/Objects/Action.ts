import { ActionType } from "./ActionTypes/ActionType";

export class Action {
  actionType: ActionType;
  args: object;

  constructor(actionType: ActionType, args: object) {
    this.actionType = actionType;
    this.args = args
  }

  execute() {
    this.actionType.execute(this.args);
  }
}
