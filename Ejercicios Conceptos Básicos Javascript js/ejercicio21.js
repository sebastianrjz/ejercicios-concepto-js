//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto

//"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

// Filtrar menores de edad
const minors = users.filter((user) => user.years < 18)

// Filtrar mayores de edad
const adults = users.filter((user) => user.years >= 18)

// Imprimir menores de edad
console.log('Usuarios menores de edad:')
minors.forEach((user) => console.log(`${user.name}, ${user.years} años`))

// Imprimir mayores de edad
console.log('Usuarios mayores de edad:')
adults.forEach((user) => console.log(`${user.name}, ${user.years} años`))
