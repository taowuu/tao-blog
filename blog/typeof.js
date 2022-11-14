// typeof
function typeofTest() {
    console.log('typeof: ')

    console.log(typeof null)
    // object
    
    console.log(typeof NaN)
    // number
    
    console.log(typeof function(){})
    // function
    
    console.log(typeof {})
    // object
    
    console.log(typeof 1)
    // number
    
    console.log(typeof 'a')
    // string
    
    console.log(typeof Symbol())
    // symbol
    
    console.log(typeof BigInt(1))
    // bigint
    
    console.log(typeof [])
    // object
}

// constructor
function constructorTest() {
    console.log('\nconstructor: ')

    console.log("a".constructor)
    // [Function: String]

    console.log(NaN.constructor)
    // [Function: Number]

    // console.log(null.constructor) Cannot read properties of null

    // console.log(undefined.constructor) Cannot read properties of undefined

    // console.log(1.constructor) Invalid or unexpected token

    // constructor 可被改写
    // String.prototype.constructor = function b() {
    //   return {}
    // }
    // console.log("123".constructor) 
    // [Function: b]
}

// instanceof
function instanceofTest() {
    console.log('instanceof: ')

    // 在原型链上查找
    // 右操作数必须是函数或类
    function f() {}
    console.log(f instanceof Function)
    // true
    
    let n = new f()
    console.log(n instanceof f)
    // true
    
    console.log(String('a') instanceof String)
    // false
    
    console.log('a' instanceof String)
    // false
    
    // 变量需要先声明
    // console.log(a instanceof Object) a is not defined    
}

// isPrototypeOf
function isPrototypeOfTest() {
    // 是否出现在实例对象的原型链上
    console.log('a'.isPrototypeOf(String))
    // fasle

    function A(){}
    function B(){}
    B.prototype = Object.create(A.prototype)
    let a = new A()
    let b = new B()
    console.log(A.prototype.isPrototypeOf(b))
    // true
    console.log(A.prototype.isPrototypeOf(a))
    // true
}

// toString
function toStringTest() {
    class Cat {}
    const cat = new Cat()
    console.log(Object.prototype.toString.call(cat))
    // [object Object]

    // 修改 toStringTag
    class Dog {
        get [Symbol.toStringTag](){
            return "Dog"
        }
    }
    const dog = new Dog()
    console.log(Object.prototype.toString.call(dog))
    // [object Dog]

    console.log(Object.prototype.toString.call('cat'))
    // [object String]
}

function __mian() {
    // typeofTest()
    // constructorTest()
    // instanceofTest()
    // isPrototypeOfTest()
    // toStringTest()
}

__mian()
