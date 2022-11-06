const arr1 = [1, 2, 3, ...[4, 5, 6]]
console.log(arr1)
// [ 1, 2, 3, 4, 5, 6 ]

const arr2 = [, , , , ,]
console.log(arr2)
// [ <5 empty items> ]

const arr3 = new Array(1, 2, 3)
console.log(arr3)
// [ 1, 2, 3 ]

const arr4 = new Array(5)
console.log(arr4)
// [ <5 empty items> ]

const arr5 = Array.of(5)
console.log(arr5)
// [ 5 ]

const arr6 = Array.of(1, 2, 3)
console.log(arr6)
// [ 1, 2, 3 ]

const arr7 = Array.from({ length: 3 }, function (value, index) {
  return index + 1
})
console.log(arr7)
// [ 1, 2, 3 ]

const arr8 = Array.from({ 0: "a", 1: "b", 2: "c", length: 3 })
console.log(arr8)
// [ 'a', 'b', 'c' ]

const arr9 = Array.prototype.slice.call([1, 2], 1)
console.log(arr9) // [2]
// [ 2 ]

const arr10 = Array.prototype.concat.call([], [1, 2, 3])
console.log(arr10)
// [ 1, 2, 3 ]

// [ 1, 2, 3, 4, 5, 6 ]
