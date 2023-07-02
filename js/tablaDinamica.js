"use strict"

//tabla  dinamica

console.log("hola mundo");

let url = 'https://649ac80bbf7c145d023975ee.mockapi.io/api/v1/productos' ;
let btnAgrega = document.querySelectorAll(".cargarProd");
let btnBorra = document.querySelector("#borrarTabla");
let lista = [];
 cargaProd();
 obtenerObjetos();
 console.log("hola" + json);


async function obtenerObjetos(){
  try{
  let res = await fetch(url); // GET url
  let json = await res.json(); // texto json a objeto
  console.log(json);
  for (const producto of json) {
      let nombre = producto.producto;
      lista.innerHTML += `<li>${nombre}</li>`;
  }
}
 catch (error) {
  console.log(error);
}







  






 // Precarga de los productos
// let productosPrecargados = [{

//     "producto": "almendras",
//     "precio250": 1629,
//     "precio500": 3200,
//     "precio1kg": 6000,
//     "desc15": false  },
//   {
//     "producto": "Castañas de Caju",
//     "precio250": 1660,
//     "precio500": 3200,
//     "precio1kg": 6100,
//     "desc15": true,},
//   {
//     "producto": "Pistacho",
//     "precio250": 1660,
//     "precio500": 3250,
//     "precio1kg": 6200,
//     "desc15": false,
//   },
// ];

// // Event Listeners
// btnAgrega.forEach((btn) => {
//   btn.preventDefault();
//   btn.addEventListener("click", function() {    
//     let repetirVeces = parseInt(btn.value);
//       for (let i = 0; i < repetirVeces; i++) {
//         agregarProd();
//        }

//   });
  
// });

btnBorra.addEventListener("click", borrarTabla);

// Precarga de los productos
// productosPrecargados.forEach((producto) => {
//   cargaProd(producto);
// });

// Función para agregar un nuevo producto
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
