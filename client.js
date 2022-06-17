const net = require('net');

const client = {
  // establishes a connection with the game server
  connect: function () {
    const conn = net.createConnection({
      host: 'localhost', // IP address here,
      port: 50541 // PORT number here,
    });
   
    // interpret incoming data as text
    conn.setEncoding("utf8");

    //connect event
    conn.on('connect', () => {
    console.log('Connected to the server!');
  });
  
    // data event
    conn.on('data', function (data) {
    console.log('Server: ' + data);
    });
      return conn;
  }
};

module.exports = client;