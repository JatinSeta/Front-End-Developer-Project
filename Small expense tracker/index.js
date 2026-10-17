const title = document.getElementById("title");
const amount = document.getElementById("amount");
const submite = document.getElementById("add");
const greater_data = document.getElementById("greater_data");
const data = document.getElementById("data")
let get_data = JSON.parse(localStorage.getItem("data"));
const error = document.getElementById("error")
const amount_vlaue = document.getElementById("amount_value")
let total_value = 0
submite.addEventListener("click", function () {
    if(amount.value > 0 && title.value != ""){
        const user_expance = {
            title: title.value,
            amount: amount.value,
        };
        if (get_data != null) {
            get_data.push(user_expance);
        } else {
            const arr = [];
            arr.push(user_expance);
            get_data = arr;
        }
        localStorage.setItem("data", JSON.stringify(get_data));
        renderExpenses()
    }else{
        error.innerText = "Kindly enter the correct amount & Title."
        error.style.color = "red"
        error.style.fontWeight = "600"
        error.style.fontSize = "20px"
    }
});
if (get_data != null) {
    get_data.map((ele,index) => {
        const datadiv = document.createElement("div")
            const titleTag = document.createElement("h1");
            titleTag.innerText = ele.title;
            titleTag.style.fontSize = "20px";
            titleTag.style.color = "blue";
            datadiv.style.display = 'flex'
            datadiv.style.alignItems ='center'
            datadiv.style.justifyContent = 'space-between'
            const amountTag = document.createElement("h2");
            amountTag.innerHTML = ele.amount;
            amountTag.style.fontSize = "20px"
            const button = document.createElement("button")
            button.addEventListener('click',()=>hanedelRemove(index))
            button.innerText = "Delete"
            button.style.backgroundColor = "blue"
            button.style.color = "white"
            button.style.border = "none"
            button.style.borderRadius = "20px"
            button.style.padding = "5px"
            datadiv.appendChild(titleTag);
            datadiv.appendChild(amountTag);
            datadiv.appendChild(button)
            data.appendChild(datadiv);
            total_value += Number(ele.amount)
   
        if (ele.amount >= 500) {
            const datadiv = document.createElement("div")
            const titleTag = document.createElement("h1");
            titleTag.innerText = ele.title;
            titleTag.style.fontSize = "20px";
            titleTag.style.color = "blue";
            datadiv.style.display = 'flex'
            datadiv.style.alignItems ='center'
            datadiv.style.justifyContent = 'space-between'
            const amountTag = document.createElement("h2");
            amountTag.innerHTML = ele.amount;
            amountTag.style.fontSize = "20px"
            const button = document.createElement("button")
            button.addEventListener('click',()=>hanedelRemove(index))
            button.innerText = "Delete"
            button.style.backgroundColor = "blue"
            button.style.color = "white"
            button.style.border = "none"
            button.style.borderRadius = "20px"
            button.style.padding = "5px"
            datadiv.appendChild(titleTag);
            datadiv.appendChild(amountTag);
      datadiv.appendChild(button)
      greater_data.appendChild(datadiv);
    }
});

}
 const amount_tag = document.createElement('p')
    amount_tag.innerHTML = `Total Amount ${total_value}`
    amount_vlaue.appendChild(amount_tag)
    amount_tag.style.fontSize = "20px"
    amount_tag.style.textAlign = "center"
function hanedelRemove(index){
    console.log(get_data,index)
    const new_arr = []
    for(let i=0;i<get_data.length;i++){
        if(i != index){
        new_arr.push(get_data[i])
        }
    }
    localStorage.setItem('data',JSON.stringify(new_arr));
    renderExpenses()

}
function renderExpenses(){
    window.location.reload()
}