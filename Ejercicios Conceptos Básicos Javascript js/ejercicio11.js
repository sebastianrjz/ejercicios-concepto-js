//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:pista (typeof)

function averageWord(param) {
  if (param.length === 0) return 0 // Para manejar el caso en el que el array está vacío

  let totalSum = 0

  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      totalSum += param[i]
    } else if (typeof param[i] === 'string') {
      totalSum += param[i].length
    }
  }

  return totalSum / param.length
}

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
console.log(averageWord(mixedElements))
