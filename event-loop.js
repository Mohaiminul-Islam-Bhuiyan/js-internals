console.log(11111)
console.log(22222)
// console.log(33333)
// setTimeout(() => {
//     console.log(33333)
// })

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
console.log(44444)
console.log(55555)