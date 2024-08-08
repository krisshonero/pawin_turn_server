const Turn = require('node-turn');

const server = new Turn({
  // El puerto en el que el servidor TURN escuchará las solicitudes
  listeningPort: 3478,
  // La IP en la que el servidor TURN escuchará las solicitudes
  listeningIps: ['0.0.0.0'],
  // Habilita la autenticación con nombre de usuario y contraseña
  authMech: 'long-term',
  credentials: {
    username: 'password'
  },
  // Habilita la depuración para obtener más información en la consola
  debugLevel: 'ALL'
});

server.start();