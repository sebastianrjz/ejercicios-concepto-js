//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

function finderName(arr, name) {
  const index = arr.indexOf(name)

  if (index !== -1) {
    return { exists: true, position: index }
  } else {
    return { exists: false }
  }
}

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

console.log(finderName(nameFinder, 'Tony'))
console.log(finderName(nameFinder, 'Wanda'))
