const net = new brain.recurrent.LSTM();

class model {
  constructor() {
    this.net = net;
    this.train();
    // this.test();
  }

  train() {
    this.net.train([
      { input: "rock", output: "paper" },

      { input: "paper", output: "scissors" },
      { input: "scissors", output: "rock" },
    ]);
  }

  test() {
    this.net.test("rock", {
      iterations: 2000,
    });
  }

  run(input) {
    let output = this.net.run(input);
    return [input, output];
  }
}

export default model;
