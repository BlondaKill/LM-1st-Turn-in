
let question = prompt('Desea seleccionar genero del producto? (y-yes / n-no)');
while (question == 'y'){
    let answer = prompt('1-Women\n2-Men\n3-Kids');
    if (answer == '1'){
        alert('Women');
    }else if(answer == '2'){
        alert(Men);
    }else if(answer == '3'){
    }else {
        alert('Genero inexistente');
    }
    question = prompt('Desea cambiar el genero? (y-yes / n-no)');
}

let sneakers = prompt('Ingrese modelo y le dire el precio: \ng - graffitti\nf - flor\nl - lips\no - osiris\n\nb / para volver al menu');

while(sneakers != 'b'){
switch(sneakers){
    case 'g':
        alert('$160');
        break;
    case 'f':
        alert('$140');
        break;
    case 'l':
        alert('$110');
        break;
    case 'o':
        alert('$200');
        break;

    default:
        alert('Modelo Inexistente')

}
sneakers = prompt('Ingrese modelo y le dire el precio: \ng - graffitti\nf - flor\nl - lips\no - osiris\n\nb / para volver al menu');
}

let graffitti = 160;
let flor = 160;
let lips = 140;
let osiris = 190;

let compra = graffitti+flor+lips+osiris;


function sumatoriaCompra(totalSneakers) {
    let total = totalSneakers;
    alert('El total de su compra es $'+total);
} 

sumatoriaCompra(compra);




















