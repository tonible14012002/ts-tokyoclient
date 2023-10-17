/**
 * Represents a gamepad for controlling the game.
 * @interface
 */
export interface Gamepad {
  /**
   * Rotate the gamepad by a specified angle.
   * @param {number} angle - The angle of rotation.
   * @returns {void}
   */
  rotate(angle: number): void;

  /**
   * Adjust the throttle of the gamepad to a specified speed.
   * @param {number} speed - The speed of the throttle.
   * @returns {void}
   */
  throttle(speed: number): void;

  /**
   * Trigger firing or performing an action with the gamepad.
   * @returns {void}
   */
  fire(): void;
}
