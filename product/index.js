// TOP NAVBAR
let nav = document.createElement("nav");
nav.setAttribute("id", "navbar");

let left = document.createElement("div");
left.setAttribute("class", "left");

let menu = document.createElement("button");
menu.setAttribute("class", "menu");

let menuImg = document.createElement("img");
menuImg.setAttribute("src", "../menu.png");
menuImg.setAttribute("alt", "Menu");

menu.append(menuImg);
left.append(menu);

let logo = document.createElement("div");
logo.setAttribute("class", "logo");

let logoLink = document.createElement("a");
logoLink.setAttribute("href", "../index.html");
logoLink.style.textDecoration = "none";
logoLink.style.color = "inherit";

let logoText = document.createElement("h1");
logoText.innerText = "SNITCH";
logoLink.append(logoText);
logo.append(logoLink);

let right = document.createElement("div");
right.setAttribute("class", "right");

let search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("placeholder", "Search products...");

let userBtn = document.createElement("button");
userBtn.setAttribute("class", "icon");
userBtn.setAttribute("id", "userIconBtn");

let iconImg = document.createElement("img");
iconImg.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPQm7XV6MGn93dwJ1_EDYCQgnBse_nBDLcWxUUI2P9Q&s=10",
);
iconImg.setAttribute("alt", "User Account");

userBtn.append(iconImg);

// --- CART BUTTON WITH COUNTER BADGE & REDIRECTION ---
let cartBtn = document.createElement("button");
cartBtn.setAttribute("class", "icon");
cartBtn.style.position = "relative";
cartBtn.style.cursor = "pointer";

cartBtn.addEventListener("click", function () {
  window.location.href = "../cart/index.html";
});

let cartImg = document.createElement("img");
cartImg.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/8550/8550523.png",
);
cartImg.setAttribute("alt", "Cart");
cartBtn.append(cartImg);

// Cart count badge element
let cartCountBadge = document.createElement("span");
cartCountBadge.setAttribute("id", "cartCountBadge");
cartCountBadge.style.position = "absolute";
cartCountBadge.style.top = "-5px";
cartCountBadge.style.right = "-5px";
cartCountBadge.style.backgroundColor = "black";
cartCountBadge.style.color = "white";
cartCountBadge.style.fontSize = "10px";
cartCountBadge.style.padding = "2px 5px";
cartCountBadge.style.borderRadius = "50%";
cartCountBadge.style.fontWeight = "bold";

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalCount = cart.reduce(function (sum, item) {
    return sum + (item.quantity || 1);
  }, 0);

  if (totalCount > 0) {
    cartCountBadge.innerText = totalCount;
    cartCountBadge.style.display = "inline-block";
  } else {
    cartCountBadge.style.display = "none";
  }
}

cartBtn.append(cartCountBadge);
updateCartCount();

right.append(search, userBtn, cartBtn);
nav.append(left, logo, right);

document.body.prepend(nav);

// Fetch saved product data from localStorage
let productData = JSON.parse(localStorage.getItem("selectedProduct")) || {
  image:
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_d968c92a-a532-4b53-b0db-fddf47b50ba4.jpg",
  title: "Burgundy Solid Twill Shirt",
  price: "1219",
};

// MAIN PRODUCT DETAILS CONTAINER
let mainContainer = document.createElement("div");
mainContainer.className = "pdp-main-container";
mainContainer.style.display = "flex";
mainContainer.style.padding = "40px 80px";
mainContainer.style.gap = "60px";

// Left: Image Section
let imageSection = document.createElement("div");
imageSection.className = "pdp-image-section";
imageSection.style.flex = "1";
imageSection.style.position = "relative";

let mainImg = document.createElement("img");
mainImg.src = productData.image;
mainImg.style.width = "100%";
mainImg.style.borderRadius = "4px";
mainImg.style.objectFit = "cover";
imageSection.append(mainImg);

// Right: Details Section
let detailsSection = document.createElement("div");
detailsSection.className = "pdp-details-section";
detailsSection.style.flex = "1";

// Title & Price Row
let titlePriceRow = document.createElement("div");
titlePriceRow.style.display = "flex";
titlePriceRow.style.justifyContent = "space-between";
titlePriceRow.style.alignItems = "center";

let titleH2 = document.createElement("h2");
titleH2.innerText = productData.title;
titleH2.style.fontSize = "20px";
titleH2.style.fontWeight = "500";

let priceH2 = document.createElement("h2");
priceH2.innerText = "₹" + productData.price;
priceH2.style.fontSize = "20px";
priceH2.style.fontWeight = "600";

titlePriceRow.append(titleH2, priceH2);

// Ratings
let ratingsDiv = document.createElement("div");
ratingsDiv.style.margin = "10px 0 20px 0";
ratingsDiv.style.fontSize = "13px";
ratingsDiv.style.color = "#333";
ratingsDiv.innerHTML = `<span style="background: #000; color: #fff; padding: 2px 6px; font-weight: bold; border-radius: 3px;">4.5 ★</span> <b>1724</b> Ratings and <b>552</b> Reviews`;

// Offers Box
let offersContainer = document.createElement("div");
offersContainer.style.display = "flex";
offersContainer.style.gap = "15px";
offersContainer.style.margin = "20px 0";

let offer1 = document.createElement("div");
offer1.style.border = "1px dashed #d4af37";
offer1.style.background = "#fdfbf7";
offer1.style.padding = "10px";
offer1.style.borderRadius = "4px";
offer1.style.flex = "1";
offer1.style.fontSize = "12px";
offer1.innerHTML = `<b>🏷️ TRYSNITCH5</b><p style="margin: 5px 0 0 0; color: #666;">Enjoy 5% off on your first web order.</p>`;

