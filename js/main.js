"use strict"

//partial render


let contenedor = document.querySelector(".containerPR");
let navbtn = document.querySelectorAll(".link");

for (let i =0; i<navbtn.length;i++){
    const btn=navbtn[i];
    btn.addEventListener('click',(e) =>{
        e.preventDefault();
        cargarPR(btn.href);
    });
   
}

document.addEventListener('DOMContentLoaded', () => {
    cargarPR('main.html');
});

async function cargarPR(url){
    //event.preventDefault();
    try{
        let cargando = document.createElement("div");

            cargando.id="cargando";
            cargando.textContent="loading..."
            contenedor.appendChild(cargando);

        let response = await fetch(url);
            if(response.ok){
                console.log("ok");
                let t =await response.text();
                contenedor.innerHTML = t;
                console.log(url);                            
            }
            else{
                let error = document.createElement("h3");
                error.textContent=" error en la carga 1 ";
                containerPR.appendChild(error);
            }
    }
    catch(error){
        console.log("error en la carga 2" +error);
    }
}









    //menu desplegable

let navicon = document.getElementById('navicon');
let menu = document.getElementById('navBar')

navicon.addEventListener("click", function(){
        if(menu.style.display== "none"){   //mala practica, usar un estilo a traves de una clase
            menu.style.display = "block";  //mala practica, usar un estilo a traves de una clase
        }
        else{
            menu.style.display = "none";  //mala practica, usar un estilo a traves de una clase
          }

   }
);

