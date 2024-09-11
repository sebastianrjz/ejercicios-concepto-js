//Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

function repeatCounter(param) {
  const countMap = {}

  param.forEach((word) => {
    // Si la palabra ya está en el objeto, incrementamos su contador
    if (countMap[word]) {
      countMap[word]++
    } else {
      // Si la palabra no está en el objeto, la inicializamos con 1
      countMap[word] = 1
    }
  })

  return countMap
}

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

console.log(repeatCounter(counterWords))
