console.log("hello");




//add localStorage item
//localStorage.setItem("Name", "John");
//localStorage.setItem("Age", "25");
//localStorage.setItem("City", "New York");

//retrive localStorage item
//localStorage.removeItem("Age");

//data read from localStorage
//let Name = localStorage.getItem("Name");
//let Age = localStorage.getItem("Age");
//let City = localStorage.getItem("City");
//console.log(Name, Age, City);

//objects in localStorage
let customer = [{
    Name : "Amal",
    Age : "25",
    isMarried : true,
},
{
    Name : "Nimal",
    Age : "20",
    isMarried : false,
},
{
    Name : "Kamala",
    Age : "25",
    isMarried : false,  
},
{
    Name : "Rusiru",
    Age : "26",
    isMarried : true,
}]

//localStorage.clear();

//---set customer in localStorage
//1st step: convert object to string
let stringCustomer = JSON.stringify(customer);
//2nd step: store string in localStorage
localStorage.setItem("customer", stringCustomer);

//---get customer from localStorage---
//1st step: retrive  string from localStorage
// let getcustomer =  localStorage.getItem("customer");
// //2nd step: convert string back to object
// let parsedCustomer = JSON.parse(getcustomer);
// console.log(parsedCustomer);

// ---------------------- CRUD operations in localStorage--------------------

let customerList = JSON.parse(localStorage.getItem(customerList)) || [];

function btnaddCustomrOnAction() {
    alert("add customer");
}

function btnSearchCustomrOnAction() {
    alert("search customer");
}

function btnDeleteCustomrOnAction() {
    alert("delete customer");
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    alert("clear storage");
    customerList = [];
}

function btnLoadTableOnAction() {
    alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
     tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
         `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}
