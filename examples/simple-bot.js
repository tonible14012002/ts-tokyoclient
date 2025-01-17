const {
  TokyoGameClient,
  getRandomFloat,
} = require("../build");

(async () => {
  const config = {
    serverHost: "localhost:8080",
    apiKey: "webuild0",
    userName: "h3adhunter",
  };

  // Initialize the Game client instance
  const client = new TokyoGameClient(config);

  // Define your onMessage callback function
  client.setOnOpenFn((gamepad) => {
    console.log("Successfully joined the game.");
    // Replace your logic here
  });

  // Define your onMessage callback function
  client.setOnMessageFn(({gamepad, event}) => {
    gamepad.throttle(1);
    const angle = getRandomFloat(0.1, 1.0, 1) * 2 * Math.PI;
    gamepad.rotate(angle);
    console.log(`[rotating] by ${angle} .`);
    gamepad.fire();
    // Replace with your logic here
  });

  process.on("SIGTERM", () => {
    client.close();
    process.exit(0);
  });
})();
