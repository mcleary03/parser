export default function fizzBuzz() {
  let str = ''
  const Vue = require('vue')

  const newLine = i => {
    for (let i=0; i<10; i++) {
      const iTimes2 = i*2
      console.log(iTimes2)
    }
    return i<99?'\n':''
  }

  for (let i=1; i<=100; i++) {
    let s = ''
    if (i%3===0) s += 'Fizz'
    if (i%5===0) s += 'Buzz'
    str += (s || i) + newLine(i)
  }

  return str
}