// Largest number
const arr = [10, 45, 20, 80, 30];
let value = arr[0]

for(let i=1;i<arr.length;i++){
    if(arr[i]>value){
        value = arr[i]
    }
}
console.log(value)
// even number

const filter_arr = [1, 2, 3, 4, 5, 6, 7, 8]
const even = []
filter_arr.filter((ele)=> ele%2 == 0 ? even.push(ele) : "No Idea" )
console.log(even)

//map multiply
const map_arr = [2, 4, 6]
const map_ans = []
map_arr.map((ele)=>(
    map_ans.push(ele*3)
))
console.log(map_ans)

// How Meny time a is appears
const letter = "javascript"
const arr_letter = letter.split("")
let count = 0
arr_letter.map((ele)=>{
    if(ele == "a"){
        count++
    }
})
console.log(count)
// check palindrome or not

// also use convort splite reverse and join use build in methods
const str = "madam"
let revers_str = ""
for(let i=0;i<str.length;i++){
    revers_str += str[str.length - i-1]
}
console.log(revers_str == str)