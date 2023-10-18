import {PlayerCoordinates} from "../interfaces/event";

/**
 * Calculate the Euclidean distance between two players based on their coordinates.
 * @param {PlayerCoordinates} player1 - Coordinates of the first player.
 * @param {PlayerCoordinates} player2 - Coordinates of the second player.
 * @returns {number} - The Euclidean distance between the two players.
 */
export function estimateDistance(
  player1: PlayerCoordinates,
  player2: PlayerCoordinates,
): number {
  const deltaX = player1.x - player2.x;
  const deltaY = player1.y - player2.y;

  // Euclidean distance formula: sqrt((x2 - x1)^2 + (y2 - y1)^2)
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  return distance;
}

/**
 * Calculate the angle (in radians) a player needs to rotate to face the target player.
 * @param {PlayerCoordinates} player - Coordinates of the player.
 * @param {PlayerCoordinates} target - Coordinates of the target player.
 * @returns {number} - The angle (in radians) to rotate.
 */
export function calculateRotationAngle(
  player: PlayerCoordinates,
  target: PlayerCoordinates,
): number {
  const deltaX = target.x - player.x;
  const deltaY = target.y - player.y;

  // Use Math.atan2 to get the angle in radians
  const angle = Math.atan2(deltaY, deltaX);

  return angle;
}
