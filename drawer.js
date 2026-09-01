function initMenuDrawer() {
  buildMenuDrawer();
  wireMenuButton();
}

function buildMenuDrawer() {
  let overlay = document.createElement("div");
  overlay.id = "menuOverlay";

  let drawer = document.createElement("div");
  drawer.id = "menuDrawer";

  let drawerHeader = document.createElement("div");
  drawerHeader.className = "drawerHeader";

  let closeBtn = document.createElement("button");
  closeBtn.id = "menuClose";
  closeBtn.innerText = "✕";
  closeBtn.addEventListener("click", closeMenuDrawer);

  let drawerTitle = document.createElement("span");
  drawerTitle.className = "drawerTitle";
  drawerTitle.innerText = "CATEGORIES";

  drawerHeader.append(closeBtn, drawerTitle);

  let thumbContainer = document.createElement("div");
  thumbContainer.className = "drawerThumbContainer";

  let linksBox = document.createElement("nav");
  linksBox.className = "drawerLinks";

  let drawerCategories = [
    "NEW ARRIVALS",
    "BESTSELLERS",
    "SHOP ALL",
    "LINEN EDIT",
    "SHIRTS",
    "T-SHIRTS | POLO",
    "JEANS",
    "TROUSERS",
    "FOOTWEAR",
    "CARGO PANTS",
    "JOGGERS",
    "SHORTS",
    "OVERSHIRTS",
    "PERFUMES",
  ];

  drawerCategories.forEach(function (categoryText) {
    let link = document.createElement("a");

    if (categoryText === "SHIRTS" || categoryText === "Shirts") {
      link.href = "shirts/index.html";
    } else if (categoryText === "NEW ARRIVALS") {
      link.href = "new-arrivals/index.html";
    } else if (categoryText === "BESTSELLERS") {
      link.href = "bestsellers/index.html";
    } else {
      link.href = "#";
    }

    link.innerText = categoryText;
    link.addEventListener("click", closeMenuDrawer);
    linksBox.append(link);
  });

  drawer.append(drawerHeader, thumbContainer, linksBox);
  overlay.append(drawer);
  document.body.append(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeMenuDrawer();
    }
  });
}

function openMenuDrawer() {
  document.getElementById("menuOverlay").classList.add("open");
}

function closeMenuDrawer() {
  document.getElementById("menuOverlay").classList.remove("open");
}

function wireMenuButton() {
  let menuBtn = document.querySelector(".menu");
  if (menuBtn) {
    menuBtn.addEventListener("click", openMenuDrawer);
  }
}

initMenuDrawer();
