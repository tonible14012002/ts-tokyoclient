import {EventType, ItemType} from "../enums";

export interface Player {
  id: string;
  angle: number;
  throttle: number;
  x: number;
  y: number;
  radius: number;
  bullet_radius: number;
  bullet_speed: number;
  bullet_limit: number;
}

export interface Item {
  id: string;
  x: number;
  y: number;
  radius: number;
  type: ItemType;
}

export interface Bullet {
  id: number;
  player_id: number;
  angle: number;
  x: number;
  y: number;
}

export interface RespawnInfo {
  secs_since_epoch: number;
  nanos_since_epoch: number;
}

export interface DeadPlayer {
  respawn: RespawnInfo;
  player: Player;
}

export interface StateEventData {
  bounds: [number, number];
  players: Player[];
  items: Item[];
  dead: DeadPlayer[];
  bullets: Bullet[];
  scoreboard: Record<number, number>;
}

export interface Payload {
  e: EventType;
  data: any;
}
