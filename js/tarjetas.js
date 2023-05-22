let alumnos = [
    {
        "id": 1,
        "name":"Alexander Jose Esteban, Arevalo",
        "foto": "./img/silueta.png",
        "ubicacion": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27048.45486797485!2d-60.62383139999999!3d-32.06771085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5cda484c0de1b%3A0x708a22dff3fe8d55!2sDiamante%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1684171420085!5m2!1ses!2sar"

    },
    {
        "id": 2,
        "name":"Alejandro Ivan, Reinoso",
        "foto": "./img/silueta.png",
        "ubicacion": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27048.45486797485!2d-60.62383139999999!3d-32.06771085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5cda484c0de1b%3A0x708a22dff3fe8d55!2sDiamante%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses!2sar!4v1684171420085!5m2!1ses!2sar"

    },
    {
        "id": 3,
        "name":"Alexis Miguel, Mossello",
        "foto": "./img/silueta.png",
        "ubicacion": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53716.8310588437!2d-60.79034485066427!3d-32.70460348429318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b6d893e36e3%3A0x660ab3c68e46bda!2sPuerto%20Gral.%20San%20Martin%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1684608688993!5m2!1ses!2sar"
    },
    {
        "id": 4,
        "name":"Fabrizio Fabian, Ricardini",
        "foto": "./img/silueta.png",
        "ubicacion": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52495.22727040535!2d-58.83144116599596!3d-34.68116835994446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95434093dd6b%3A0x58d832f755e4a278!2sMerlo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1684608761803!5m2!1ses!2sar"
    }
]


var integrantes = ``

for (let elemento of alumnos){
  var integrantes = integrantes + `
          <div class="card">
              <img src=${elemento.foto} alt="pc-gamer">
              <h4>${elemento.name}</h4>
              <iframe src=${elemento.ubicacion} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
  `
}

document.querySelector(".contenido").innerHTML = integrantes;