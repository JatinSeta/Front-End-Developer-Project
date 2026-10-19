const url = "https://jsonplaceholder.typicode.com/users";
const card = document.getElementById("card");
const search = document.getElementById("search");
const button = document.getElementById("button");
const statuscode = document.getElementById("status");
const error = document.getElementById("file_search");
const filter_button = document.getElementById("filter_button");
const reset = document.getElementById("reset_button");
const slected = document.getElementById("city_select");
const count = document.getElementById("count")
let isSearch = false;
let isLoading = true;
let users;
let filteredUsers;
async function handelrequest() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    users = data;
    Loading(false);
    card.innerHTML = "";
    renderUsers(users);
    count.innerHTML = `Count : ${users.length}`
    statuscode.textContent = response.status;
  } catch (error) {
    card.innerHTML = "";
    const error_message = document.createElement("p");
    error_message.innerHTML = `Api Is Fail to data Get`;
    card.appendChild(error_message);
  }
}
function renderUsers(users_data) {
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
      const options = document.createElement("option");
      options.value = ele.address.city;
      options.innerHTML = ele.address.city;
      slected.appendChild(options);
    });
  }
}
function foundrederUsers(users_data) {
    count.innerHTML = `Count : ${users_data.length}`
  console.log(users_data.length);
  if (users_data.length == 0) {
    const user_not_found = document.createElement("p");
    user_not_found.innerHTML = "User Not Found";
    count.innerHTML = `Count : 0`
    user_not_found.style.color = "red";
    user_not_found.style.textAlign = "center";
    card.appendChild(user_not_found);
  } else {
    const sorted_array = [...users_data].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    sorted_array.forEach((ele) => {
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
  }
}
button.addEventListener("click", async function () {
  const serchvalue = search.value.toLowerCase();
  if (serchvalue != "") {
    isSearch = true;
    filteredUsers = users.filter((res) =>
      res.name.toLowerCase().includes(serchvalue),
    );
    error.innerHTML = "";
    card.innerHTML = "";
    foundrederUsers(filteredUsers ?? null);
  } else {
    error.innerHTML = "kindly add value";
  }
});
filter_button.addEventListener("click", function () {
  card.innerHTML = "";
  const sorted_array = [...users].sort((a, b) => a.name.localeCompare(b.name));
  
    count.innerHTML = `Count : ${sorted_array.length}`
  sorted_array.map((ele) => {
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
});
function Loading(loding) {
  if (loding == true) {
    const loading_meassge = document.createElement("p");
    loading_meassge.innerHTML = "Loading ...";
    card.appendChild(loading_meassge);
  }
}
search_city_button.addEventListener("click", function () {
  const select_value = slected.value;
  card.innerHTML = ""
  let count_users = 0
  users.map((ele) => {
    if (ele.address.city == select_value) {
      count_users ++
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
    }
    
     count.innerHTML = `Count : ${count_users}`
  });
});
reset.addEventListener("click", function () {
     count.innerHTML = `Count : ${users.length}`
  card.innerHTML = "";
  slected.innerHTML = "";
  isSearch = false;
  renderUsers(users);
  search.value = "";
});
Loading(isLoading);
handelrequest();
