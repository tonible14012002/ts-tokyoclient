import {StateEventData} from "./event";
import {Gamepad} from "./gamepad";

export interface EventConsumer {
  handleEvent(
    gamepad: Gamepad,
    userId: number,
    teamMates: Record<number, string>,
    state: StateEventData,
  ): void;
}
