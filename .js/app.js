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

let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {
   // alert("add customer");

   let customer = {
        id: document.getElementById("txtid"). value,
        name: document.getElementById("txtname"). value,
        age: document.getElementById("txtage"). value,
        address: document.getElementById("txtaddress"). value,
   };

   //console.log(customer);
   customerList.push(customer);
   //console.log(customerList);
   localStorage.setItem("customerList", JSON.stringify(customerList));
   btnLoadTableOnAction();
}

function btnSearchCustomrOnAction() {
    //alert("search customer");

    let id = document.getElementById("txtid"). value

    let customer = customerList.find(c => c.id === id);

    if(customer){
        document.getElementById("txtname"). value = customer.name;
        document.getElementById("txtage"). value = customer.age;
        document.getElementById("txtaddress"). value = customer.address;
    }else{
        alert("Customer Not Found");
    }
}

function btnDeleteCustomrOnAction() {
    //alert("delete customer");

    let id = document.getElementById("txtid"). value

    let index = customerList.findIndex(c => c.id === id);

    if(index !== -1){
        customerList.splice(index, 1);
        localStorage.setItem("customerList", JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("Customer Not Found");
    }
}

function btnUpdateCustomrOnAction() {
    //alert("update customer");
    
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

btnLoadTableOnAction();
