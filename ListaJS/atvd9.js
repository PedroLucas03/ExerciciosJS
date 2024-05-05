var vetor = [2,3,4,5,6,7];

let maior = vetor[0];

function encontrarMaiorNumero(vetor){
  for (i=1;i<vetor.length;i++){
    if(vetor[i] > maior){
      maior = vetor[i];
    }
  }

  return maior;
}

let maiorNumero = encontrarMaiorNumero(vetor);


console.log("O maior numero do vetor é:", maiorNumero);