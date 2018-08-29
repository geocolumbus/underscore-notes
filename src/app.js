const _ = require('underscore')

let str = ''
_.each([1, 2, 3, 5], (item) => {
  str += item + '-'
})
console.log(str) //  1-2-3-5-

