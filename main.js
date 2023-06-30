const menu = document.querySelector("#menu");
const hamburguer = document.querySelector("#hamburguer");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("visible");
})