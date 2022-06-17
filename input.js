// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (userInput) => {
    handleUserInput(userInput, conn);
  });

  return stdin;
};

/*Add logic to the input.js file to console.log 
the movement command to your screen if one of these
keys is pressed. */

module.exports = setupInput;