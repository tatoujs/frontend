const hostname = 'http://tatoujsapp.herokuapp.com';
const apiPort = 80;
const socketPort = 4001;

export default {
  host: {
    api: `${hostname}:${apiPort}`,
    socket: `${hostname}:${socketPort}`
  }
};
