const rgb = document.getElementById("btn-rgb");
const hex = document.getElementById("btn-hex");

rgb.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  rgb.textContent = `rgba(${red},${green},${blue})`;

  document.body.style.backgroundColor = `rgba(${red},${green},${blue})`;
});

hex.addEventListener("click", () => {
  const hexColor = (Math.random() * 16777215).toString(16).split(".")[0];
  hex.textContent = `#${hexColor}`;

  document.body.style.backgroundColor =  `#${hexColor}`;;
});

document.querySelector("#date").textContent = new Date().getFullYear();

