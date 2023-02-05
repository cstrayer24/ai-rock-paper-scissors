import model from "./model";
import determinWinner from "./determinWinner";
const runBtn = document.querySelector("#runBtn");
const selection = document.querySelector("#rps");
const aiOut = document.querySelector("#ai-answer");
const ai = new model();
const determine = new determinWinner();

runBtn.addEventListener("click", () => {
  const [input, output] = ai.run(selection.value);
  aiOut.innerHTML = `ai answer:${output}`;
  const result = determine.run([input, output]);
  console.log(result);
  if (result === "false") {
    document.body.style.background = "green";
  } else {
    document.body.style.background = "red";
  }
});
