// Top navbar
let nav = document.createElement("nav");
nav.setAttribute("id", "navbar");

let left = document.createElement("div");
left.setAttribute("class", "left");

let menu = document.createElement("button");
menu.setAttribute("class", "menu");

let menuImg = document.createElement("img");
menuImg.setAttribute("src", "menu.png");
menuImg.setAttribute("alt", "Menu");

menu.append(menuImg);
left.append(menu);

let logo = document.createElement("div");
logo.setAttribute("class", "logo");

let logoText = document.createElement("h1");
logoText.innerText = "SNITCH";
logo.append(logoText);

let right = document.createElement("div");
right.setAttribute("class", "right");

let search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("placeholder", 'Search "WHITE SHIRTS"');

// searchh
search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let query = search.value.trim().toLowerCase();

    // keywords
    if (
      query.includes("shirt") &&
      !query.includes("t-shirt") &&
      !query.includes("overshirt")
    ) {
      window.location.href = "shirts/index.html";
    } else if (query.includes("t-shirt") || query.includes("tshirt")) {
      window.location.href = "t-shirts/index.html";
    } else if (query.includes("jeans")) {
      window.location.href = "jeans/index.html";
    } else if (query.includes("trouser")) {
      window.location.href = "trousers/index.html";
    } else if (query.includes("cargo") || query.includes("pant")) {
      window.location.href = "cargo-pants/index.html";
    } else if (query.includes("shoe") || query.includes("footwear")) {
      window.location.href = "shoes/index.html";
    } else if (query.includes("overshirt")) {
      window.location.href = "overshirt/index.html";
    } else if (query.includes("plus") || query.includes("size")) {
      window.location.href = "plus-size/index.html";
    } else if (query.includes("short")) {
      window.location.href = "shorts/index.html";
    } else if (query.includes("sunglass") || query.includes("glasses")) {
      window.location.href = "sunglasses/index.html";
    } else if (
      query.includes("perfume") ||
      query.includes("fragrance") ||
      query.includes("scent")
    ) {
      window.location.href = "perfumes/index.html";
    } else if (query !== "") {
      alert("No matching products found for: " + query);
    }
  }
});

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

// cart and count
let cartBtn = document.createElement("button");
cartBtn.setAttribute("class", "icon");
cartBtn.style.position = "relative";
cartBtn.style.cursor = "pointer";

cartBtn.addEventListener("click", function () {
  window.location.href = "cart/index.html";
});

let cartImg = document.createElement("img");
cartImg.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/8550/8550523.png",
);
cartImg.setAttribute("alt", "Cart");
cartBtn.append(cartImg);

// count cart
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

// for localstoage update cart count
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

// sub - nav bar
let subNav = document.createElement("div");
subNav.setAttribute("id", "subnav");

let categories = [
  "Discover",
  "Shirts",
  "T-shirts",
  "Jeans",
  "Trousers",
  "Cargo Pants",
  "Shoes",
  "Overshirt",
  "Plus-Size",
  "Shorts",
  "Sunglasses",
  "Perfumes",
];

categories.forEach(function (categoryText, index) {
  let link = document.createElement("a");

  if (categoryText === "Discover") {
    link.setAttribute("href", "index.html");
  } else if (categoryText === "Shirts") {
    link.setAttribute("href", "shirts/index.html");
  } else if (categoryText === "T-shirts") {
    link.setAttribute("href", "t-shirts/index.html");
  } else if (categoryText === "Jeans") {
    link.setAttribute("href", "jeans/index.html");
  } else if (categoryText === "Trousers") {
    link.setAttribute("href", "trousers/index.html");
  } else if (categoryText === "Cargo Pants") {
    link.setAttribute("href", "cargo-pants/index.html");
  } else if (categoryText === "Shoes") {
    link.setAttribute("href", "shoes/index.html");
  } else if (categoryText === "Overshirt") {
    link.setAttribute("href", "overshirt/index.html");
  } else if (categoryText === "Plus-Size") {
    link.setAttribute("href", "plus-size/index.html");
  } else if (categoryText === "Shorts") {
    link.setAttribute("href", "shorts/index.html");
  } else if (categoryText === "Sunglasses") {
    link.setAttribute("href", "sunglasses/index.html");
  } else if (categoryText === "Perfumes") {
    link.setAttribute("href", "perfumes/index.html");
  } else {
    link.setAttribute("href", "#");
  }

  link.innerText = categoryText;

  if (index === 0) {
    link.setAttribute("class", "active");
  }

  subNav.append(link);
});

