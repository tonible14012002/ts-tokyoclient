import {StateEventData} from "./event";
import {Gamepad} from "./gamepad";

/**
 * Interface for consuming events in the game.
 * @interface
 */
export interface IConsumeEvent {
  /**
   * Represents the gamepad for controlling the game.
   * @type {Gamepad}
   */
  gamepad: Gamepad;

  /**
   * The unique identifier of the player.
   * @type {number}
   */
  userId: number;

  /**
   * A record of team members with their unique identifiers and names.
   * @type {Record<number, string>}
   */
  teamMates: Record<number, string>;

  /**
   * The state data associated with the event.
   * @type {StateEventData}
   */
  state: StateEventData;
}

export interface IEventConsumer {
  handleEvent(e: IConsumeEvent): void;
}
