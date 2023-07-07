"use strict"
//Partial Render

let contenedor = document.querySelector(".containerPR");
let navbtn = document.querySelectorAll(".link");

for (let i = 0; i < navbtn.length; i++) {
    const btn = navbtn[i];
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cargarPR(btn.dataset.link);
    });

}

document.addEventListener('DOMContentLoaded', () => {
    cargarPR('main.html');
});

async function cargarPR(url) {
    
    cargando();                 
    
    try {

        let response = await fetch(url);
        if (response.ok) {
            console.log("ok");
            let t = await response.text();
            contenedor.innerHTML = t;
            console.log(url)
        }

        else {
            let error = document.createElement("h3");
            error.textContent = " error en la carga 1 ";
            contenedor.appendChild(error);
        }

            //CARGA LISTA DE PRECIOS  SOLO SE EJECUTA SI ES LA PAGINA A TRAVES DE MOCKAPI 
        if (url == "listaPrecios.html") {
            let url = 'https://649ac80bbf7c145d023975ee.mockapi.io/api/v1/productos';

            let btnAgrega = document.querySelectorAll(".cargarProd");

            let btnBorra = document.querySelector("#borrarTabla");

            let tablaPrecios = document.querySelector("#tablaPrecios");

            let lista = [];



            btnBorra.addEventListener("click", borrarTabla);

            obtenerObjetos();


            async function obtenerObjetos() {
                try {
                    cargando();
                    let res = await fetch(url);
                    let json = await res.json();

                    console.log(json);

                    const productos = json.map((producto) => {
                        let nombre = producto.producto;
                        let precio250 = producto.precio250;
                        let precio500 = producto.precio500;
                        let precio1kg = producto.precio1kg;
                        let desc15 = producto.desc15;

                        return { nombre, precio250, precio500, precio1kg, desc15 };
                    });

                    crearElementosUI(productos);

                    console.log("Aquí está la lista completa:");
                    console.log(json);
                    return json;
                } catch (error) {
                    console.error("Error al obtener los objetos:", error);
                    throw error;
                }
            }

            function crearElementosUI(productos) {
                 let tablaPrecios = document.querySelector("#tablaPrecios");
                 if (!tablaPrecios) {
                     console.error("No se encontró la tablaPrecios en el DOM.");
                     
                     
                 }

                const filas = productos.map((producto) => {
                    let fila = document.createElement("tr");

                    let tdNombre = document.createElement('td');
                    tdNombre.textContent = producto.nombre;
                    fila.appendChild(tdNombre);

                    let tdPrecio250 = document.createElement('td');
                    tdPrecio250.textContent = producto.precio250;
                    fila.appendChild(tdPrecio250);

                    let tdPrecio500 = document.createElement('td');
                    tdPrecio500.textContent = producto.precio500;
                    fila.appendChild(tdPrecio500);

                    let tdPrecio1kg = document.createElement('td');
                    tdPrecio1kg.textContent = producto.precio1kg;
                    fila.appendChild(tdPrecio1kg);

                    let tdDesc15 = document.createElement('td');
                    tdDesc15.textContent = producto.desc15;
                    tdDesc15.classList.add("tdDesc15");
                    if(tdDesc15.textContent=='true'){
                        fila.classList.add("descPorcentaje");
                        console.log("tiene descuento!!!");
                    }
                    fila.appendChild(tdDesc15);
                    
                    
                    return fila;
                });

                filas.forEach((fila) => {
                    tablaPrecios.appendChild(fila);
                });
            }




            function mostrarProductos(json) {
                for (let i = 0; i < json.length; i++) {
                    console.log("prueba " + json.producto + json.precio250 + json.precios500 + json.precio1kg);

                }
            }

            function agregarProd() {
                let producto = document.querySelector("#producto").value;
                let precio250 = parseInt(document.querySelector("#precio250").value);
                let precio500 = parseInt(document.querySelector("#precio500").value);
                let precio1kg = parseInt(document.querySelector("#precio1kg").value);
                let checkdesc15 = document.querySelector("#desc15").checked;

                let nuevoProducto = {
                    "producto": "producto",
                    "precio250": precio250,
                    "precio500": precio500,
                    "precio1kg": precio1kg,
                    "desc15": checkdesc15
                };

                lista.push(nuevoProducto);

                cargaProd(nuevoProducto);
            }

            // Función para cargar producto en la tabla
            function cargaProd(nuevoProducto) {
                let tablaPrecios = document.querySelector("#tablaPrecios");
                let nuevaFila = document.createElement("tr");

                nuevaFila.innerHTML = `
                    <td>${nuevoProducto.producto}</td>
                    <td>$${nuevoProducto.precio250}</td>
                    <td>$${nuevoProducto.precio500}</td>
                    <td>$${nuevoProducto.precio1kg}</td>
                  `;

                if (nuevoProducto.desc15) {
                    nuevaFila.classList.add("descPorcentaje");
                }

                tablaPrecios.appendChild(nuevaFila);
            }

            // Función para borrar el contenido de la tabla
            function borrarTabla() {
                let tablaPrecios = document.querySelector("#tablaPrecios");
                tablaPrecios.innerHTML = "";
                lista = [];
            }
        }


        else if (url == "contacto.html") {
            console.log("captcha ok")


            let imgCaptcha = document.querySelector("#imgCaptcha");
            let NroImagen = obtenerNroRandom();
            console.log(imgCaptcha.src);
            console.log(NroImagen);
            selectorDeImagenes();

            let txtcaptcha = document.querySelector("#txtcptch");

            let btncaptcha = document.querySelector("#btnCaptcha");

            let comparacion;

            let verificacion = document.querySelector("#verificacion");



            btncaptcha.addEventListener('click', comparacionImbInput);

            //Funciones

            //escucha de submit del formulario
            let form = document.querySelector("#formContact");
            form.addEventListener("submit", agregar);

            function agregar(formulario) {
                formulario.preventDefault();
                let formData = new FormData(form);
                let nombre = formData.get("nombre");
                let apellido = formData.get("apellido");
                let telefono = formData.get("telefono");
                let direccion = formData.get("direccion")
                let email = formData.get("email");
                let comentario = formData.get("comentario");



                //console.log(nombre, apellido, telefono,direccion, email, comentario);


            }

            //lectura del valor ingresado por el usuario
            function lecturaInput() {

                let txtcaptcha = document.querySelector("#txtcptch");
                const valorTxtCaptcha = txtcaptcha.value;
                //console.log(valorTxtCaptcha) ;
                //console.log(comparacion);
                comparacion = valorTxtCaptcha;
                return comparacion;
            }
            // compara el valor ingresado por el usuario por el valor correspondiente a la imagen
            //se resuelve con un switch hasta poder realizar correctamente la lectura de archivos externos 
            function comparacionImbInput() {
                lecturaInput();
                switch (NroImagen) {
                    case 1:

                        if (comparacion == "nvhoxdm") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }

                        break;


                    case 2:

                        if (comparacion == "plbhxzxl") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;


                    case 3:

                        if (comparacion == "phxxjdrk") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;

                    case 4:
                        if (comparacion == "yhykemwr") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;

                    case 5:
                        if (comparacion == "nrtgdkwn") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;
                    case 6:
                        if (comparacion == "zagxtwdx") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;
                    case 7:
                        if (comparacion == "lucytpft") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;
                    case 8:
                        if (comparacion == "czchjiav") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;
                    case 9:
                        if (comparacion == "wvvjcfua") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;
                    case 10:

                        if (comparacion == "udbbgxls") {
                            verificacion.innerHTML = "Acceso Correcto";
                            verificacion.classList.add("captchaVerde");
                            verificacion.classList.remove("captchaRojo");
                        }
                        else {
                            verificacion.classList.remove("captchaVerde");
                            verificacion.classList.add("captchaRojo");
                            verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                        }
                        break;


                    default:
                        break;
                }
            }
            //Selección de imagen con nro geneado al azar
            function selectorDeImagenes() {

                console.log(imgCaptcha.src)

                imgCaptcha.src = "images/capthchasImages/captcha" + NroImagen + ".png";

                return imgCaptcha;
            }

            //funcion que retorna un valor random entre 1 y 10 
            function obtenerNroRandom() {
                let nrorandom = 1;
                nrorandom = Math.floor(Math.random() * 10) + 1;
                return nrorandom;
            }
        }
    }   

    catch (error) {
        console.log("error en la carga 2" + error);
    }

    //menu desplegable

    let navicon = document.getElementById('navicon');
    let menu = document.getElementById('navBar')

    navicon.addEventListener("click", function () {
        if (menu.style.display == "none") {   //mala practica, usar un estilo a traves de una clase
            menu.style.display = "block";  //mala practica, usar un estilo a traves de una clase
        }
        else {
            menu.style.display = "none";  //mala practica, usar un estilo a traves de una clase
        }

    }
    );

}
function cargando(){
    let cargando = document.createElement("div");

    cargando.id = "cargando";
    
    cargando.textContent = "loading..."
    
    contenedor.appendChild(cargando);
        
}