document.body.append(subNav);

let box = document.createElement("div");
box.setAttribute("id", "box");

let slider = document.createElement("div");
slider.setAttribute("id", "slider");

let sliderImages = [
  "https://d2d5n4ft74bagm.cloudfront.net/media/banners/74451ed6-9e63-4a97-910b-c6d54129f4eb/1784205024.png?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/banners/c39322c5-ce8c-4a00-b351-ec19135e3a75/1784292515.png?w=90",
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_d968c92a-a532-4b53-b0db-fddf47b50ba4.jpg",
  "https://d2d5n4ft74bagm.cloudfront.net/media/banners/07b336dd-ed17-4b62-84c9-c18dc84265b3/1780900372.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/banners/eec77386-06de-49a9-bd68-b1645010eaa9/1784529965.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/banners/44c3d24d-c70d-4210-a581-108af602e0e8/1784273668.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/fefedc73-3ad4-422a-ae00-9e09409e107f/1784526197.jpeg?w=90",
];

let fullSliderSet = [...sliderImages, ...sliderImages];

fullSliderSet.forEach(function (url) {
  let img = document.createElement("img");
  img.setAttribute("class", "slide");
  img.setAttribute("src", url);
  slider.append(img);
});

box.append(slider);
document.body.append(box);

let categoryContainer = document.createElement("div");
categoryContainer.setAttribute("id", "categoriesGrid");
document.body.append(categoryContainer);

function displayCategory(imgs, targetUrl) {
  let card = document.createElement("div");
  card.setAttribute("class", "Categories");

  let link = document.createElement("a");
  link.setAttribute("href", targetUrl || "#");

  let img = document.createElement("img");
  img.setAttribute("src", imgs);

  let btn = document.createElement("button");
  btn.appendChild(img);

  link.appendChild(btn);
  card.append(link);
  categoryContainer.appendChild(card);
}

displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/aaef3c11-531f-4996-bfdc-779c33ff0cec/1780993598.jpeg?w=90",
  "shirts/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/4c91b6ae-4117-4aac-a97b-78ef219325ee/1781074776.jpeg?w=90",
  "trousers/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/09898572-d1f8-4b19-887b-96e58bf456c1/1780999109.jpeg?w=90",
  "t-shirts/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/59d59218-a414-4995-94c8-4aa61aae9ae0/1781086148.jpeg?w=90",
  "jeans/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/b83959e3-074a-409f-a033-e56e2781ab73/1780915974.jpeg?w=90",
  "cargo-pants/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/5b1d3e8b-adff-4539-8be7-96d8c01c0d12/1780915915.jpeg?w=90",
  "t-shirts/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/f27cc882-d568-4120-81d0-af8e8c6b3d4f/1780915927.jpeg?w=90",
  "shorts/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/f21919c9-612b-492c-9fc3-b24cc640c38c/1781600355.jpeg?w=90",
  "shirts/index.html",
);
displayCategory(
  "https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/0ddd6589-25a3-4d03-91c5-1f411aaaa9b2/1780916068.jpeg?w=90",
  "shoes/index.html",
);

let section1Title = document.createElement("h2");
section1Title.setAttribute("class", "title");
section1Title.innerText = "MATCH THE MOOD";

let moodBox = document.createElement("div");
moodBox.setAttribute("id", "mood");

let moodImgs = [
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/0875e990-1323-472d-8039-34d70f049000/1781000334.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/85c52675-d3ab-4a07-822e-127ab173e314/1780918798.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/a7853194-36c9-47fa-a4f2-6699f538f742/1780918748.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/608a3095-c66a-492d-9338-40ff7af120be/1780901105.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/fefedc73-3ad4-422a-ae00-9e09409e107f/1784526197.jpeg?w=90",
];

