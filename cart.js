// function LoadCartData() {
//   //Get the stored data from local storage
//   const storedData = JSON.parse(localStorage.getItem("CartData"));

//   // Add each product in the table.
//   for (let index = 0; index < storedData.length; index++) {
//     console.log(index);
//     console.log(storedData[index]);
//     var cardList = document.getElementsByName("cardList").value;

//     var tr = document.createElement("tr");
//     tr.setAttribute("id", "tableRow");

//     var td1 = tr.appendChild(document.createElement("td"));

//     var a = td1.appendChild(document.createElement("a"));
//     a.href = "#";
//     a.className = "aa";

//     var i = a.appendChild(document.createElement("i"));
//     i.className = "far fa-times-circle";

//     var td2 = tr.appendChild(document.createElement("td"));
//     var img = td2.appendChild(document.createElement("img"));
//     console.log(storedData[index].imageName);
//     img.src = "img/products/" + storedData[index].imageName;

//     var td3 = tr.appendChild(document.createElement("td"));
//     td3.innerHTML = storedData[index].productName;

//     var td4 = tr.appendChild(document.createElement("td"));
//     td4.innerHTML = storedData[index].productPrice;

//     var td5 = tr.appendChild(document.createElement("td"));
//     var input = td5.appendChild(document.createElement("input"));
//     input.setAttribute("value", storedData[index].productQuantity);
//     input.setAttribute("type", "number");

//     document.getElementById("cardList").appendChild(tr);
//     //document.getElementById("tableRow").appendChild(td);

//     // const productID = document.getElementById("productID");
//     // productID.setAttribute("id", storedData.productID);
//   }
// }

//Script for navigation bar 
const bar = document.getElementById("bar");
const clos = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (clos) {
  clos.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

var addTotal = 0;
let html = "";
var storedData = JSON.parse(localStorage.getItem("CartData"));
console.log(storedData);

// Function to load cart data when moving to the Cart Page - Ramez & Amir
function LoadCartData() {
  storedData = JSON.parse(localStorage.getItem("CartData"));

  html = "";
  for (let i = 0; i < storedData.length; i++) {
    html += `
    <tr>
        <td><a href="#"></a><i class="far fa-times-circle" onclick="removeProduct(${i})"></i></td> 
        <td><img src=${"./img/products/" + storedData[i].imageName}></td>
        <td>${storedData[i].productName}</td>
        <td>${storedData[i].productPrice}</td>
        <td><input type="number" value="${storedData[i].productQuantity}"></td>
    </tr>
    
    `;

    document.querySelector(".cardList").innerHTML = html;
    
    // Get total price
    var total = storedData[i].productPrice;

    var totalaftersplit = total.split("$");
    var totalafterparse = Number(totalaftersplit[1]);

    var xx = (addTotal += totalafterparse);
    console.log(xx);
    document.getElementById(
      "price"
    ).innerHTML += `<tr><td>Card Subtotal</td> <td>${storedData[i].productPrice}</td></tr>`;
    document.getElementById("total").innerHTML = `$` + addTotal;
  }

}

function removeProduct(i) {
  storedData.splice(i, 1);
  localStorage.setItem("CartData", JSON.stringify(storedData));
  LoadCartData();
}
