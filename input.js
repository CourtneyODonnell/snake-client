

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (userInput) => {
    handleUserInput(userInput);
  })

  return stdin;
};

module.exports = setupInput;