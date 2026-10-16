// Is Even
const input = 11
if(input % 2 == 0){
    console.log(true)
}else{
    console.log(false)
}

//array first and last value

const arr = [10, 20, 30, 40, 50]
const first = arr[0]
const last = arr[arr.length-1]
console.log(first)
console.log(last)

// sum all numbers

const numbers = [10, 20, 30, 40, 50]
let sum = 0
numbers.map((ele)=>(
    sum+=ele
))
console.log("Sum",sum)

// filter Methods 

const array_num = [10, 20, 30, 40, 50]
const ans = array_num.filter((ele)=>(ele>25))
console.log(ans)

// map Methods
const array_fruits = ["apple", "banana", "mango"]
const upperCase = array_fruits.map((ele)=>(
    ele.toUpperCase()
))
console.log(upperCase)
