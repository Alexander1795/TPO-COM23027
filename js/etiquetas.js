let header = `
<div><img src="img/Sin12.png" alt="Logo"></div>
`
document.querySelector(".encabezado").innerHTML = header;

let headerNav = `
<button class="abrir-menu" id="abrir">&#9776;</button>
            <div class="navegador" id="nav">
                <nav>
                    <button class="cerrar-menu" id="cerrar">&#9776;</button>
                    <ul class="menu">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="catalogo.html">Catalogo</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>
`
document.querySelector(".gradiante").innerHTML = headerNav;

let footer = `
            <div>
                <p>Todos los derechos reservados &copy 2023</p>
                <a class="link" href="https://github.com/Alexander1795/TPO-COM23027" target="_blank"><i
                        class="fa fa-github" aria-hidden="true"></i></a>
                <a class="link" href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"
                        aria-hidden="true"></i></a>
                <a class="link" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
                        aria-hidden="true"></i></a>
                <a class="link" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"
                        aria-hidden="true"></i></a>
            </div>
`

document.querySelector(".pie").innerHTML = footer