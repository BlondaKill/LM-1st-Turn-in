//Pagina de Zapatillas x Genero 

function saludar() {
    let saludo = 'Welcome to your original SNKRS';
    alert('Welcome to your original SNKRS');
}
saludar();


let question = prompt('Deseas seleccionar genero del producto? \n(y-yes / n-no)');

while (question == 'y') {
    let answer = prompt('1-Women\n2-Men\n3-Kids');
    if (answer == '1') {
        alert('Elegiste genero Women');
    } else if (answer == '2') {
        alert('Elegiste genero Men');
    } else if (answer == '3') {
        alert('Elegiste genero Kids')
    } else {
        alert('Genero inexistente');
    }
    question = prompt('Deseas cambiar el genero? (y-yes / n-no)');
}
//==================================== Precios segun modelo elegido ===================================

let total = 0;

let sneakers = prompt('Elegi el modelo y sabras el precio:\n \n1 - Graffitti\n2 - Flor\n3 - Lips\n4 - Osiris\n\nB / para volver al menu');

while (sneakers != 'B') {
    switch (sneakers) {
        case '1':
            alert('Tu modelo elegido cuesta $160');
            sumatoriaCompra(160);
            break;
        case '2':
            alert('Tu modelo elegido cuesta $140');
            sumatoriaCompra(140);
            break;
        case '3':
            alert('Tu modelo elegido cuesta $110');
            sumatoriaCompra(110);
            break;
        case '4':
            alert('Tu modelo elegido cuesta $200');
            sumatoriaCompra(200);
            break;

        default:
            alert('Modelo Inexistente');
            break;

    }
    sneakers = prompt('Ingresa el modelo y sabras el precio:\n \n1 - Graffitti\n2 - Flor\n3 - Lips\n4 - Osiris\n\nB / para volver al menu');
}

alert('Total de su compra $' + total);

//================================ Total Compra ==========================================


function sumatoriaCompra(precio) {
    total = total + precio;
    alert('Llevas gastado $' + total);
}