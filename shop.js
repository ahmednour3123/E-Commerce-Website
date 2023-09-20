// Adding an array of products dynamically to the HTML file instead of making multiple html elements.
const products = [
  {
    name: "T-Shirt 1",
    price: "$80",
    image: "./img/products/f1.jpg",
    brand: "H&M",
  },
  {
    name: "T-Shirt 2",
    price: "$60",
    image: "./img/products/f2.jpg",
    brand: "OR",
  },
  {
    name: "T-Shirt 3",
    price: "$50",
    image: "./img/products/f3.jpg",
    brand: "TownTeam",
  },
  {
    name: "T-Shirt 4",
    price: "$100",
    image: "./img/products/f4.jpg",
    brand: "Defacto",
  }
];

let html = "";

// Each html element takes an id that's equal to the index of the product in the array, this id is used later when passing the item to the cart.
for (let i = 0; i < products.length; i++) {
  html += `
    <div class="pro" onclick="PassProduct(this)" id="${i + 1}">
      <img class="productImage" src="${products[i].image}" alt="" />
      <div class="des">
        <span class="productBrand">${products[i].brand}</span>
        <h5 class="productName">${products[i].name}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4 class="productPrice">${products[i].price}</h4>
      </div>
      <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
    </div>
  `;
}

// Adding the html variable to the HTML file
document.querySelector(".pro-container").innerHTML = html;
