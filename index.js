
// temperature converter
let textbox = document.getElementById("textbox");
let tofahrenheit = document.getElementById("tofahrenheit");
let tocelsius = document.getElementById("tocelsius");
let results = document.getElementById("result");
let temp;
function result() {
  temp = Number(textbox.value);
  if (!textbox.value) {
    results.textContent = "Enter the value";
  } else if (tofahrenheit.checked) {
    temp = (temp * 9) / 5 + 32;
    results.textContent = `${temp.toFixed(1)} F`;
  } else if (tocelsius.checked && textbox.value) {
    temp = (5 / 9) * (temp - 32);
    results.textContent = `${temp.toFixed(1)} C`;
  } else {
    results.textContent = "Select a Unit";
  }
}
