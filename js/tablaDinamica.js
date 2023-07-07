"use strict"

let url = 'https://649ac80bbf7c145d023975ee.mockapi.io/api/v1/productos' ;

let btnAgrega = document.querySelectorAll(".cargarProd");

let btnBorra = document.querySelector("#borrarTabla");

let tablaPrecios = document.querySelector("#tablaPrecios");

let lista = [];



btnBorra.addEventListener("click", borrarTabla);

obtenerObjetos();


async function obtenerObjetos() {
  try {
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
  let tablaPrecios = document.getElementById("tablaPrecios");
  if (!tablaPrecios) {
    console.error("No se encontró la tablaPrecios en el DOM.");
    return;
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
    fila.appendChild(tdDesc15);

    return fila;
  });

  filas.forEach((fila) => {
    tablaPrecios.appendChild(fila);
  });
}

// async function obtenerObjetos() {
  
//   try {
//     let res = await fetch(url);
//     let json = await res.json();
    
//     console.log(json);

//     for (const producto of json) {
//       let nombre = producto.producto;
//       let precio250 = producto.precio250;
//       let precio500 = producto.precio500;
//       let precio1kg = producto.precio1kg;
//       let desc15 = producto.desc15;
//       console.log(nombre + "  "+precio250+"  " +"  "+precio500+"  "+ precio1kg+"   " + desc15);

//        let fila= document.createElement("tr");

//          let tdNombre = document.createElement('td');
//          tdNombre.textContent = nombre;
//          fila.appendChild(tdNombre);
//         let tdPrecio250 = document.createElement('td');
//          tdPrecio250.textContent = precio250;
//          fila.appendChild(tdPrecio250);
//         let tdPrecio500 = document.createElement('td');
//          tdPrecio500.textContent = precio500;
//          fila.appendChild(tdPrecio500);
//         let tdPrecio1kg = document.createElement('td');
//          tdPrecio1kg.textContent = precio1kg;
//          fila.appendChild(tdPrecio1kg);
//         let tdDesc15 = document.createElement('td');
//          tdDesc15.textContent = desc15;
//          fila.appendChild(tdDesc15);

//         tablaPrecios.appendChild(fila);
//     }

//     console.log("Aquí está la lista completa:");
//     console.log(json);
//     return json;

//   } 
//   catch (error) {
//     console.log(error);
//   }
// }






function mostrarProductos(json){
  for(let i = 0 ; i<json.length;i++){
    console.log("prueba "+ json.producto + json.precio250 + json.precios500 + json.precio1kg );
    
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
