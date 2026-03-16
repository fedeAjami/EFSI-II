
    console.log("hola")

// EJERCICIO 1
console.log("Ejercicio 1:", formatearNombre("JUAN"));
console.log("Ejercicio 1:", formatearNombre("mARIA"));
function formatearNombre(nombre){
    let primera = nombre[0].toUpperCase();
    let resto = nombre.slice(1).toLowerCase();
    return primera + resto;
    }

// EJERCICIO 2
console.log("Ejercicio 2:", contarLetras("hola mundo"));
function contarLetras(texto){

    let sinEspacios = texto.replace(" ", ""); 
    return sinEspacios.length;
}

// EJERCICIO 3
console.log("Ejercicio 3:", maximo(5, 10, 3));
function maximo(a, b, c){
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// EJERCICIO 4
console.log("Ejercicio 4:", validarPassword("abc12345"));
console.log("Ejercicio 4:", validarPassword("abc"));
function validarPassword(password){
    if (password.length < 8) {
        return false;
    }
   
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            return true;
        }
    }
    return false;
}

// PARTE 2
console.log("Ejercicio 5:", sumarArray([3,5,10]));
function sumarArray(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}
// EJERCICIO 6
console.log("Ejercicio 6:", mayorNumero([4,7,1,20,3]));
function mayorNumero(numeros){
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}
// EJERCICIO 7
console.log("Ejercicio 7:", obtenerPares([1,2,3,4,5,6]));
function obtenerPares(numeros){
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

// PARTE 3
console.log("Ejercicio 8:", descripcionUsuario(usuario));
function descripcionUsuario(usuario){
    return usuario.nombre + " tiene " + usuario.edad + " años";
}
// EJERCICIO 9
console.log("Ejercicio 9:", activarUsuario(usuario));
function activarUsuario(usuario){
    usuario.activo = true;
    return usuario;
}
// EJERCICIO 10
console.log("Ejercicio 10:", precioTotal(productos));
function precioTotal(productos){
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total = total + productos[i].precio;
    }
    return total;
}

// PARTE 4

// Ejercicio 11
console.log("Ejercicio 11:", nombres);
let nombres = [];
for (let i = 0; i < usuarios.length; i++) {
    nombres.push(usuarios[i].nombre);
}

// Ejercicio 12
console.log("Ejercicio 12:", mayores);
let mayores = [];
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        mayores.push(usuarios[i]);
    }
}

// Ejercicio 13
console.log("Ejercicio 13:", sumaEdades);
let sumaEdades = 0;
for (let i = 0; i < usuarios.length; i++) {
    sumaEdades = sumaEdades + usuarios[i].edad;
}

// PARTE 5
console.log("Ejercicio 14:", nombre, precio);
console.log("Ejercicio 15:", productoCopia);
const nombre = producto.nombre;
const precio = producto.precio;

const productoCopia = {
    nombre: producto.nombre,
    precio: producto.precio,
    stock: 5
};

// PARTE 6
console.log("Ejercicio 16:", buscarProducto(productos,"Mouse"));
function buscarProducto(productos, nombre){
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            return productos[i];
        }
    }
}
// EJERCICIO 17
console.log("Ejercicio 17:", productosCaros(productos));
function productosCaros(productos){
    let caros = [];
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].precio > 50) {
            caros.push(productos[i]);
        }
    }
    return caros;
}
// EJERCICIO 18
console.log("Ejercicio 18:", promedio([10,8,6,9]));
function promedio(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma / numeros.length;
}

// DESAFÍO FINAL

const usuariosAPI = [
    {id: 1, nombre: "Ana", edad: 20},
    {id: 2, nombre: "Juan", edad: 15},
    {id: 3, nombre: "Pedro", edad: 30}
];
// EJERCICIO 1
console.log("API 1:", obtenerUsuarios());
function obtenerUsuarios(){
    return usuariosAPI;
}
// EJERCICIO 2
console.log("API 2:", obtenerUsuarioPorId(2));
function obtenerUsuarioPorId(id){
    for (let i = 0; i < usuariosAPI.length; i++) {
        if (usuariosAPI[i].id == id) {
            return usuariosAPI[i];
        }
    }
}
// EJERCICIO 3
console.log("API 3:", obtenerMayores());
function obtenerMayores(){
    let lista = [];
    for (let i = 0; i < usuariosAPI.length; i++) {
        if (usuariosAPI[i].edad >= 18) {
            lista.push(usuariosAPI[i]);
        }
    }
    return lista;
}
// EJERCICIO 4
crearUsuario("Luis",22);
console.log("API 4:", obtenerUsuarios());
function crearUsuario(nombre, edad){
    let nuevo = {
        id: usuariosAPI.length + 1,
        nombre: nombre,
        edad: edad
    };
    usuariosAPI.push(nuevo);


}