// Stores the active TCP connection object.
let connection;

const { moveDown, moveUp, moveRight, moveLeft } = require('./constants');


const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } else if (input === moveUp){
    connection.write('Move: up');
  } else if (input === moveDown){
    connection.write('Move: down');
  } else if (input === moveRight){
    connection.write('Move: right');
  } else if (input === moveLeft){
    connection.write('Move: left');
  } else if (input === 'q') {
    connection.write('Say: Prepare to die!');
  } else if (input === 'e') {
    connection.write('Say: Your time is near');
  }
}
// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);


  return stdin;


};

module.exports = {setupInput};