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

let cartBtn = document.createElement("button");
cartBtn.setAttribute("class", "icon");

let cartImg = document.createElement("img");
cartImg.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/8550/8550523.png",
);
cartImg.setAttribute("alt", "Cart");
cartBtn.append(cartImg);

right.append(search, userBtn, cartBtn);
nav.append(left, logo, right);
document.body.prepend(nav);

// SUB-NAVIGATION BAR (Universal routing for all 12 categories)
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

function getFolderSlug(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

let currentPath = window.location.pathname;
let matchedCategory = categories.find((cat) =>
  currentPath.includes(getFolderSlug(cat)),
);

categories.forEach(function (categoryText) {
  let link = document.createElement("a");
  let folderSlug = getFolderSlug(categoryText);

  if (categoryText === "Discover") {
    link.setAttribute("href", "../index.html");
  } else {
    // Correctly routes from any subfolder to any other subfolder
    link.setAttribute("href", `../${folderSlug}/index.html`);
  }

  link.innerText = categoryText;

  // Highlights the current active tab based on your location
  if (currentPath.includes(folderSlug)) {
    link.setAttribute("class", "active");
  }

  subNav.append(link);
});

document.body.append(subNav);

// MAIN CONTENT WRAPPER
let mainLayout = document.createElement("div");
mainLayout.setAttribute("class", "category-main-layout");

// --- LEFT FILTER SIDEBAR ---
let filterSidebar = document.createElement("div");
filterSidebar.setAttribute("id", "filterSidebar");

let filterHeader = document.createElement("div");
filterHeader.setAttribute("class", "filter-header-row");
filterHeader.innerHTML = "<span>FILTERS</span>";
filterSidebar.append(filterHeader);

let filterCategories = [
  "SIZE",
  "COLOR",
  "PATTERN",
  "FIT",
  "MATERIAL",
  "COLLAR",
  "SLEEVES",
  "PRICE",
];

filterCategories.forEach(function (filterName) {
  let group = document.createElement("div");
  group.setAttribute("class", "filter-group");

  let titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "filter-group-title");
  titleDiv.innerHTML = `<span>${filterName}</span><span>+</span>`;

  group.append(titleDiv);
  filterSidebar.append(group);
});

let filterActions = document.createElement("div");
filterActions.setAttribute("class", "filter-actions");

let clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "clear-btn");
clearBtn.innerText = "CLEAR";

let applyBtn = document.createElement("button");
applyBtn.setAttribute("class", "apply-btn");
applyBtn.innerText = "APPLY";

filterActions.append(clearBtn, applyBtn);
filterSidebar.append(filterActions);

// --- RIGHT CONTENT AREA ---
let contentArea = document.createElement("div");
contentArea.setAttribute("class", "category-content-area");

let topBar = document.createElement("div");
topBar.setAttribute("class", "category-top-bar");

let pageHeader = document.createElement("h2");
pageHeader.setAttribute("class", "category-page-header");
pageHeader.innerText = matchedCategory
  ? matchedCategory.toUpperCase()
  : "PRODUCTS";

let sortSelect = document.createElement("select");
sortSelect.setAttribute("class", "sort-select");
let sortOption = document.createElement("option");
sortOption.innerText = "Sort";
sortSelect.append(sortOption);

topBar.append(pageHeader, sortSelect);

// Tags Scroll Bar
let tagsScroll = document.createElement("div");
tagsScroll.setAttribute("id", "tshirtTagsScroll");

let tagNames = [
  "ALL",
  "NEW",
  "OVERSIZED",
  "POLO",
  "GRAPHIC",
  "BASIC",
  "HEAVY WEIGHT",
  "BLACK",
  "WHITE",
  "STRIPES",
  "VINTAGE",
  "CORE LAB",
];

tagNames.forEach(function (tagName, index) {
  let tagBtn = document.createElement("button");
  tagBtn.setAttribute("class", index === 0 ? "tag-btn active" : "tag-btn");
  tagBtn.innerText = tagName;
  tagsScroll.append(tagBtn);
});

// Products Container Grid
let productsContainer = document.createElement("div");
productsContainer.setAttribute("id", "productsContainer");

contentArea.append(topBar, tagsScroll, productsContainer);
mainLayout.append(filterSidebar, contentArea);
document.body.append(mainLayout);

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
    window.location.href = "../product/index.html";
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

// Product List
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

// FOOTER
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

companyCol.append(companyTitle, aboutLink, privacyLink, termsLink);
footerContainer.append(companyCol);
footer.append(footerContainer);
document.body.append(footer);
