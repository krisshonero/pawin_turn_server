const Turn = require('node-turn');

const server = new Turn({
  // El puerto en el que el servidor TURN escuchará las solicitudes
  listeningPort: 3478,
  // La IP en la que el servidor TURN escuchará las solicitudes
  listeningIps: ['0.0.0.0'],  // Escucha en todas las interfaces
  relayIps: ['0.0.0.0'],       // IP para el tráfico relay
  authMech: 'long-term',
  credentials: {
    username: 'username',
    credential: 'password'
  },
});

server.start();