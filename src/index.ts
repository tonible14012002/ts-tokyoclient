export * from "./models/client";
export * from "./interfaces/event";
export * from "./interfaces/gamepad";
export * from "./models/dispatcher";
export {IConfig} from "./config";

import {IConfig, SimpleBot, TokyoGameClient} from ".";

(async () => {
  const config: IConfig = {
    serverHost: "localhost:8080",
    apiKey: "webuild0",
    userName: "antonoob",
  };
  const dispatcher = new SimpleBot(); // Replace with your customized dispatcher
  const client = new TokyoGameClient(config, dispatcher);

  process.on("SIGTERM", () => {
    client.close();
    process.exit(0);
  });
})();
