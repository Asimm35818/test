const hachi = document.getElementById("hachiware");
const title = document.getElementById("title");
const moveamount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp" || event.key == "ArrowDown") {
    event.preventDefault;
    hachi.style.visibility = "visible";
    title.textContent = "Omg....";
    switch (event.key) {
      case "ArrowUp":
        y -= moveamount;
        break;

      case "ArrowDown":
        y += moveamount;
        break;
    }
  }
  if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
    event.preventDefault;
    hachi.style.visibility = "visible";
    title.textContent = "Omg....";
    switch (event.key) {
      case "ArrowLeft":
        x -= moveamount;
        break;

      case "ArrowRight":
        x += moveamount;
        break;
    }
  }
  hachi.style.top = `${y}px`;
  hachi.style.left = `${x}px`;
});
