//Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más //largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'CaptainA',
  'Spiderman',
  'CaptainM'
]

function findLongestWord(param) {
  let longestWord = ''

  for (let word of param) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  return longestWord
}

console.log(findLongestWord(avengers))
