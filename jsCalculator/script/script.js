const input = document.querySelector("#input");

function addInput(number) {
  input.value += number;
}
function result() {
  if (input.value) input.value = eval(input.value);
}

// for (let i = 0; i < 20; i++) {}

// function addInput(e) {}
// document.querySelectorAll(".btn")[0].addeventListener("click", function () {
//   const text = this.innerHTML;

//   console.log(text);
// });
