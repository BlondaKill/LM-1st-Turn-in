
function welcome(){
    let saludar = 'Welcome to your original SNKRS';
    alert('Welcome to your original SNKRS');
}
welcome();


let question = prompt('Deseas seleccionar genero del producto? (y-yes / n-no)');
while (question == 'y'){
    let answer = prompt('1-Women\n2-Men\n3-Kids');
    if (answer == '1'){
        alert('Elegiste genero Women');
    }else if(answer == '2'){
        alert('Elegiste genero Men');
    }else if(answer == '3'){
        alert('Elegiste genero Kids')
    }else {
        alert('Genero inexistente');
    }
    question = prompt('Deseas cambiar el genero? (y-yes / n-no)');
}

let sneakers = prompt('Elegi el modelo y sabras el precio: \n1 - Graffitti\n2 - Flor\n3 - Lips\n4 - Osiris\n\nB / para volver al menu');

while(sneakers != 'B'){
switch(sneakers){
    case '1':
        alert('Tu modelo elegido cuesta $160');
        break;
    case '2':
        alert('Tu modelo elegido cuesta $140');
        break;
    case '3':
        alert('Tu modelo elegido cuesta $110');
        break;
    case '4':
        alert('Tu modelo elegido $200');
        break;

    default:
        alert('Modelo Inexistente')

}
sneakers = prompt('Ingresa el modelo y sabras el precio: \n1 - Graffitti\n2 - Flor\n3 - Lips\n4 - Osiris\n\nB / para volver al menu');
}


//======================= Funciones ============================
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



























