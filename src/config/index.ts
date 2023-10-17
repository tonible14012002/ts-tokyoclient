export interface IConfig {
  serverHost: string;
  apiKey: string;
  userName: string;
}

export const getWsServerUrl = (c: IConfig): string => {
  const socketPath = "/socket";
  return (
    "ws://" +
    c.serverHost +
    socketPath +
    "?key=" +
    c.apiKey +
    "&name=" +
    c.userName
  );
};