let offer2 = document.createElement("div");
offer2.style.border = "1px dashed #d4af37";
offer2.style.background = "#fdfbf7";
offer2.style.padding = "10px";
offer2.style.borderRadius = "4px";
offer2.style.flex = "1";
offer2.style.fontSize = "12px";
offer2.innerHTML = `<b>🏷️ NEW10</b><p style="margin: 5px 0 0 0; color: #666;">Enjoy 10% off on your order.</p>`;

offersContainer.append(offer1, offer2);

// Colors Selector Header
let colorHeading = document.createElement("p");
colorHeading.innerHTML = "<b>COLORS</b>";
colorHeading.style.textAlign = "center";
colorHeading.style.margin = "20px 0 10px 0";
colorHeading.style.fontSize = "12px";

let colorSwatches = document.createElement("div");
colorSwatches.style.display = "flex";
colorSwatches.style.justifyContent = "center";
colorSwatches.style.gap = "10px";
colorSwatches.style.marginBottom = "20px";

let colorsList = [
  productData.image,
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_931eba2a-c7b2-4fc9-a835-8e7535009228.jpg",
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_76ddcb4a-7f5b-4d77-94c8-5c5e244ae1c5.jpg",
];

// Track selected color image
let selectedColorImg = productData.image;

colorsList.forEach((url) => {
  let imgBox = document.createElement("img");
  imgBox.src = url;
  imgBox.style.width = "40px";
  imgBox.style.height = "50px";
  imgBox.style.objectFit = "cover";
  imgBox.style.borderRadius = "4px";
  imgBox.style.cursor = "pointer";
  imgBox.style.border = "1px solid #ccc";
  imgBox.addEventListener("click", () => {
    mainImg.src = url;
    selectedColorImg = url;
  });
  colorSwatches.append(imgBox);
});

// Sizes Header & Chart
let sizeHeaderRow = document.createElement("div");
sizeHeaderRow.style.display = "flex";
sizeHeaderRow.style.justifyContent = "space-between";
sizeHeaderRow.style.alignItems = "center";
sizeHeaderRow.style.margin = "20px 0 10px 0";
sizeHeaderRow.innerHTML = `<span style="font-size: 12px; font-weight: bold;">SIZES</span><a href="#" style="font-size: 12px; color: #000;">SIZE CHART</a>`;

let sizesContainer = document.createElement("div");
sizesContainer.style.display = "flex";
sizesContainer.style.gap = "10px";
sizesContainer.style.marginBottom = "20px";

let sizes = ["XS", "S", "M", "L", "XL", "XXL"];
let selectedSize = "M"; // Default size selection

sizes.forEach((size, idx) => {
  let sizeBtn = document.createElement("button");
  sizeBtn.innerText = size;
  sizeBtn.style.flex = "1";
  sizeBtn.style.padding = "10px 0";
  sizeBtn.style.border = "1px solid #ccc";
  sizeBtn.style.background = idx === 2 ? "#000" : "#fff";
  sizeBtn.style.color = idx === 2 ? "#fff" : "#000";
  sizeBtn.style.cursor = "pointer";
  sizeBtn.style.fontWeight = "500";

  sizeBtn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach((b) => {
      b.style.background = "#fff";
      b.style.color = "#000";
    });
    sizeBtn.style.background = "#000";
    sizeBtn.style.color = "#fff";
    selectedSize = size;
  });
  sizeBtn.className = "size-btn";
  sizesContainer.append(sizeBtn);
});

// Delivery Info
let deliveryInfo = document.createElement("p");
deliveryInfo.style.fontSize = "12px";
deliveryInfo.style.textAlign = "center";
deliveryInfo.style.color = "#666";
deliveryInfo.style.margin = "15px 0";
deliveryInfo.innerText = "FREE 1-2 day delivery on 5k+ pincodes";

// Add to Bag Button with Functionality
let addBtn = document.createElement("button");
addBtn.innerText = "ADD TO BAG";
addBtn.style.width = "100%";
addBtn.style.background = "#000";
addBtn.style.color = "#fff";
addBtn.style.padding = "15px";
addBtn.style.border = "none";
addBtn.style.fontWeight = "bold";
addBtn.style.cursor = "pointer";
addBtn.style.marginBottom = "30px";

addBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if identical item (same title + size) already exists
  let existingItemIndex = cart.findIndex(
    (item) => item.title === productData.title && item.size === selectedSize,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity =
      (cart[existingItemIndex].quantity || 1) + 1;
  } else {
    let newItem = {
      image: selectedColorImg,
      title: productData.title,
      price: productData.price,
      size: selectedSize,
      quantity: 1,
    };
    cart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  alert("Product added to bag successfully!");

  // Optional: Uncomment below to automatically redirect to cart page after adding
  // window.location.href = "../cart/index.html";
});

detailsSection.append(
  titlePriceRow,
  ratingsDiv,
  offersContainer,
  colorHeading,
  colorSwatches,
  sizeHeaderRow,
  sizesContainer,
  deliveryInfo,
  addBtn,
);

// Accordion Dropdowns
let accordions = ["DETAILS", "REVIEWS", "DELIVERY", "RETURNS"];
accordions.forEach((accTitle) => {
  let accRow = document.createElement("div");
  accRow.style.display = "flex";
  accRow.style.justifyContent = "space-between";
  accRow.style.padding = "15px 0";
  accRow.style.borderTop = "1px solid #eee";
  accRow.style.cursor = "pointer";
  accRow.style.fontSize = "13px";
  accRow.style.fontWeight = "500";
  accRow.innerHTML = `<span>${accTitle}</span><span>+</span>`;

  detailsSection.append(accRow);
});

mainContainer.append(imageSection, detailsSection);
document.body.append(mainContainer);
