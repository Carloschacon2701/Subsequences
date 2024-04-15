"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function calcularSubsecuenciaMaria(n, fredy) {
    var maria = [fredy[0]];
    var isGreater = false;
    for (var i = 1; i < n; i++) {
        if ((isGreater && fredy[i] > maria[maria.length - 1]) ||
            (!isGreater && fredy[i] < maria[maria.length - 1])) {
            maria.push(fredy[i]);
            isGreater = !isGreater;
        }
    }
    return maria.length;
}
function main() {
    var input = fs.readFileSync("secuencias.txt").toString().split("\n");
    var T = parseInt(input[0]);
    for (var t = 0, index = 1; t < T; t++) {
        var data = input[index++].split(" ").map(Number);
        var n = data.shift();
        var fredy = data;
        console.log(calcularSubsecuenciaMaria(n, fredy));
    }
}
// Ejecutar la función principal
main();
