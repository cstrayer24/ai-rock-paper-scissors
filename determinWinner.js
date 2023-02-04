import model from "./model";

const net = new brain.recurrent.LSTM();
const ai = new model();

class determinWinner {
  constructor() {
    this.net = net;
    this.train();
    // this.test();
  }
  train() {
    this.net.train([
      { input: ["rock", "paper"], output: "true " },
      { input: ["scissors", "paper"], output: "false" },
      { input: ["paper", "scissors"], output: "true " },
      { input: ["scissors", "rock"], output: "true " },
      { input: ["paper", "rock"], output: "false" },
      { input: ["scissors", "rock"], output: "false" },
    ]);
  }
  test() {
    this.net.test(ai.run("rock"), {
      iterations: 2000,
    });
  }

  run(input) {
    return this.net.run(input);
  }
}

export default determinWinner;
