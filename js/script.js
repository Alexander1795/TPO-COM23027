const navegador = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    console.log("Click registrado");
    navegador.classList.toggle("visible");
    abrir.classList.toggle("invisible")
})

cerrar.addEventListener("click", () => {
    console.log("Click registrado");
    navegador.classList.toggle("visible")
    abrir.classList.toggle("invisible")
})