moodImgs.forEach(function (url) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let img = document.createElement("img");
  img.setAttribute("src", url);

  card.append(img);
  moodBox.append(card);
});

// animation
document.addEventListener("DOMContentLoaded", function () {
  const moodSection = document.getElementById("mood");

  if (moodSection) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        } else {
          entry.target.classList.remove("animate-reveal");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(moodSection);
  }
});

let section2Title = document.createElement("h2");
section2Title.setAttribute("class", "title");
section2Title.innerText = "STEALS";

let stealsBox = document.createElement("div");
stealsBox.setAttribute("id", "steals");

let stealsImgs = [
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/cd05ff83-d05d-4889-9175-073aed3c2c92/1778584570.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/f325ee36-6514-4c54-8802-99e36ff5b827/1778584445.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/19758d0c-2c68-482c-8f53-ba440b7cef1f/1778584615.jpeg?w=90",
  "https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/12fdf40c-a6e1-48ca-b99f-2f12ee5edd68/1778584336.jpeg?w=90",
];

stealsImgs.forEach(function (url) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let img = document.createElement("img");
  img.setAttribute("src", url);

  card.append(img);
  stealsBox.append(card);
});

document.body.append(section1Title, moodBox, section2Title, stealsBox);

//animation
document.addEventListener("DOMContentLoaded", function () {
  const stealsSection = document.getElementById("steals");

  if (stealsSection) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        } else {
          entry.target.classList.remove("animate-reveal");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(stealsSection);
  }
});

let sectionTitle = document.createElement("h2");
sectionTitle.setAttribute("class", "title");
sectionTitle.innerText = "SHOP YOUR SIZE";

let banner = document.createElement("div");
banner.setAttribute("id", "banner");

let bannerImg = document.createElement("img");
bannerImg.setAttribute(
  "src",
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/FC_LAST_CHANE.jpg?v=1780993257",
);

banner.append(bannerImg);
document.body.append(sectionTitle, banner);

let title = document.createElement("h2");
title.setAttribute("class", "heading");
title.innerText = "NEW AND POPULAR";

let tabsBox = document.createElement("div");
tabsBox.setAttribute("id", "tabs-box");

let tabNames = ["ALL", "SHIRTS", "JEANS", "T-SHIRTS", "TROUSERS", "SHORTS"];

tabNames.forEach(function (name, index) {
  let tabBtn = document.createElement("button");
  tabBtn.setAttribute("class", index === 0 ? "tab-btn active" : "tab-btn");
  tabBtn.innerText = name;
  tabsBox.append(tabBtn);
});

document.body.append(title, tabsBox);

let productsContainer = document.createElement("div");
productsContainer.setAttribute("id", "productsContainer");
document.body.append(productsContainer);

