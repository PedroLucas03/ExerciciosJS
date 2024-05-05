var vetor = [2,3,4,5,6,7];

let soma = 0;

function calcularMedia(){
  for (i=0;i<vetor.length;i++){
    soma += vetor[i];
  }

  return soma/vetor.length;
}

const media = calcularMedia(vetor);
console.log("A média dos números do vetor é:", media);