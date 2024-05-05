
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function calcularMediaMatriz(matriz) {
  let soma = 0;
  let elementos = 0;
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          soma += matriz[i][j];
          elementos++;
      }
  }
  let media = soma / elementos
  return media;
}


const mediaMatriz = calcularMediaMatriz(matriz);
console.log("A media dos elementos da matriz é:", mediaMatriz);
