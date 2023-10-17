// Define the Gamepad interface for ship control
export interface Gamepad {
  rotate(angle: number): void;
  throttle(speed: number): void;
  fire(): void;
}
