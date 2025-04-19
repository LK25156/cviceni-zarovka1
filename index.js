console.log('funguju!');
//rozsvěcení žárovky

/*const bulbElm = document.querySelector(".bulb");
document.addEventListener("keydown", () => {
  bulbElm.classList.add("bulb--on");
});*/

//rozsvěcení a zhasínání žárovky

/*const bulbElm = document.querySelector(".bulb");
document.addEventListener("keydown", () => {
  if (bulbElm.classList.contains("bulb--on")) {
    bulbElm.classList.remove("bulb--on");
  }else {
    bulbElm.classList.add("bulb--on");
  }
});*/

 

//jednodušší rozsvícení a zhasínání žárovky

const bulbElm = document.querySelector(".bulb");
document.addEventListener("keydown",() => {
bulbElm.classList.toggle("bulb--on");
});
