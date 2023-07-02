"use strict"    
    
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
//intento de toma de fechas desde Date() , pero no es compatible en este momento con varias plataformas//
// let ofertaMes = document.querySelector("#ofertaMes");
// var fecha = new Date();
// var mes = fecha.getMonth();
// mes++;
// console.log(mes);
// switch (mes) {

//     case 1 :
//          ofertaMes.innerHTML = "Enero" ;
//     break;
//     case 2 :
//          ofertaMes.innerHTML = "Febrero" ;
//     break;
//     case 3 :
//          ofertaMes.innerHTML = "Marzo" ;
//     break;
//     case 4 :
//          ofertaMes.innerHTML = "Abril" ;
//     break;
//     case 5 :
//          ofertaMes.innerHTML = "Mayo" ;
//     break;
//     case 6 :
//          ofertaMes.innerHTML= "Junio" ;
//     break;
//     case 7 :
//          ofertaMes.innerHTML = "Julio" ;
//     break;
//     case 8 :
//          ofertaMes.innerHTML = "Agosto" ;
//     break;
//     case 9 :
//          ofertaMes.innerHTML = "Septiembre" ;
//     break;
//     case 10 :
//          ofertaMes.innerHTML = "Octubre" ;
//     break;
//     case 11:
//          ofertaMes.innerHTML = "Noviembre" ;
//     break;
//     case 12 :
//          ofertaMes.innerHTML = "Diciembre" ;
//     break;

// }
   
