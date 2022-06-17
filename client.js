const net = require('net');
//const { connected } = require('process');

const connect = () => {
    // establishes a connection with the game server
    //connect: function () {
    const conn = net.createConnection({
      host: 'localhost', // IP address here,
      port: 50541 // PORT number here,
    });
   
    // interpret incoming data as text
    conn.setEncoding("utf8");

    setInterval(() => { conn.write(`${up}`)}, 5000);
    setInterval(() => { conn.write(`${down}`)}, 1000);
    setInterval(() => { conn.write(`${right}`)}, 1000);
    setInterval(() => { conn.write(`${left}`)}, 1000);

    //connect event
    conn.on('connect', data => {
    console.log('Successfully connected to game server!');
    conn.write('Name: CIO');
    //conn.write('Move: up');

    const up = 'Move: up';
    const down = 'Move: down';
    const right = 'Move: right';
    const left = 'Move: left';
    
  });
  
    // data event
    conn.on('data', (data) =>  {
    console.log('Server: ' + data);
    });
      return conn;


};


module.exports = {connect};