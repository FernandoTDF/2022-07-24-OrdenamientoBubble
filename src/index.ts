let nombresArreglo: string[] = [
  "Fernando",
  "Liliana",
  "Maria",
  "Miguel",
  "Francisco",
  "Adolfo"
];
let aniosArreglo: number[] = [40, 44, 47, 40, 35, 32];
let alturasArreglo: number[] = [1.76, 1.56, 1.58, 1.78, 1.81, 1.83];
let longitudArreglo: number = nombresArreglo.length;

console.log(nombresArreglo)
console.log(aniosArreglo)
console.log(alturasArreglo)

function intercambiar(arreglo: any[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

function comparar(arreglo: number[], i: number, j: number): number {
  let comparacion: number;
  if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
  } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function burbuja(
  vectorNombres: string[],
  vectorAnios: number[],
  vectorAltura: number[],
  cantidad: number
) {
  for (let i: number = 0; i < cantidad - 1; i++) {
    for (let j: number = 0; j < cantidad - 1 - i; j++) {
      if (comparar(vectorAnios, j, j + 1) === -1) {
        intercambiar(vectorNombres, j, j + 1);
        intercambiar(vectorAnios, j, j + 1);
        intercambiar(vectorAltura, j, j + 1);
      } else if (comparar(vectorAnios, j, j + 1) === 0) {
        if (comparar(vectorAltura, j, j + 1) === -1) {
          intercambiar(vectorNombres, j, j + 1);
          intercambiar(vectorAnios, j, j + 1);
          intercambiar(vectorAltura, j, j + 1);
        }
      }
    }
  }
}

burbuja(nombresArreglo, aniosArreglo, alturasArreglo, longitudArreglo)