const title = document.getElementById("title")
const amount = document.getElementById("amount")
const submit = document.getElementById("submit")
const array  = []
submit.addEventListener('click',function (){
   array.push(title.value);
    array.push(amount.value);
})