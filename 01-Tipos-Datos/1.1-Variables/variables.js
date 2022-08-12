var global = "HOLA MUNDO GLOBAL";
let bloque = "HOLA MUNDO BLOQUE";
console.log(global);
console.log(bloque);

//Prueba de variable de ámbito general
//La variable puede ser declarada en bloques, funciones y cambiara el valor de la original
console.log("global antes del bloque: ", global); {
    var global = "HOLA MUNDO GLOBAL DENTRO";
    console.log("global dentro del bloque: ", global);
}
console.log("global despues del bloque: ", global);

//Prueba de variable de bloque
//La variable es tomada únicamente para el bloque en el que se declare
console.log("var_bloque antes del bloque: ", bloque); {
    let bloque = "HOLA MUNDO BLOQUE DENTRO";
    console.log("var_bloque dentro del bloque: ", bloque);
}
console.log("var_bloque despues del bloque: ", bloque);