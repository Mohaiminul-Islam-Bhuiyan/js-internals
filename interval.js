
// i++ vs ++i
// x++ vs ++x

console.log('first')
console.log('second')
let seconds = 0
// console.log('third')

const intervalId = setInterval(() => {
    // console.log(seconds++)
    // seconds++
    // console.log(seconds)
    console.log(++seconds)
    if(seconds === 10){
        clearInterval(intervalId)
    }
}, 500)

console.log('fourth')
console.log('fifth')