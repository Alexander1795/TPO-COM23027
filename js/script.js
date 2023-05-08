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

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
			.then(response => response.json()) // Convertir la respuesta a JSON
			.then(data => {
				// Procesar los datos
				const valores = data.filter(item => item.casa.nombre.includes('Dolar'));

				// Mostrar los valores en la tabla
				const table = document.getElementById('valores-table');
				valores.forEach(item => {
					const row = table.insertRow();
					row.insertCell(0).innerHTML = item.casa.nombre;
					row.insertCell(1).innerHTML = item.casa.compra;
					row.insertCell(2).innerHTML = item.casa.venta;
				});
			})
			.catch(error => console.error(error));