function changeArg(x) { x = 200 }

let num = 100
changeArg(num)
console.log('changeArg num', num) // 100

let obj = { name: 'tao' }
changeArg(obj)
console.log('changeArg obj', obj) // { name: 'tao' }

function changeArgProp(x) {
    x.name = 'sen'
}
changeArgProp(obj)
console.log('changeArgProp obj', obj) // { name: 'sen' }