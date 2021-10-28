const boxes = document.querySelectorAll(".inner");
const firstBox = boxes[0];
const div = document.createElement("div");
div.style.position = "absolute";
div.style.top = firstBox.offsetTop + "px";
div.style.left = firstBox.offsetLeft + "px";
div.style.transition = "0.7s ease all";
div.style.zIndex = 1;
div.style.backgroundColor = "#b57604";
div.style.width = firstBox.offsetWidth + "px";
div.style.height = firstBox.offsetHeight + "px";
document.querySelector(".row").appendChild(div);
console.log(div);

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    div.style.top = box.offsetTop + "px";
    div.style.left = box.offsetLeft + "px";
  });
});
