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

// Agregamos las cards x20 manipulando DOM
// const originalCard = document.querySelector('.card');
// const catalogoSection = document.querySelector('.catalogo');

// for (let i = 0; i < 19; i++) {
//     const clonedCard = originalCard.cloneNode(true);
//     catalogoSection.appendChild(clonedCard);
// }

//Boton volver Arriba 
const VolverArriba = document.querySelector(".volver-arriba")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100){
   VolverArriba.classList.add("visible");
  }
  else{
    VolverArriba.classList.remove("visible");
  }

})


//Consumimos api DolarSi
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
  .then(response => response.json())
  .then(data => {
    const valores = [data[0], data[1], data[4]];
    const oficial = document.getElementById('dlr-oficial');
    const blue = document.getElementById('dlr-blue');
    const bolsa = document.getElementById('dlr-bolsa');

    valores.forEach(item => {
      if (item.casa.nombre === 'Dolar Oficial') {
        oficial.innerHTML = `<h4>Dolar Oficial</h4><p>Compra: ${item.casa.compra} | Venta: ${item.casa.venta}</p>`;
      } else if (item.casa.nombre === 'Dolar Blue') {
        blue.innerHTML = `<h4>Dolar Blue</h4><p>Compra: ${item.casa.compra} | Venta: ${item.casa.venta}</p>`;
      } else if (item.casa.nombre === 'Dolar Bolsa') {
        bolsa.innerHTML = `<h4>Dolar Bolsa</h4><p>Compra: ${item.casa.compra} | Venta: ${item.casa.venta}</p>`;
      }
    });
  })
  .catch(error => console.error(error));

  var cards = ``

  for (let elemento of articulos){
    var cards = cards + `
            <div class="card">
                <img src=${elemento.foto} alt="pc-gamer">
                <h4>${elemento.name}</h4>
                <p>${elemento.descripcion}</p>
                <a href="contacto.html" target="_blank">Consulta aquí</a>
            </div>
    `
  }

  document.querySelector(".catalogo").innerHTML = cards;