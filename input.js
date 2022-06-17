// Stores the active TCP connection object.
let connection;


const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  } else if (input === 'w'){
    connection.write('Move: up');
  } else if (input === 's'){
    connection.write('Move: down');
  } else if (input === 'd'){
    connection.write('Move: right');
  } else if (input === 'a'){
    connection.write('Move: left');
  }
  //connection.write(`${input}`);
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