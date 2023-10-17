import {getWsServerUrl, loadConfig} from "./config";
import {SimpleBot} from "./models/dispatcher";
import {TokyoGameClient} from "./models/client";

;(async () => {
  const config = loadConfig();
  const serverUrl = getWsServerUrl(config);
  const dispatcher = new SimpleBot(); // Replace with your customized dispatcher
  const client = new TokyoGameClient(serverUrl, dispatcher);

  process.on("SIGTERM", () => {
    console.info("SIGTERM signal received.");
    client.close();
    process.exit(0);
  });
})();
