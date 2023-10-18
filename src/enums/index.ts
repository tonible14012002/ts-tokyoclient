export enum ItemType {
  BIGGER_BULLET = "BiggerBullet",
  MORE_BULLET = "MoreBullet",
  FASTER_BULLET = "FasterBullet",
}

export enum GameState {
  CONNECTING = 0, // The connection is not yet open.
  OPEN = 1, // The connection is open and ready to communicate.
  CLOSING = 2, // The connection is in the process of closing.
  CLOSED = 3, // The connection is closed.
}

/**
 * Enum representing different event types.
 *
 * @enum {string}
 */
export enum EventType {
  /**
   * Represents the 'id' event type.
   */
  ID = "id",

  /**
   * Represents the 'teamnames' event type.
   */
  TEAM_NAMES = "teamnames",

  /**
   * Represents the 'state' event type.
   */
  STATE = "state",
}
