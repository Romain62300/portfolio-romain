// script.js

const button = document.getElementById("toggle-theme");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    button.textContent = "☀️ Mode jour";
  } else {
    button.textContent = "🌙 Mode nuit";
  }
});
