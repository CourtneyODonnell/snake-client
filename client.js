//constants to require for use in this file
const net = require('net');
//const setupInput = require('./input');
const { IP, PORT } = require('./constants');
//const { connected } = require('process');


  // const up = 'Move: up';
  // const down = 'Move: down';
  // const right = 'Move: right';
  // const left = 'Move: left';


//connect function
const connect = () => {
  // establishes a connection with the game server
      const conn = net.createConnection({
        host: IP,
        port: PORT
      }); 
    // interpret incoming data as text
    conn.setEncoding("utf8");

    // setInterval(() => { conn.write(`${up}`)}, 5000);
    // setInterval(() => { conn.write(`${right}`)}, 1000);
    // setInterval(() => { conn.write(`${down}`)}, 1000);
    // setInterval(() => { conn.write(`${left}`)}, 1000);

    //connect event
    conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: CIO');    
  });
  
    // data event
    conn.on('data', (data) =>  {
    console.log('Server: ' + data);
    });
    
      return conn;


};

//exports from this file
module.exports = {connect};