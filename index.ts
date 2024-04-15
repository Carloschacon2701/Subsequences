import * as fs from "fs";

function getSubsequence(n: number, fredy: number[]) {
  let maria = [fredy[0]];
  let isGreater = false;

  for (let i = 1; i < n; i++) {
    if (
      (isGreater && fredy[i] > maria[maria.length - 1]) ||
      (!isGreater && fredy[i] < maria[maria.length - 1])
    ) {
      maria.push(fredy[i]);
      isGreater = !isGreater;
    }
  }

  return maria.length;
}

function main() {
  const input = fs.readFileSync("secuencias.txt").toString().split("\n");
  const T = parseInt(input[0]);
  const output: number[] = [];

  for (let t = 1; t <= T; t++) {
    const fredy = input[t].split(" ").map(Number);
    const n = fredy.shift() as number;
    const result = getSubsequence(n, fredy);

    output.push(result);
    console.log(result);
  }

  fs.writeFileSync("output.txt", output.join("\n"));
}

main();
