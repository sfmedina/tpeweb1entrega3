"use strict";

// Declaracion de variables globales y asociaciadas a elementos del html
let NroImagen = obtenerNroRandom();

selectorDeImagenes();

let txtcaptcha = document.querySelector("#txtcptch");

let btncaptcha =  document.querySelector("#btnCaptcha");

let comparacion ;

let verificacion = document.querySelector("#verificacion");


btncaptcha.addEventListener('click',comparacionImbInput);

//Funciones

//escucha de submit del formulario
let form =document.querySelector("#formContact");
    form.addEventListener("submit",agregar);
    
function agregar(formulario){
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
function lecturaInput(){        
    
    let txtcaptcha = document.querySelector("#txtcptch");
    const valorTxtCaptcha = txtcaptcha.value ;    
    //console.log(valorTxtCaptcha) ;
    //console.log(comparacion);
    comparacion =valorTxtCaptcha;
    return comparacion;
}  
   // compara el valor ingresado por el usuario por el valor correspondiente a la imagen
   //se resuelve con un switch hasta poder realizar correctamente la lectura de archivos externos 
function comparacionImbInput(){
    lecturaInput();
    switch (NroImagen) {
        case 1:
            
            if (comparacion =="nvhoxdm") {
                verificacion.classList.add("captchaVerde");
                verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                verificacion.classList.add("captchaRojo");
                verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
            }              
                
        break;
        

        case 2:
           
                if (comparacion =="plbhxzxl") {
                       verificacion.classList.add("captchaVerde");
                       verificacion.innerHTML = "Acceso Correcto";
                   }
                       else {   
                       verificacion.classList.add("captchaRojo");
                       verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                   }
                break;

                    
        case 3:
                   
                if (comparacion =="phxxjdrk") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
                 }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                }
        break;

        case 4:
                if (comparacion =="yhykemwr") {
                    verificacion.classList.add("captchaVerde");
                     verificacion.innerHTML = "Acceso Correcto";
                    }
                    else {   
                    verificacion.classList.add("captchaRojo");
                    verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
                break;
        
        case 5:
                 if (comparacion =="nrtgdkwn") {
                     verificacion.classList.add("captchaVerde");
                     verificacion.innerHTML = "Acceso Correcto";
            }
                      else {   
                     verificacion.classList.add("captchaRojo");
                     verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                 }
                 break;
        case 6:
                    if (comparacion =="zagtwdx") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
        break;
        case 7:
                    if (comparacion =="lucytpft") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
                    break;
        case 8:
                    if (comparacion == "czchjiav") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
                    break;
        case 9:
                    if (comparacion == "wvvjcfua") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
                    break;
        case 10:
           
                    if (comparacion == "udbbgxls") {
                        verificacion.classList.add("captchaVerde");
                        verificacion.innerHTML = "Acceso Correcto";
            }
                else {   
                        verificacion.classList.add("captchaRojo");
                        verificacion.innerHTML = "Acceso Erroneo, vuelva a intentarlo";
                    }
                    break;     

                            
        default:
            break;
    }
}
//Selección de imagen con nro geneado al azar
function selectorDeImagenes(){
    let imgCaptcha = document.querySelector("#img_captcha");

    imgCaptcha.src="images/capthchasImages/captcha"+NroImagen+".png";

    return imgCaptcha;
}

//funcion que retorna un valor random entre 1 y 10 
function obtenerNroRandom(){
    let nrorandom= 1;
    nrorandom = Math.floor(Math.random()*10)+1;    
    return  nrorandom;
}