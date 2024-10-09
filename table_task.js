let usersData = JSON.parse(localStorage.getItem("usersData")) || [
  {
    id: 1,
    name: "Phani",
    phone: 9782564723,
    email: "phani@gmail",
    age: 22,
    gender: "Male",
  },
  {
    id: 2,
    name: "Lakshmi",
    phone: 9772382564,
    email: "lakshmi@gmail",
    age: 21,
    gender: "Female",
  },
  {
    id: 3,
    name: "Gana",
    phone: 9782235647,
    email: "gana@gmail",
    age: 24,
    gender: "Male",
  },
];

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;

  let data = {
    id: Math.floor(Math.random() * 1000) + 1,
    name: name,
    phone: phone,
    email: email,
    age: age,
    gender: gender,
  };

  console.table(data);
  usersData.push(data);
  localStorage.setItem("usersData", JSON.stringify(usersData));

  renderTable();
  document.getElementById("form").reset();
});

function getData() {
  let storedData = localStorage.getItem("usersData");
  if (storedData) {
    usersData = JSON.parse(storedData);
  }
  renderTable();
}

function renderTable() {
  let table = document.getElementsByTagName("table")[0];

  table.innerHTML = `<tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>`;

  usersData.map((res) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerText = res.name;
    td2.innerText = res.phone;
    td3.innerText = res.email;
    td4.innerText = res.age;
    td5.innerText = res.gender;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  });
}

getData();
