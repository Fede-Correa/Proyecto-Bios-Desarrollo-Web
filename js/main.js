const abrirCerrarMenuButton = document.querySelector("#abrirCerrarMenu");
const mainMenu = document.querySelector("#mainMenu");

function desplegarMenu(){
    mainMenu.classList.toggle("main-menu_on");
    if(mainMenu.classList.contains("main-menu_on")){
        abrirCerrarMenuButton.textContent = "close"
    }else{
        abrirCerrarMenuButton.textContent = "menu"
    }
}

// respuesta = prompt ("¿Es tu primera vez en la web?");
// if (respuesta == "si") {
//     alert("Bienvenido por primera vez");
// }
// else if (respuesta == "no") {
//     alert("Bienvenido una vez más");
// }
// else {
//     alert("Error, mira bien lo que escribis pelotudo/a")
// }