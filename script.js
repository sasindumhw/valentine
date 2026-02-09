function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandome = document.querySelector("#move-random");

moveRandome.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
