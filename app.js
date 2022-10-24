const searchBtn = document.querySelector(".container i");
const inputField = document.querySelector(".container .input");
const container = document.querySelector(".container");

searchBtn.addEventListener("click", () => {
  inputField.classList.toggle("hide");
});
