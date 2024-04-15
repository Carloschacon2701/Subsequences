"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getSubsequence(n, fredy) {
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
    var output = [];
    for (var t = 1; t <= T; t++) {
        var fredy = input[t].split(" ").map(Number);
        var n = fredy.shift();
        var result = getSubsequence(n, fredy);
        output.push(result);
        console.log(result);
    }
    fs.writeFileSync("output.txt", output.join("\n"));
}
main();
