import {CloseEvent, WebSocket} from "ws";
import {IEventConsumer} from "../interfaces/event-consumer";
import {EventType} from "../enums";
import {Payload, StateEventData} from "../interfaces/event";
import {Gamepad} from "../interfaces/gamepad";
import {IConfig, getWsServerUrl} from "../config";

export class TokyoGameClient implements Gamepad {
  private userId!: number;
  private teamMates!: Record<number, string>;
  private eventConsumer: IEventConsumer;
  private conn!: WebSocket;

  constructor(credentials: IConfig, eventConsumer: IEventConsumer) {
    this.eventConsumer = eventConsumer;
    this.conn = new WebSocket(getWsServerUrl(credentials));

    this.conn.on("open", this.onOpen.bind(this));
    this.conn.on("message", this.onMessage.bind(this));
    this.conn.on("close", this.onClose.bind(this));
    this.conn.on("error", this.onError.bind(this));
  }

  private onOpen(_: Event) {
    console.log("Successfully joined the game. Let's hunt !");
  }

  private onMessage(event: Buffer) {
    const parsed: Payload = JSON.parse(event.toString());
    switch (parsed.e) {
      case EventType.ID: {
        const value = parsed.data as number;
        this.updateId(value);
        break;
      }
      case EventType.TEAM_NAMES: {
        const value = parsed.data as Record<number, string>;
        this.updateTeammates(value);
        break;
      }
      case EventType.STATE: {
        const value = parsed.data as StateEventData;
        this.eventConsumer.handleEvent({
          gamepad: this,
          userId: this.userId,
          teamMates: this.teamMates,
          state: value,
        });
        break;
      }
    }
  }

  private onClose(event: CloseEvent) {
    console.log("WebSocket connection closed:", event);
  }

  private onError(event: Event) {
    console.error("uhhh, an error happened:", event);
  }

  async rotate(angle: number) {
    this.conn.send(`{"e":"rotate", "data":${angle}}`);
  }

  async throttle(speed: number) {
    this.conn.send(`{"e":"throttle", "data":${speed}}`);
  }

  async fire() {
    this.conn.send(`{"e":"fire"}`);
  }

  updateId(id: number): void {
    this.userId = id;
    console.log(`User ID has been set to ${id}`);
  }

  updateTeammates(teamMates: Record<number, string>): void {
    this.teamMates = teamMates;
    console.log(`Teammates has been updated to ${JSON.stringify(teamMates)}`);
  }

  close() {
    return this.conn.close();
  }
}
