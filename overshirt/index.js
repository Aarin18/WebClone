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

// SUB-NAVIGATION BAR
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
    link.setAttribute("href", `../${folderSlug}/index.html`);
  }

  link.innerText = categoryText;

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

let filterCategories = ["SIZE", "COLOR", "PATTERN", "FIT", "MATERIAL", "PRICE"];

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

// Products Container Grid
let productsContainer = document.createElement("div");
productsContainer.setAttribute("id", "productsContainer");

contentArea.append(topBar, productsContainer);
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

  // Prevent wishlist click from triggering product card click event
  wishlistBtn.addEventListener("click", function (e) {
    e.stopPropagation();
  });

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
