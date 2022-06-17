const { connect } = require('./client');
const net = require('net');

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost', // IP address here,
//     port: 50541 // PORT number here,
//   });

//   conn.on("connect", () => {
//     console.log('Connected!');
//   });
  
//   conn.on("data", function (data) {
//     console.log('From server: ' + data);
//   });
  
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

console.log("Connecting ...");
connect();
