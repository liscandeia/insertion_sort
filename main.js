//requisição das funcoes da outra pag

const insertion = require("./insertion")
const { performance } = require('perf_hooks');

//funcao para percorrer o tempo

function medirTempo(funcao, array) {
    const inicio = performance.now();
    funcao(array);
    const fim = performance.now();
    console.log(`tempo: ${fim - inicio}ms`);
  }
// arrays para teste

let array = [1,2,3,4,5]
let array2 =  [5,4,3,2,1]

//invocando a escolha da funcao da requisição 
//e do array escolhido

console.log('Tempo para Insertion Sort melhor caso: ');
medirTempo(insertion, array);
console.log('Tempo para Insertion Sort pior caso: ');
medirTempo(insertion, array2);