// UPDATED displayProduct function with click redirection to product details page
function displayProduct(imgUrl, titleText, priceText) {
  let card = document.createElement("div");
  card.setAttribute("class", "productCard");
  card.style.cursor = "pointer";

  card.addEventListener("click", function () {
    let productData = {
      image: imgUrl,
      title: titleText,
      price: priceText,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
    window.location.href = "product/index.html";
  });

  let imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("class", "imgWrapper");

  let img = document.createElement("img");
  img.setAttribute("src", imgUrl);

  let wishlistBtn = document.createElement("button");
  wishlistBtn.setAttribute("class", "wishlistBtn");
  imgWrapper.append(img, wishlistBtn);

  let title = document.createElement("p");
  title.setAttribute("class", "productTitle");
  title.innerText = titleText;

  let price = document.createElement("p");
  price.setAttribute("class", "productPrice");
  price.innerText = "₹" + priceText;

  card.append(imgWrapper, title, price);
  productsContainer.appendChild(card);
}

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_4005ac0d-b9df-4bec-acf2-6996293a66ba.jpg?v=1782409429&quality=80",
  "100% Cotton Oxford Stripes Shirt",
  "1099",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_d968c92a-a532-4b53-b0db-fddf47b50ba4.jpg?v=1784186845&quality=80",
  "Heart Embroidered Shirt",
  "1399",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_931eba2a-c7b2-4fc9-a835-8e7535009228.jpg?v=1783428868&quality=80",
  "Distressed Straight Fit Jeans",
  "1999",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_29bbe6ea-769c-40e2-946f-385bfa933b5d.jpg?v=1782409424&quality=80",
  "100% Cotton Stripes Shirt",
  "1299",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_0cb97c5b-1a7d-43db-9210-3038b55ca8e1.jpg?v=1783936773&quality=80",
  "Slim Fit 100% Cotton Stripes Shirt",
  "1099",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_1b248051-f258-44b3-bc23-28cf0482cc7e.jpg?v=1782409454&quality=80",
  "100% Cotton Regular Fit Checks Shirt",
  "1399",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_55f5e1b6-eeb9-4a61-b176-b520214a9e3d.jpg?v=1782409426&quality=80",
  "100% Cotton Stripes Shirt",
  "1299",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_fc95a037-6d60-4503-9666-843286ccbe8c.jpg?v=1784136827&quality=80",
  "100% Viscose Embroidered Box Fit Shirt",
  "1099",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mss4850-01_1.jpg?v=1782236057&quality=80",
  "100% Cotton Regular Fit Checks Shirt",
  "1399",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_4379978f-de61-42f9-9ae9-33e7525fb065.jpg?v=1782813749&quality=80",
  "Slim Fit 100% Cotton Textured Shirt",
  "1099",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-02-M39.jpg?v=1703681512&quality=80",
  "Heavyweight Utility Cotton Overshirt",
  "1799",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_312569c7-c0a4-413b-bcd5-912825d233a4.jpg?v=1780588244&quality=80",
  "Relaxed Fit Solid Twill Overshirt",
  "1699",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-03-M32.jpg?v=1703681540&quality=80",
  "Structured Cargo Pocket Overshirt",
  "1899",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_4e6fa06b-192c-4642-b39c-bafee70b05af.jpg?v=1779819939&quality=80",
  "Textured Checkered Flannel Overshirt",
  "1999",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-04-M45.jpg?v=1759753502&quality=80",
  "Classic Snap-Button Workwear Overshirt",
  "1799",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_241f69ea-5c70-4d5c-9384-c41f36c3c87b.jpg?v=1778864511&quality=80",
  "Minimalist Layering Overshirt",
  "1599",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2624-02-M46.jpg?v=1759482222&quality=80",
  "Vintage Wash Denim Overshirt",
  "2199",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_d285ee44-4c21-49aa-9604-dde65ef8e6fc.jpg?v=1778864513&quality=80",
  "Core Everyday Casual Overshirt",
  "1699",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/ce2c997ea9273310240f09b985063218.jpg?v=1731388480&quality=80",
  "Burgundy Solid Twill Shirt",
  "1299",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_aec59d73-c1a7-44f1-9fad-760db248e137.jpg?v=1784821661&quality=80",
  "Floral Box Fit Shirt",
  "1399",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/f56b2f7b64695c54cac131cd598e16bb.webp?v=1723438767&quality=80",
  "Grey Elbow Patch Oxford Shirt",
  "1499",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_41ce073a-bb5d-43af-940f-a46952915b99.jpg?v=1784821663&quality=80",
  "Floral Box Fit Shirt",
  "1379",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/a868afaa9d7394e644f7ba1bf44bff2d.jpg?v=1755866135&quality=80",
  "Light Grey Textured Shirt",
  "1199",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_413cb426-c3e6-4784-98f9-40a2ffdcaade.jpg?v=1784646530&quality=80",
  "Jacquard Floral Box Fit Shirt",
  "1299",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2742-01-M36.jpg?v=1713208377&quality=80",
  "Jacquard Floral Box Fit Shirt",
  "1299",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_eebc18e8-1ad6-43c0-b1a2-1111d9904c51.jpg?v=1782409472&quality=80",
  "Relaxed Fit Cotton Casual Shorts",
  "1199",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_adbe8e07-6bbc-421f-acc4-3350f766fb1f.jpg?v=1778087271&quality=80",
  "Utility Cargo Pocket Shorts",
  "1399",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_ab7f04b4-b57d-4159-80b0-5bbe6acb1a78.jpg?v=1781627401&quality=80",
  "Performance Athletic Gym Shorts",
  "999",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_9c9de587-ead1-4df8-a091-3a41745a80bd.jpg?v=1778519886&quality=80",
  "Vintage Washed Denim Shorts",
  "1499",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_5c2ca63a-5b23-479e-8da4-a925f210440d.jpg?v=1781025703&quality=80",
  "Structured Pleated Casual Shorts",
  "1299",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_7d74bf80-c089-44d8-99d3-c75def9b6754.jpg?v=1778864600&quality=80",
  "Drawstring Lounge Terry Shorts",
  "1099",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_b1d8f0f1-4042-406f-be13-4703b557b93b.jpg?v=1781025704&quality=80",
  "Printed Resort Summer Shorts",
  "1399",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_664a1c73-5ebf-405b-8fd9-f1f3ac8e80f3.jpg?v=1781025705&quality=80",
  "Core Everyday Plain Shorts",
  "1199",
);

displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_fefadd55-615f-4920-a0f4-831d3b1db049.jpg?v=1783668691&quality=80",
  "Lars Blue Loose Fit Jeans",
  "1199",
);
displayProduct(
  "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/1_28fc5e57-c2bc-4a71-8c7d-6ee8f675f57c.jpg?v=1779298210&quality=80",
  "Straight Loose Fit Blue Jeans",
  "999",
);

// Footer creation
let footer = document.createElement("footer");
footer.setAttribute("id", "mainFooter");

let footerContainer = document.createElement("div");
footerContainer.setAttribute("class", "footerContainer");

let companyCol = document.createElement("div");
companyCol.setAttribute("class", "footerCol");

let companyTitle = document.createElement("h4");
companyTitle.innerText = "COMPANY";

let aboutLink = document.createElement("a");
aboutLink.href = "#";
aboutLink.innerText = "About Us";

let privacyLink = document.createElement("a");
privacyLink.href = "#";
privacyLink.innerText = "Privacy Policy";

let termsLink = document.createElement("a");
termsLink.href = "#";
termsLink.innerText = "Terms & Conditions";

let returnLink = document.createElement("a");
returnLink.href = "#";
returnLink.innerText = "Return/Exchange Policy";

let contactLink = document.createElement("a");
contactLink.href = "#";
contactLink.innerText = "Contact Us";

let sitemapLink = document.createElement("a");
sitemapLink.href = "#";
sitemapLink.innerText = "Sitemap";

let stakeholdersLink = document.createElement("a");
stakeholdersLink.href = "#";
stakeholdersLink.innerText = "Stakeholders";

companyCol.append(
  companyTitle,
  aboutLink,
  privacyLink,
  termsLink,
  returnLink,
  contactLink,
  sitemapLink,
  stakeholdersLink,
);

let socialCol = document.createElement("div");
socialCol.setAttribute("class", "footerCol centerAlign");

let socialIconsBox = document.createElement("div");
socialIconsBox.setAttribute("class", "socialIcons");

let socialLinks = ["f", "c", "in", "G"];
socialLinks.forEach(function (iconText) {
  let a = document.createElement("a");
  a.href = "#";
  a.innerText = iconText;
  socialIconsBox.append(a);
});

let downloadTitle = document.createElement("h4");
downloadTitle.innerText = "DOWNLOAD APP";

let appButtonsBox = document.createElement("div");
appButtonsBox.setAttribute("class", "appButtons");

let appleBtn = document.createElement("img");
appleBtn.src =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
appleBtn.alt = "App Store";

let googleBtn = document.createElement("img");
googleBtn.src =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
googleBtn.alt = "Google Play";

appButtonsBox.append(appleBtn, googleBtn);
socialCol.append(socialIconsBox, downloadTitle, appButtonsBox);

footerContainer.append(companyCol, socialCol);
footer.append(footerContainer);
document.body.append(footer);
