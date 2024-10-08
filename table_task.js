function submitData() {
  document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;

    addProfileData(name, phone, email, age);
    let table = document.getElementsByTagName("table")[0];
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      td1.innerHTML = name;
      td2.innerHTML = phone;
      td3.innerHTML = email;
      td4.innerHTML = age;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      table.appendChild(tr);
  });
}

function addProfileData(name, phone, email, age) {
  let data = {
    name: name,
    phone: phone,
    email: email,
    age: age,
  };
  console.log(data);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:3000/users", options)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
// fetch("http://localhost:3000/users")
//   .then((response) => response.json())
//   .then((result) => {
//     result.map((res) => {
//       let table = document.getElementsByTagName("table")[0];
//       let tr = document.createElement("tr");
//       let td1 = document.createElement("td");
//       let td2 = document.createElement("td");
//       let td3 = document.createElement("td");
//       let td4 = document.createElement("td");
//       td1.innerHTML = res.name;
//       td2.innerHTML = res.phone;
//       td3.innerHTML = res.email;
//       td4.innerHTML = res.age;
//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       tr.appendChild(td3);
//       tr.appendChild(td4);
//       table.appendChild(tr);
//     });
//     submitData();
//   });
fetch("https://lakshmiphani7680.github.io/table_task_db.json")
  .then((result) => {
    result.json().then((result) => {
      result.users.map((res) => {
        let table = document.getElementsByTagName("table")[0];
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.innerHTML = res.name;
        td2.innerHTML = res.phone;
        td3.innerHTML = res.email;
        td4.innerHTML = res.age;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
      });
    });
    submitData();
  });
