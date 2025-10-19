const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let productos = [];

function esPositivo(valor) {
return !isNaN(valor) && valor > 0;
}

function agregarProducto() {
rl.question("Ingrese el código del producto: ", (codigo) => {
    const existe = productos.some(p => p.codigo === codigo);
    if (existe) {
    console.log(" Error: El código ya existe. Intente con otro.");
    return menu();
    }

    rl.question("Ingrese el nombre del producto: ", (nombre) => {
    rl.question("Ingrese el precio del producto: ", (precioInput) => {
        const precio = parseFloat(precioInput);
        if (!esPositivo(precio)) {
        console.log(" Error: El precio debe ser un número positivo.");
        return menu();
        }

        rl.question("Ingrese la cantidad en stock: ", (stockInput) => {
        const stock = parseInt(stockInput);
        if (!esPositivo(stock)) {
            console.log(" Error: El stock debe ser un número positivo.");
            return menu();
        }

        const estado = stock > 0 ? "Disponible" : "Agotado";

        const producto = {
            codigo,
            nombre,
            precio,
            stock,
            estado
        };

        productos.push(producto);
        console.log(` Producto "${nombre}" agregado correctamente.`);
        menu();
        });
    });
    });
});
}

function actualizarStock() {
rl.question("Ingrese el código del producto a actualizar: ", (codigo) => {
    const producto = productos.find(p => p.codigo === codigo);

    if (!producto) {
    console.log(" No se encontró ningún producto con ese código.");
    return menu();
    }

    rl.question("Ingrese la nueva cantidad de stock: ", (nuevoStockInput) => {
    const nuevoStock = parseInt(nuevoStockInput);

    if (isNaN(nuevoStock) || nuevoStock < 0) {
        console.log(" Error: el stock debe ser un número positivo o cero.");
        return menu();
    }

    producto.stock = nuevoStock;
    producto.estado = nuevoStock > 0 ? "Disponible" : "Agotado";

    console.log(`Stock actualizado. Nuevo stock de "${producto.nombre}": ${producto.stock}`);
    menu();
    });
});
}

function listarProductos() {
if (productos.length === 0) {
    console.log("📦 No hay productos registrados.");
} else {
    const listaOrdenada = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));

    console.log("\n📋 LISTA DE PRODUCTOS");
    console.log("----------------------------------------------------");
    listaOrdenada.forEach(p => {
    console.log(`Código: ${p.codigo}`);
    console.log(`Nombre: ${p.nombre}`);
    console.log(`Precio: $${p.precio.toFixed(2)}`);
    console.log(`Stock: ${p.stock}`);
    console.log(`Estado: ${p.estado}`);
    console.log("----------------------------------------------------");
    });
}
menu();
}
function menu() {
console.log(`
===== MENÚ DE INVENTARIO =====
1. Agregar nuevo producto
2. Actualizar stock
3. Listar productos
4. Salir
==============================
`);

rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
    case "1":
        agregarProducto();
        break;
    case "2":
        actualizarStock();
        break;
    case "3":
        listarProductos();
        break;
    case "4":
        console.log(" Saliendo del programa...");
        rl.close();
        break;
    default:
        console.log(" Opción no válida. Intente nuevamente.");
        menu();
    }
});
}
menu();
