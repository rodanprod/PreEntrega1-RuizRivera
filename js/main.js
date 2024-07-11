alert("Bienvenido al Cybermart de RODAN_TECH, donde tú eres el PROPLAYER. Vamos a armar tu PRÓXIMO PC GAMER");

function seleccionarComponente(componente) {
    let opciones = componente.opciones;
    let mensaje = `Selecciona una opción para ${componente.nombre}:\n`;
    for (let i = 0; i < opciones.length; i++) {
        mensaje += `${i + 1}: ${opciones[i].nombre} - ${opciones[i].precio} CLP\n`;
    }
    mensaje += "4: Saltar este producto\n";
    let seleccion = parseInt(prompt(mensaje));
    while (isNaN(seleccion) || seleccion < 1 || seleccion > 4) {
        alert("Opción no válida. Por favor selecciona una opción válida.");
        seleccion = parseInt(prompt(mensaje));
    }
    if (seleccion === 4) {
        return 0; // No agregar costo si se salta el producto
    }
    return opciones[seleccion - 1].precio;
}

let total = 0;
let componentes = [
    {
        nombre: "Gabinete",
        opciones: [
            { nombre: "ASUS ROG Hyperion", precio: 250000 },
            { nombre: "ASUS ROG Strix Case", precio: 200000 },
            { nombre: "ASUS TUF Gaming Case", precio: 150000 }
        ]
    },
    {
        nombre: "Placa Madre",
        opciones: [
            { nombre: "ASUS ROG Maximus XIII", precio: 350000 },
            { nombre: "ASUS ROG Strix Z590-E", precio: 300000 },
            { nombre: "ASUS TUF Gaming B560M", precio: 200000 }
        ]
    },
    {
        nombre: "Procesador",
        opciones: [
            { nombre: "AMD Ryzen 9 5900X", precio: 400000 },
            { nombre: "AMD Ryzen 7 5800X", precio: 350000 },
            { nombre: "AMD Ryzen 5 5600X", precio: 300000 }
        ]
    },
    {
        nombre: "Tarjeta Gráfica",
        opciones: [
            { nombre: "ASUS ROG Strix RTX 3080", precio: 800000 },
            { nombre: "ASUS TUF Gaming RTX 3070", precio: 700000 },
            { nombre: "ASUS Dual RTX 3060", precio: 600000 }
        ]
    },
    {
        nombre: "Fuente de Poder",
        opciones: [
            { nombre: "ASUS ROG Thor 850W", precio: 150000 },
            { nombre: "ASUS ROG Strix 750W", precio: 130000 },
            { nombre: "ASUS TUF Gaming 650W", precio: 100000 }
        ]
    },
    {
        nombre: "RAM",
        opciones: [
            { nombre: "Corsair Vengeance RGB Pro 32GB", precio: 200000 },
            { nombre: "G.Skill Trident Z RGB 16GB", precio: 150000 },
            { nombre: "Kingston HyperX Fury 16GB", precio: 120000 }
        ]
    },
    {
        nombre: "Refrigeración",
        opciones: [
            { nombre: "Cooler Master Liquid ML360R", precio: 150000 },
            { nombre: "Corsair H100i RGB", precio: 130000 },
            { nombre: "NZXT Kraken X53", precio: 120000 }
        ]
    },
    {
        nombre: "Disco Sólido",
        opciones: [
            { nombre: "Samsung 970 EVO Plus 1TB", precio: 200000 },
            { nombre: "WD Black SN750 1TB", precio: 180000 },
            { nombre: "Kingston A2000 1TB", precio: 150000 }
        ]
    }
];

for (let i = 0; i < componentes.length; i++) {
    let componente = componentes[i];
    total += seleccionarComponente(componente);
}

alert(`El costo total de tu PC gamer es: ${total} CLP`);

let nombre = prompt("Por favor, ingresa tu nombre:");
let correo = prompt("Por favor, ingresa tu correo electrónico:");

let metodoPago;
do {
    metodoPago = prompt("¿Cómo deseas pagar? (1: Crédito/Débito, 2: Transferencia)");
    switch (metodoPago) {
        case "1":
            alert("Has seleccionado pagar con Crédito/Débito.");
            let numeroTarjeta = prompt("Por favor, ingresa los números de tu tarjeta:");
            alert("¡Ahh! ¡Te la creíste! Jajaja");
            break;
        case "2":
            alert("Has seleccionado pagar con Transferencia.");
            break;
        default:
            alert("Método de pago no válido. Por favor, intenta nuevamente.");
            metodoPago = null;
    }
} while (!metodoPago);

if (nombre.toLowerCase() === "lucas") {
    alert("Gracias por comprar en Cybermart. ¡Vuelve pronto joven Padawan, Lucas!");
} else {
    alert(`Gracias por comprar en Cybermart, ${nombre}. ¡Vuelve pronto!`);
}
