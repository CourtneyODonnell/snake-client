// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  
  const handleUserInput = (input) => {
    if (input === '\u0003') {
      process.exit();
    } else if (input === 'w'){
      conn.write('Move: up');
    } else if (input === 's'){
      conn.write('Move: down');
    } else if (input === 'd'){
      conn.write('Move: right');
    } else if (input === 'a'){
      conn.write('Move: left');
    }
    connection.write(`${input}`);
  }

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (userInput) => {
    handleUserInput(userInput, conn);


  return stdin;


});

};
module.exports = {setupInput};