
function sobre_mi(){
    //console.log("Entre a sobre mi")
    document.getElementById("descripcion").innerHTML = "Estudiante de la carrera analista programador universitario de la UNLP, 30 años. En la parte inferior encontraras mis redes sociales.";
}

function paleta_colores(x){
    //console.log(x)
    if (x == 1) {
        document.getElementById("descripcion").style.color = "#138D75";
    }
    else { // x == 2
        document.getElementById("descripcion").style.color = "black";
    }


}