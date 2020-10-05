let roll = document.querySelector("#roll");
let totalResult = document.querySelector("#result");
let showRolls = document.querySelector("#showRoll");
let lists = document.querySelector("#lists");
roll.addEventListener("click", function () {
  let dieRolls = [];
  let userInput = document.querySelector("#num").value;
  let num = 0;
  let total = 0;
  while (num < userInput) {
    let x = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(x);
    total += dieRolls[num];
    num += 1;
  }
  totalResult.innerHTML = total;
  console.log(dieRolls);
  showRolls.addEventListener("click", function () {
    str = "<ol>";
    dieRolls.forEach(function (die) {
      str += "<li>" + die + "</li>";
    });
    str += "</ol>";
    lists.innerHTML = str;
  });
});
let numberofresets = document.querySelector("#resets-butttom");
let resetbutton = document.querySelector("#num-resets"); 
  numberofresets.addEventListener("clicked", function() {
    let numberofresets = Number(resetbutton.innerHTML) + 1;
    resetbutton.innerHTML = numberofresets;
dieRolls.innerHTML =0
})



