const hostname = 'http://tatoujsapp.herokuapp.com';
// const hostname = 'http://localhost:80';
const apiPort = 80;
const socketPort = 4001;

export default {
  hostname,
  host: {
    api: `${hostname}:${apiPort}`,
    socket: `${hostname}:${socketPort}`
  }
};
