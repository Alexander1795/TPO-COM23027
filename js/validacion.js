var formulario = document.getElementsByName('formulario')[0],  //[0] Primer elemento, el formulario en si mismo.
        elementos = formulario.elements, // Elementos del form, no lo usamos en este script.
        boton = document.getElementById('b1') // El botón

        // Validamos Nombre
        
        var validarNombre = function (e) {
            if (formulario.nombre.value == 0) { 
                alert("Completa el campo Nombre")
                e.preventDefault() 
            }
        
        }

        // Validamos Apellido

        var validarApellido = function (e) {
            if (formulario.apellido.value == 0) { 
                alert("Completa el campo Apellido")
                e.preventDefault() 
            }
        }

        // Validamos Email

        var validarEmail = function (e) {
            if (formulario.email.value == 0) { 
                alert("Completa el campo Email")
                e.preventDefault()                 
            }
        
        }

        // Validamos Ciudad
        
        var validarCiudad = function (e) {
            if (formulario.ciudad.value == 0) { 
                alert("Completa el campo Ciudad")
                e.preventDefault()                 
                }
                
        }

        // Validamos Codigo Postal

        var validarCp = function (e) {
            if (formulario.cp.value == 0) { 
                alert("Completa el campo Codigo Postal")
                e.preventDefault()                 
                }
                
        }


       


        // Validamos Asunto

        var validarRadio = function (e) {
            if (formulario.asunto[0].checked == true ||
                formulario.asunto[1].checked == true ||
                formulario.asunto[2].checked == true ||
                formulario.asunto[3].checked == true ||
                formulario.asunto[4].checked == true ||
                formulario.asunto[5].checked == true) {
            } else {
                alert("Selecciona un Asunto")
                e.preventDefault()
            }
        }

        
        // Validamos Términos y Condiciones
        
        var validarCheckbox = function (e) {
            if (formulario.terminos.checked == false) {
                alert("Acepta los términos y condiciones")
                e.preventDefault()
            }
        };

        
        // Se ejecuta al presionar submit e invoca a las validaciones
        
        var validar = function (e) {  
            validarNombre(e)
            validarApellido(e)
            validarEmail(e)
            validarCiudad(e)
            validarCp(e)
            validarRadio(e)
            validarCheckbox(e)
        }


        // Espera que se presione "enviar" y llama a "validar"

        formulario.addEventListener("submit", validar)