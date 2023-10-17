import {StateEventData} from "../../interfaces/event";
import {EventConsumer} from "../../interfaces/event-consumer";
import {getRandomFloat} from "../../utils";
import {TokyoGameClient} from "../client";

export class SimpleBot implements EventConsumer {
  handleEvent(
    gamepad: TokyoGameClient,
    userId: number,
    teammates: Record<number, string>,
    gameState: StateEventData,
  ) {
    gamepad.throttle(1);
    // random rotation
    const angle = getRandomFloat(0.1, 1.0, 1) * 2 * Math.PI;
    gamepad.rotate(angle);
    console.log(`[ID ${userId}] Rotating by ${angle} .`);
    gamepad.fire();
  }
}
