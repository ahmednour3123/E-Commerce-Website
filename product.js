//Get the stored data from local storage
const storedData = JSON.parse(localStorage.getItem("ProductData"));

// Populate the HTML elements with the stored data
const productID = document.getElementById("productID");
productID.setAttribute("id", storedData.productID);

document.getElementById("productImage").src =
  "img/products/" + storedData.imageName;
document.getElementById("productName").innerHTML = storedData.productName;
document.getElementById("productBrand").innerHTML = storedData.productBrand;
document.getElementById("productPrice").innerHTML = storedData.productPrice;

console.log(storedData);
