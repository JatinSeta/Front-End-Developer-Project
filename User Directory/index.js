const url = "https://jsonplaceholder.typicode.com/users";
const card = document.getElementById("card");
const search = document.getElementById("search");
const button = document.getElementById("button");
let isSearch = false;
let isLoading = true
async function handelrequest() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    Loading(false)
    card.innerHTML = ""
    renderDatarenderUsers(data);
  } catch (error) {
    card.innerHTML = ""
    const error_message = document.createElement('p')
    error_message.innerHTML = `Api Is Fail to data Get`
    card.appendChild(error_message)
  }
}
function renderDatarenderUsers(users_data) {
  if (isSearch == false) {
    users_data.map((ele) => {
      const users_div = document.createElement("div");
      users_div.setAttribute("id", "user_div");
      const name = document.createElement("p");
      name.innerHTML = ele.name;
      const email = document.createElement("p");
      email.innerHTML = ele.email;
      const city = document.createElement("p");
      city.innerHTML = ele.address.city;
      users_div.appendChild(name);
      users_div.appendChild(email);
      users_div.appendChild(city);
      card.appendChild(users_div);
    });
  } else {
    const users_div = document.createElement("div");
      users_div.setAttribute("id", "user_div");
      const name = document.createElement("p");
      name.innerHTML = users_data.name;
      const email = document.createElement("p");
      email.innerHTML = users_data.email;
      const city = document.createElement("p");
      city.innerHTML = users_data.address.city;
      users_div.appendChild(name);
      users_div.appendChild(email);
      users_div.appendChild(city);
      card.appendChild(users_div);
  }
}
button.addEventListener("click", async function () {
  isSearch = true;
  try {
    const response = await fetch(url);
    const data = await response.json();
    let isFound = true;
    for(let i=0;i< data.length ; i++){
    if (search.value.toLowerCase() == data[i].name.toLowerCase()) {
        card.innerHTML = ""
        renderDatarenderUsers(data[i]);
        break;
      }else{
        isFound = false
      }
    }
    if(isFound == false){
        card.innerHTML = ""
        const not_found = document.createElement("div")
        const error = document.createElement("p")
        error.setAttribute('id',"error")
        error.innerHTML = "User Not Found"
        not_found.appendChild(error)
        card.appendChild(not_found)      
    }
  } catch (error) {
    console.log(error);
  }
});
function Loading(loding){
    if(loding == true){
        const loading_meassge = document.createElement('p')
        loading_meassge.innerHTML = "Loading ..."
        card.appendChild(loading_meassge)
    }
}
Loading(isLoading)
handelrequest();
