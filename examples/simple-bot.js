const {
  TokyoGameClient,
  CustomEventConsumer,
  getRandomFloat,
} = require("../build");

(async () => {
  const config = {
    serverHost: "localhost:8080",
    apiKey: "webuild0",
    userName: "antonoob",
  };

  // An example implementation for EventConsumer
  const simpleBot = new CustomEventConsumer();
  simpleBot.handleEvent = ({gamepad, userId, teamMates, state}) => {
    gamepad.throttle(1);
    const angle = getRandomFloat(0.1, 1.0, 1) * 2 * Math.PI;
    gamepad.rotate(angle);
    console.log(`[ID ${userId}] Rotating by ${angle} .`);
    gamepad.fire();
  };

  // Pass into Client constructor
  const client = new TokyoGameClient(config, simpleBot);

  process.on("SIGTERM", () => {
    client.close();
    process.exit(0);
  });
})();
