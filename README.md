# tokyoclient-ts

`tokyoclient-ts` is a Typescript client library for connecting to a Tokyo game server and controlling a ship in the game. It provides functionality to interact with the game server, receive events, and control the ship using a simple bot implementation.

## Usage

To use `tokyoclient-ts`, follow these steps:

1. Install the package using:
```sh
npm i tokyoclient-ts`
```

2. Implement your custom EventConsumer
```js
// An example implementation for EventConsumer 
  const customBot = new CustomEventConsumer();
  customBot.handleEvent = ({gamepad, userId, teamMates, state}) => {
    gamepad.throttle(1);
    const angle = getRandomFloat(0.1, 1.0, 1) * 2 * Math.PI;
    gamepad.rotate(angle);
    console.log(`[ID ${userId}] Rotating by ${angle} .`);
    gamepad.fire();
  }
```

3. Initialize the game client with your custom event consumer
```js
const {
  TokyoGameClient,
  CustomEventConsumer,
  getRandomFloat,
} = require("tokyoclient-ts");

;(async () => {
  const config = {
    serverHost: "<replace with your SERVER_HOST>",
    apiKey: "<replace with your API_KEY>",
    userName: "example-name",
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
  ...
  ...
})();
```

4. Run your program and observe the client interacting with the Tokyo game server.

## Interfaces

### EventConsumer

`EventConsumer` is an interface that the client must implement to handle events received from the server. It defines the `handleEvent` method, which is responsible for processing events and taking appropriate actions based on the event information.

Method `handleEvent` receives an object with the following properties:
- `gamepad` - An interface provided by the library to the client. It offers methods to control the ship in the game. The `GamePad` interface includes methods to rotate the ship (`Rotate`), adjust throttle (`Throttle`), and fire bullets (`Fire`).
- `userId` - Your current player's id
- `teamMates` - A map of players in your team
- `state` - The `state` event data sent from server 

By using these provided properties, you can try to create an unbeatable algorithm on your own. 


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or bug fixes.
