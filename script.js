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

// This function passes the product clicked in the Shop page to the Product page.
function PassProduct(element) {
  console.log(element);

  // Get the classes of the product by using querySelector.
  // Getting the ID of the product
  const productID = element.getAttribute("id");
  // Getting the image source of the product
  const productImage = element.querySelector(".productImage").src;
  // Extracting the name of the .jpg file from the source by using substring
  const imageName = productImage.substring(productImage.lastIndexOf("/") + 1);
  // Getting the brand, name and price
  const productBrand = element.querySelector(".productBrand").innerText;
  const productName = element.querySelector(".productName").innerText;
  const productPrice = element.querySelector(".productPrice").innerText;

  // Creating an object to store the data which was passed
  const itemClicked = {
    productID: productID,
    imageName: imageName,
    productBrand: productBrand,
    productName: productName,
    productPrice: productPrice,
  };

  // Store the product clicked in a local storage called ProductData
  localStorage.setItem("ProductData", JSON.stringify(itemClicked));

  // Redirect to the new page with the URL
  window.location.href = "product.html";
}

var cartData = [];
var counter = 0;

function AddToCart(element) {
  // Retrieve the existing products from the storage and add to them new products, 
  cartDataObject = JSON.parse(localStorage.getItem("CartData"));

  // If the data isn't empty, transform the json file to an array of objects
  if (cartDataObject !== null) {
    cartData = Array.from(cartDataObject);
  }
  const _productID = element.getAttribute("id");
  const _productQuantity = document.getElementById("productQuantity").value;
  const _productPrice = document.getElementById("productPrice").innerText;
  const _productImage = document.getElementById("productImage").src;
  const _productName = document.getElementById("productName").innerText;

  const _imageName = _productImage.substring(
    _productImage.lastIndexOf("/") + 1
  );

  // Check if product ID already exists in cartData, if not create the first one.
  if (cartData !== null) {
    var productIndex = cartData.findIndex(
      (product) => product.productID === _productID
    );
  } else {
    cartData = {
      productID: _productID,
      productQuantity: _productQuantity,
      productPrice: _productPrice,
      imageName: _imageName,
      productName: _productName,
    };
  }

  if (productIndex === -1) {
    // Product ID is not found in cartData, so push new products to the one we created above.
    cartData.push({
      productID: _productID,
      productQuantity: _productQuantity,
      productPrice: _productPrice,
      imageName: _imageName,
      productName: _productName,
    });

    console.log("product added");
  } else {
    //Product ID already exists in cartData, so update existing product quantity.
    //cartData[productIndex].productPrice += parseInt(cartData[productIndex].productPrice);
    //cartData[productIndex].productQuantity += parseInt(cartData[productIndex].productQuantity);
    console.log("already exists, so increase quantity and price");
  }

  localStorage.setItem("CartData", JSON.stringify(cartData));

  window.location.href = "cart.html";
}

// var removeProduct =document.querySelector(".aa");
// removeProduct.addEventListener("click",(eo) => {
//   if (eo.target.className == "far fa-times-circle") {
//     eo.target.parentElement.parentElement.parentElement.remove();
//   }
// })

//localStorage.clear();
