

let link = document.createElement("link");

link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Liter&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sixtyfour+Convergence&display=swap";

document.head.appendChild(link);

let style = document.createElement("style");
style.textContent = `
*{
  font-family: 'poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
}
`;

document.head.appendChild(style);

let body = document.body;
body.style.backgroundColor = "#f5f5f5";



// responsive menu
const menuMediaQuery = window.matchMedia("(min-width: 1100px) and (max-width: 1200px)");
const menuMediaQuery2 = window.matchMedia("(min-width: 1000px) and (max-width: 1050px)");
const menuMediaQuery3 = window.matchMedia("(min-width: 800px) and (max-width: 850px)");
const menuMediaQuery4 = window.matchMedia("(max-width: 335px)");
const headerMediaQuery = window.matchMedia("(max-width: 820px)");
const headerMiniQuery = window.matchMedia("(max-width: 335px)");
;
// Header start //


let header = document.createElement("header");


  // let lastScrollY = 0;
  function responsiveHeader(e) {
    if (e.matches) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY  > 100) {
        header.style.cssText =
        "padding: 0 16px; background-color: rgb(110 110 24 / 36%); backdrop-filter: blur(16px); display: flex; align-items: center; justify-content: space-between; height: 68px; width: 95%; border-radius: 50px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); position: fixed; top: 25px; left: 9px; z-index: 1000; transition: .3s;";
        } else {
          header.style.cssText = "padding: 0px 16px; backdrop-filter: blur(16px); display: flex; align-items: center; justify-content: space-between; height: 68px; width: 100%; border-radius: 0px 0px 12px 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); position: fixed; top: 0px; left: 0px; z-index: 1000; transition: .3s; background-color: white;";
        } 
        // lastScrollY = scrollY;
      });
    }
  }
  responsiveHeader(headerMiniQuery);
  headerMiniQuery.addEventListener("change", responsiveHeader);


let div = document.createElement("div");
div.style.padding = "0px";
div.style.margin = "0px";
header.appendChild(div);
let logoDiv = document.createElement("div");

function responsiveLogoDiv(e) {
  if (e.matches) {
  logoDiv.style.cssText =
  "display: flex; align-items: center; padding-left: 18px; width: max-content; gap: 33px;";
  } else {
  logoDiv.style.cssText =
  "display: flex; align-items: center; padding-left: 18px; width: max-content; gap: 41px;";
  }
}
responsiveLogoDiv(headerMiniQuery);
headerMiniQuery.addEventListener("change", responsiveLogoDiv);

div.appendChild(logoDiv);

let logo = document.createElement("img");
logo.setAttribute("src", "FurnitureLogo.jpeg");
logo.style.cssText =
  "width: 60px; margin-left: 18px; margin-right: 0px; border-radius: 50px";
logoDiv.appendChild(logo);

// Logo Text bar

let SpanText = document.createElement("span");
SpanText.style.alignItems = "center";
logoDiv.appendChild(SpanText);

let aTag = document.createElement("a");
aTag.innerHTML = "DDFurni";
aTag.setAttribute("href", "#");
aTag.style.cssText =
  "text-decoration: none; color: black; font-size: 18px; font-weight: 600;";
SpanText.appendChild(aTag);

const span = document.createElement("span");
span.innerHTML = "sh";
span.style.cssText = "color: #ce871d; font-weight: 700; font-size: 20px;";
aTag.appendChild(span);

// search bar
const searchform = document.createElement("form");
searchform.style.cssText =
  "display: flex; align-items: center; border: 1px solid #ce871d; border-radius: 50px; padding: 7px 8px; margin-right: 18px; background-color: white; width: 40rem; height: 45px; justify-content: space-between; ";
header.appendChild(searchform);

let searchInput = document.createElement("input");
searchInput.placeholder = "search here...";
searchInput.style.cssText =
  "border: none; outline: none; padding: 5px; font-size: 18px; width: 26rem; background-color: transparent;";
searchform.appendChild(searchInput);

let searchIcon = document.createElement("img");
searchIcon.setAttribute("src", "search icon.png");
searchIcon.style.cssText =
  "width: 20px; height: 20px; object-fit: contain; cursor: pointer; margin-right: 6px;";
searchform.appendChild(searchIcon);

// icon bar
let divIcon = document.createElement("div");
divIcon.style.cssText =
  "display: flex; align-items: center; gap: 20px; margin-right: 50px; position: relative;";
header.appendChild(divIcon);

//menu icon
let menuIconDiv = document.createElement("div");
menuIconDiv.style.cssText =
  "width: 30px; cursor: pointer; padding-inline-start: 2px; padding-block-start: 10px;";
divIcon.appendChild(menuIconDiv);

let headerMenuIcon = document.createElement("img");
headerMenuIcon.setAttribute("src", "Menu icon.png");
headerMenuIcon.style.cssText = "width: 20px; margin: 2px;";

headerMenuIcon.addEventListener("mouseover", (event) => {
  headerMenuIcon.style.cssText =
    "width: 20px; margin: 2px; background-color: #ce871d; transform: scale(1.3); transition: transform 0.3s ease; padding: 0px; border-radius: 50%;";
});
headerMenuIcon.addEventListener("mouseout", (event) => {
  headerMenuIcon.style.cssText =
    "width: 20px; margin: 2px; transform: scale(1); transition: transform 0.3s ease; color: transparent;";
});




function getNavbarOpenLeft() {
  if (menuMediaQuery4.matches) {
    return "15%";
  }
  if (menuMediaQuery3.matches) {
    return "49%";
  }
  if (menuMediaQuery2.matches) {
    return "62%";
  }
  if (menuMediaQuery.matches) {
    return "66%";
  }
  return "74%";
}

function openNavbar() {
  if (menuMediaQuery4.matches) {
    navbarSection.style.cssText =
      "position: fixed; top: 111px; width: 248px; height: 72vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 15%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";  
  } else {
    navbarSection.style.cssText =
      "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 121%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";
  }
  setTimeout(() => {
    navbarSection.style.display = "flex";
    navbarSection.style.boxShadow = "0 0 0 80vw rgba(0, 0, 0, 0.5)";
    navbarSection.style.left = getNavbarOpenLeft();
    navbarSection.style.opacity = "1";
    navbarSection.style.pointerEvents = "auto";
  }, 150);

}

headerMenuIcon.addEventListener("click", () => {
  openNavbar();
  closerDiv.style.display = "block";
  closerDiv.appendChild(closerIcon).style.display = "block";
});

menuIconDiv.appendChild(headerMenuIcon);

function applyMenuIconStyle() {
  const shouldShow = headerMediaQuery.matches;
  menuIconDiv.style.display = shouldShow ? "block" : "block";
}

function applyHeaderResponsiveStyle() {
  if (headerMiniQuery.matches) {
    searchform.style.display = "none";
    cartIconDiv.style.display = "none";
    loginIconDiv.style.display = "none";
    cartQuantitySpan.style.display = "none";
    // header.style.cssText =

    div.style.cssText = "padding: 0px; margin: 0px; display: flex; align-items: center; gap: 12px;";
    divIcon.style.cssText = "display: flex; align-items: center; gap: 20px; margin-right: 18px; position: relative;";
    logoDiv.style.cssText += "padding-left: 0px;";
    logo.style.cssText += "margin-left: -12px;";
  } else if (headerMediaQuery.matches) {
    searchform.style.display = "none";
    cartIconDiv.style.display = "flex";
    loginIconDiv.style.display = "flex";
    header.style.cssText =
      "padding: 0 16px; background-color: white; display: flex; align-items: center; justify-content: space-between; height: 90px; width: 100%; border-radius: 0px 0px 20px 20px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); position: fixed; top: 0; left: 0; z-index: 1000; transition: transform 0.3s ease-in-out;";
    div.style.cssText = "padding: 0px; margin: 0px; display: flex; align-items: center; gap: 12px;";
    divIcon.style.cssText = "display: flex; align-items: center; gap: 20px; margin-right: 18px; position: relative;";
    slidesContainer.style.cssText = " height: 93vh; width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 144px;";
  } else {
    searchform.style.display = "flex";
    cartIconDiv.style.display = "flex";
    loginIconDiv.style.display = "flex";
    header.style.cssText =
      "padding: 0px; background-color: white; display: flex; align-items: center; justify-content: space-between; height: 90px; width: 100%; border-radius: 0px 0px 20px 20px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); position: fixed; top: 0; left: 0; z-index: 1000; transition: transform 0.3s ease-in-out;";
    div.style.cssText = "padding: 0px; margin: 0px;";
    divIcon.style.cssText = "display: flex; align-items: center; gap: 20px; margin-right: 50px; position: relative;";
  }
}

menuMediaQuery.addEventListener("change", applyMenuIconStyle);
menuMediaQuery2.addEventListener("change", applyMenuIconStyle);
menuMediaQuery3.addEventListener("change", applyMenuIconStyle);
menuMediaQuery4.addEventListener("change", applyMenuIconStyle);
headerMediaQuery.addEventListener("change", () => {
  applyMenuIconStyle();
  applyHeaderResponsiveStyle();
});
headerMiniQuery.addEventListener("change", applyHeaderResponsiveStyle);



//cart icon
let cartIconDiv = document.createElement("div");
cartIconDiv.style.cssText =
  "width: 30px; cursor: pointer; padding-block-start: 0px; padding-inline-start: 2px; position: relative;";
divIcon.appendChild(cartIconDiv);

let headerCartIcon = document.createElement("img");
headerCartIcon.setAttribute("src", "cart icon.svg");
headerCartIcon.style.width = "25px";

function getCartOpenLeft() {
  if (menuMediaQuery4.matches) {
    return "12%";
  }  
  if (menuMediaQuery3.matches) {
    return "48%";
  }
  if (menuMediaQuery2.matches) {
    return "59%";
  }
  if (menuMediaQuery.matches) {
    return "66%";
  }
  return "74%";
}

function openCart() {
  cartSection.style.cssText =
    "position: fixed; top: 55px; width: 380px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 121%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";

  setTimeout(() => {
    cartSection.style.display = "flex";
    cartSection.style.boxShadow = "0 0 0 80vw rgba(0, 0, 0, 0.5)";
    cartSection.style.left = getCartOpenLeft();
    cartSection.style.opacity = "1";
    cartSection.style.pointerEvents = "auto";
  }, 150);
}

headerCartIcon.addEventListener("click", () => {
  openCart();
});

function updateCartPosition() {
  if (cartSection.style.opacity === "1") {
    cartSection.style.left = getCartOpenLeft();
  }
}

menuMediaQuery.addEventListener("change", updateCartPosition);
menuMediaQuery2.addEventListener("change", updateCartPosition);
menuMediaQuery3.addEventListener("change", updateCartPosition);
menuMediaQuery4.addEventListener("change", updateCartPosition);
window.addEventListener("resize", updateCartPosition);

headerCartIcon.addEventListener("mouseover", () => {
  HeaderHoverStyle(headerCartIcon);
});
headerCartIcon.addEventListener("mouseout", () => {
  headerCartIcon.style.cssText =
    "width: 25px; transform: scale(1); transition: transform 0.3s ease; color: transparent;";
});

cartIconDiv.appendChild(headerCartIcon);
let cartQuantity = 0;
let cartQuantitySpan = document.createElement("div");
cartQuantitySpan.innerHTML = cartQuantity;
cartQuantitySpan.style.cssText = "position: absolute; color: black; border-radius: 50%; width: 15px; height: 15px; background-color: red; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: 600; right: 44px; top: 6px; display: none;"
divIcon.appendChild(cartQuantitySpan);

// login icon
let loginIconDiv = document.createElement("div");
loginIconDiv.style.cssText =
  "width: 30px; cursor: pointer; padding-block-start: 0px; padding-inline-start: 1.5px;";
divIcon.appendChild(loginIconDiv);

let headerLoginIcon = document.createElement("img");
headerLoginIcon.setAttribute("src", "loginUser icon.png");
headerLoginIcon.style.width = "25px";

headerLoginIcon.addEventListener("mouseover", () => {
  HeaderHoverStyle(headerLoginIcon);
});
headerLoginIcon.addEventListener("mouseout", () => {
  headerLoginIcon.style.cssText =
    "width: 25px; transform: scale(1); transition: transform 0.3s ease; color: transparent;";
});

function getLoginOpenLeft() {
  if (menuMediaQuery4.matches) {
    return "12%";
  }
  if (menuMediaQuery3.matches) {
    return "53%";
  }
  if (menuMediaQuery2.matches) {
    return "62%";
  }
  if (menuMediaQuery.matches) {
    return "69%";
  }
  return "75%";
}

function openLogin() {
  loginSection.style.cssText =
    "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 121%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";

  setTimeout(() => {
    loginSection.style.display = "flex";
    loginSection.style.boxShadow = "0 0 0 80vw rgba(0, 0, 0, 0.5)";
    loginSection.style.left = getLoginOpenLeft();
    loginSection.style.opacity = "1";
    loginSection.style.pointerEvents = "auto";
    closerDiv.style.display = "block";
    closerIcon.style.display = "block";
  }, 150);
}

headerLoginIcon.addEventListener("click", () => {
  openLogin();
});

function updateLoginPosition() {
  if (loginSection.style.opacity === "1") {
    loginSection.style.left = getLoginOpenLeft();
  }
}

menuMediaQuery.addEventListener("change", updateLoginPosition);
menuMediaQuery2.addEventListener("change", updateLoginPosition);
menuMediaQuery3.addEventListener("change", updateLoginPosition);
menuMediaQuery4.addEventListener("change", updateLoginPosition);
window.addEventListener("resize", updateLoginPosition);

loginIconDiv.appendChild(headerLoginIcon);
applyMenuIconStyle();
applyHeaderResponsiveStyle();
body.appendChild(header);
body.style.paddingTop = "110px";

const heroSectionMediaQuery2 = window.matchMedia("(max-width: 335px)");

let heroSection = document.createElement("section");
heroSection.style.cssText =
  "margin: 0 auto 2rem; max-width: 1180px; padding: 1rem 1.5rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;";

let heroText = document.createElement("div");

function responsiveHeroText(e) {
  if (e.matches) {
    heroText.style.cssText =
  "flex: 1 1 420px; min-width: 293px; display: flex; flex-direction: column; gap: 1rem; margin-left: -16px;";
  } else {
    heroText.style.cssText =
  "flex: 1 1 420px; min-width: 320px; display: flex; flex-direction: column; gap: 1rem;";
  }
}
responsiveHeroText(heroSectionMediaQuery2);
heroSectionMediaQuery2.addEventListener("change", responsiveHeroText);

heroSection.appendChild(heroText);

let heroBadge = document.createElement("span");
heroBadge.innerHTML = "New Arrivals";

  heroBadge.style.cssText =
  "display: inline-block; padding: 0.55rem 1rem; border-radius: 999px; background: rgba(206, 135, 29, 0.12); color: #ce871d; font-weight: 700; font-size: 0.9rem;";

heroText.appendChild(heroBadge);

let heroHeading = document.createElement("h1");
heroHeading.innerHTML =
  "Welcome to DDFurnish — Modern Living Reimagined";
heroHeading.style.cssText =
  "margin: 0; color: #1f1f1f; font-size: clamp(2.5rem, 4vw, 4rem); line-height: 1.04; font-weight: 800;";
heroText.appendChild(heroHeading);

let heroParagraph = document.createElement("p");
heroParagraph.innerHTML =
  "Discover beautifully crafted furniture that blends comfort, function, and modern style. Our curated collection brings warm materials and refined details to every room.";
heroParagraph.style.cssText =
  "margin: 0; color: #4f4f4f; font-size: 1rem; line-height: 1.8; max-width: 680px;";
heroText.appendChild(heroParagraph);

let heroActions = document.createElement("div");
heroActions.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-top: 0.5rem;";
heroText.appendChild(heroActions);

let readMoreBtn = document.createElement("button");
readMoreBtn.innerHTML = "Read More";
readMoreBtn.style.cssText =
  "border: none; background: #ce871d; color: white; padding: 1rem 1.8rem; border-radius: 999px; cursor: pointer; font-size: 1rem; font-weight: 700; box-shadow: 0 18px 40px rgba(206, 135, 29, 0.22); transition: transform 0.2s ease, background 0.2s ease;";
readMoreBtn.addEventListener("mouseover", () => {
  readMoreBtn.style.transform = "scale(1.03)";
  readMoreBtn.style.background = "#b97618";
});
readMoreBtn.addEventListener("mouseout", () => {
  readMoreBtn.style.transform = "scale(1)";
  readMoreBtn.style.background = "#ce871d";
});
heroActions.appendChild(readMoreBtn);

let viewCollectionBtn = document.createElement("button");
viewCollectionBtn.innerHTML = "View Collection";
viewCollectionBtn.style.cssText =
  "border: 1px solid rgba(206, 135, 29, 0.5); background: transparent; color: #222; padding: 1rem 1.8rem; border-radius: 999px; cursor: pointer; font-size: 1rem; font-weight: 700; transition: transform 0.2s ease, background 0.2s ease;";
viewCollectionBtn.addEventListener("mouseover", () => {
  viewCollectionBtn.style.transform = "scale(1.03)";
  viewCollectionBtn.style.background = "rgba(206, 135, 29, 0.1)";
});
viewCollectionBtn.addEventListener("mouseout", () => {
  viewCollectionBtn.style.transform = "scale(1)";
  viewCollectionBtn.style.background = "transparent";
});
heroActions.appendChild(viewCollectionBtn);

let heroImageWrapper = document.createElement("div");

function responsiveHeroImageWrapper(e) {
  if (e.matches) {
    heroImageWrapper.style.cssText =
  "flex: 1 1 420px; min-width: 320px; display: flex; align-items: center; justify-content: center; padding: 1rem; margin-left: -29px;";
  } else {
    heroImageWrapper.style.cssText =
  "flex: 1 1 420px; min-width: 320px; display: flex; align-items: center; justify-content: center; padding: 1rem;";
  }
}
responsiveHeroImageWrapper(heroSectionMediaQuery2);
heroSectionMediaQuery2.addEventListener("change", responsiveHeroImageWrapper);

let heroImage = document.createElement("img");
heroImage.setAttribute("src", "Furniture image 9..png");
heroImage.setAttribute("alt", "Large modern furniture setup");

function responsiveHeroImage(e) {
  if (e.matches) {
    heroImage.style.cssText =
  "width: 100%; max-width: 680px; border-radius: 32px; object-fit: cover; box-shadow: 5px 4px 123px 72px rgba(9, 7, 8, 0.19); background-color: darkgray; margin-top: 47px; margin-bottom: -39px;";
  } else {
    heroImage.style.cssText =
  "width: 100%; max-width: 680px; border-radius: 32px; object-fit: cover; box-shadow: 0 30px 90px rgba(0, 0, 0, 0.14);";
  }
}
responsiveHeroImage(heroSectionMediaQuery2);
heroSectionMediaQuery2.addEventListener("change", responsiveHeroImage);
heroImageWrapper.appendChild(heroImage);

heroSection.appendChild(heroText);
heroSection.appendChild(heroImageWrapper);
body.appendChild(heroSection);




function HeaderHoverStyle(css) {
  css.style.cssText =
    "width: 25px; background-color: #ce871d; transform: scale(1.3); transition: transform 0.3s ease; padding: 0px; border-radius: 50%;";
}
// header end //

// closer btn //
let closerDiv = document.createElement("div");

closerDiv.addEventListener("click", () => {
  
  closerDiv.style.display = "none";

   loginSection.style.cssText = "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 76%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.5); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s; "

  if (menuMediaQuery4.matches) {
    navbarSection.style.cssText =
      "position: fixed; top: 111px; width: 248px; height: 72vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 15%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";
  } else {
    navbarSection.style.cssText =
      "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 200%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: rgba(0, 0, 0, 0.5) 217px 0px 0px 80vw; padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";
  }
  setTimeout(() => {
    navbarSection.style.display = "flex";
    navbarSection.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 0px 80vw";
    navbarSection.style.left = "200%";
    navbarSection.style.opacity = "1";
    navbarSection.style.pointerEvents = "auto";
  }, 150);


  setTimeout(() => {
    loginSection.style.display = "flex";
    loginSection.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.5)"
    loginSection.style.left = "121%";
    loginSection.style.opacity = "1";
    loginSection.style.pointerEvents = "auto";
  }, 100)


  loginInputEmail.style.cssText =
    "padding: 10px; width: 240px; border: 1px solid #ce871d; border-radius: 20px; outline: none;";
  cartSection.style.display = "none";
});

let closerIcon = document.createElement("img");
closerIcon.setAttribute("src", "closer icon.png");
if (menuMediaQuery4.matches) {
  closerIcon.style.cssText = "width: 25px; position: fixed; top: 8.5rem; right: 2rem; cursor: pointer; z-index: 1001; font-size: 5rem; display: none;"
} else {
closerIcon.style.cssText = "width: 25px; position: fixed; top: 6rem; right: 4rem; cursor: pointer; z-index: 1001; font-size: 5rem; display: none;"
}
closerDiv.appendChild(closerIcon);

closerIcon.addEventListener("mouseover", () => {
  const position = getCloserIconPosition();
  closerIcon.style.cssText =
    `width: 25px; position: fixed; top: ${position.top}; right: ${position.right}; cursor: pointer; z-index: 1001; font-size: 5rem; background-color: #ce871d; padding: 0px; border-radius: 50%; display: block;`;
});
closerIcon.addEventListener("mouseout", () => {
  closeIconStyle(closerIcon);
});

function getCloserIconPosition() {
  if (menuMediaQuery4.matches) {
    return { top: "8.5rem", right: "2rem" };
    closerIcon.style.cssText = `width: 25px; position: fixed; top: 8.5rem; right: 2rem; cursor: pointer; z-index: 1001; font-size: 5rem; display: ${closerIcon.style.display === "none" ? "none" : "block"};`;
    // navbarSection.style.cssText =
    //   "position: fixed; top: 111px; width: 248px; height: 72vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 15%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;";
  }
  return { top: "6rem", right: "4rem" };
}

function applyCloserIconStyle() {
  const position = getCloserIconPosition();
  closerIcon.style.cssText =
    `width: 25px; position: fixed; top: ${position.top}; right: ${position.right}; cursor: pointer; z-index: 1001; font-size: 5rem; display: ${closerIcon.style.display === "none" ? "none" : "block"};`;
}

function closeIconStyle(css) {
  const position = getCloserIconPosition();
  css.style.cssText =
    `width: 25px; position: fixed; top: ${position.top}; right: ${position.right}; cursor: pointer; z-index: 1001; font-size: 5rem; display: block;`;
}

body.appendChild(closerDiv);
// closer btn end //

headerMiniQuery.addEventListener("change", applyCloserIconStyle);


// navbar start //
let navbarSection = document.createElement("nav");


navbarSection.style.cssText = "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 200%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;"



// home link
let homeLink = document.createElement("a");
homeLink.innerHTML = "Home";
homeLink.href = "#";
NavbarStyle(homeLink);

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  
  heroSection.style.display = "flex";
  // navbarSection.style.pointerEvents = "auto";
  // navbarSection.style.opacity = "1";
});

homeLink.addEventListener("mouseover", () => {
  NavbarHoverStyle(homeLink);
});
homeLink.addEventListener("mouseout", () => {
  NavbarStyle(homeLink);
});

navbarSection.appendChild(homeLink);


// shop link
let result = false;
let currentShopPage = null;

let shopLink = document.createElement("a");
shopLink.innerHTML = "Shop";
// shopLink.setAttribute("href", `#shop`)
shopLink.href = "#"

shopLink.addEventListener("click", async function (e) {
  e.preventDefault(); // stop reload
  if (result) return;
  heroSection.innerHTML = "";
  HeroSection.style.display = "none";
  shopSection.innerHTML = "";
  heroSection.innerHTML = "";
  footerSection.style.display = "none";

  let shopPage = await createShopPage();
  currentShopPage = shopPage;
  body.appendChild(shopPage);

  setTimeout(() => {
    navbarSection.style.display = "flex";
    navbarSection.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.5)"
    navbarSection.style.left = "121%";
    navbarSection.style.opacity = "1";
    navbarSection.style.pointerEvents = "auto";
    closerDiv.style.display = "none";
  }, 180)
  result = true;
});


shopLink.addEventListener("mouseover", () => {
  NavbarHoverStyle(shopLink);
});
shopLink.addEventListener("mouseout", () => {
  NavbarStyle(shopLink);                                                                                                                                                                                                      
});
                                                                                                          
navbarSection.appendChild(shopLink);                                                                                                                                    

// about link
let aboutLink = document.createElement("a");
aboutLink.innerHTML = "About";
aboutLink.setAttribute("href", "#");
NavbarStyle(aboutLink);

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentShopPage) {
    currentShopPage.style.display = "none";
  }
  aboutSection.style.display = "flex";
  aboutSection.style.pointerEvents = "auto";
  aboutSection.style.opacity = "0";
  setTimeout(() => {
    aboutSection.style.opacity = "1";
  }, 20);

  navbarSection.style.pointerEvents = "none";
  navbarSection.style.opacity = "0.2";
});

aboutLink.addEventListener("mouseover", () => {
  NavbarHoverStyle(aboutLink);
});
aboutLink.addEventListener("mouseout", () => {
  NavbarStyle(aboutLink);
});

navbarSection.appendChild(aboutLink);

// blog link
let blogLink = document.createElement("a");
blogLink.innerHTML = "Blog";
blogLink.setAttribute("href", "#");
NavbarStyle(blogLink);

blogLink.addEventListener("click", (e) => {
  e.preventDefault();
   if (currentShopPage) {
    currentShopPage.style.display = "none";
  }
  blogSection.style.display = "flex";
  blogSection.style.pointerEvents = "auto";
  blogSection.style.opacity = "0";
  setTimeout(() => {
    blogSection.style.opacity = "1";
  }, 20);
  navbarSection.style.pointerEvents = "none";
  navbarSection.style.opacity = "0.2";
});

blogLink.addEventListener("mouseover", () => {
  NavbarHoverStyle(blogLink);
});
blogLink.addEventListener("mouseout", () => {
  NavbarStyle(blogLink);
});

navbarSection.appendChild(blogLink);

// contact link
let contactLink = document.createElement("a");
contactLink.innerHTML = "contact";
contactLink.setAttribute("href", "#");
NavbarStyle(contactLink);

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentShopPage) {
    currentShopPage.style.display = "none";
  }
  contactSection.style.display = "grid";
  contactSection.style.pointerEvents = "auto";
  contactSection.style.opacity = "0";
  setTimeout(() => {
    contactSection.style.opacity = "1";
  }, 20);
  navbarSection.style.pointerEvents = "none";
  navbarSection.style.opacity = "0.2";
});

contactLink.addEventListener("mouseover", () => {
  NavbarHoverStyle(contactLink);
});
contactLink.addEventListener("mouseout", () => {
  NavbarStyle(contactLink);
});

navbarSection.appendChild(contactLink);
body.appendChild(navbarSection);
// navbar end //

// about section overlay
let aboutSection = document.createElement("section");
aboutSection.style.cssText =
  "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(95vw, 820px); max-width: 820px; min-height: 520px; max-height: calc(100vh - 90px); overflow-y: auto; display: none; flex-direction: column; gap: 1.5rem; padding: 1.8rem 2rem; background: rgba(255,255,255,0.97); border-radius: 32px; box-shadow: 0 40px 90px rgba(17, 24, 39, 0.18); border: 1px solid rgba(206, 135, 29, 0.14); z-index: 1100; transition: opacity 0.25s ease, transform 0.25s ease; backdrop-filter: blur(18px);";

let aboutHeader = document.createElement("div");
aboutHeader.style.cssText =
  "display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;";
aboutSection.appendChild(aboutHeader);

let aboutTitle = document.createElement("h2");
aboutTitle.innerHTML = "About DDFurni";
aboutTitle.style.cssText =
  "margin: 0; color: #111; font-size: clamp(2rem, 2.4vw, 2.6rem); font-weight: 800; letter-spacing: -0.04em;";
aboutHeader.appendChild(aboutTitle);

let aboutSubtitle = document.createElement("span");
aboutSubtitle.innerHTML = "Modern furniture that feels warm, polished, and personal.";
aboutSubtitle.style.cssText =
  "color: #6b6b6b; font-size: 0.95rem; max-width: 100%; line-height: 1.7;";
aboutHeader.appendChild(aboutSubtitle);

let aboutClose = document.createElement("button");
aboutClose.innerHTML = "Close";
aboutClose.style.cssText =
  "border: none; background: #ce871d; color: white; padding: 0.85rem 1.45rem; border-radius: 999px; cursor: pointer; font-size: 0.95rem; font-weight: 700; transition: transform 0.2s ease, background 0.2s ease;";
aboutClose.addEventListener("mouseover", () => {
  aboutClose.style.transform = "scale(1.03)";
});
aboutClose.addEventListener("mouseout", () => {
  aboutClose.style.transform = "scale(1)";
});
aboutClose.addEventListener("click", () => {
  aboutSection.style.opacity = "0";
  aboutSection.style.pointerEvents = "none";
  setTimeout(() => {
    aboutSection.style.display = "none";
    if (currentShopPage) {
      currentShopPage.style.display = "flex";
    }
    navbarSection.style.pointerEvents = "auto";
    navbarSection.style.opacity = "1";
  }, 220);
});
aboutHeader.appendChild(aboutClose);

let aboutIntro = document.createElement("p");
aboutIntro.innerHTML =
  "DDFurni brings warm, human-centered design into every room. Our furniture is made to be both beautiful and comfortable, with carefully chosen materials and clean proportions.";
aboutIntro.style.cssText =
  "margin: 0; color: #4d4d4d; font-size: 1rem; line-height: 1.8;";
aboutSection.appendChild(aboutIntro);

let aboutMedia = document.createElement("div");
aboutMedia.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 1.5rem; width: 100%; border-radius: 24px; overflow: hidden; background: rgba(249, 245, 238, 0.93); border: 1px solid rgba(206, 135, 29, 0.12); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.92);";

let aboutImage = document.createElement("img");
aboutImage.src = "Furniture image 7..png";
aboutImage.alt = "Stylish furniture arrangement";
aboutImage.style.cssText =
  "flex: 1 1 320px; min-width: 280px; width: 100%; max-width: 440px; height: 320px; object-fit: cover; display: block;";
aboutImage.onerror = () => {
  aboutImage.src = "Furniture image 8..png";
};
aboutMedia.appendChild(aboutImage);

let aboutTextPanel = document.createElement("div");
aboutTextPanel.style.cssText =
  "flex: 1 1 320px; min-width: 260px; display: flex; flex-direction: column; gap: 1rem; padding: 1.4rem;";

let aboutPanelTitle = document.createElement("h3");
aboutPanelTitle.innerHTML = "Design with intention.";
aboutPanelTitle.style.cssText =
  "margin: 0; font-size: 1.2rem; color: #1f1f1f; font-weight: 700;";
aboutTextPanel.appendChild(aboutPanelTitle);

let aboutPanelCopy = document.createElement("p");
aboutPanelCopy.innerHTML =
  "Each piece in our collection is crafted to feel layered and luminous — soft enough to sit in, bold enough to define a room.";
aboutPanelCopy.style.cssText =
  "margin: 0; color: #555; font-size: 0.98rem; line-height: 1.8;";
aboutTextPanel.appendChild(aboutPanelCopy);

let aboutList = document.createElement("ul");
aboutList.style.cssText =
  "margin: 0; padding: 0; list-style: none; display: grid; gap: 1rem;";

function buildListItem(text) {
  let item = document.createElement("li");
  item.style.cssText =
    "display: flex; align-items: flex-start; gap: 0.75rem; color: #4b4b4b; font-size: 0.95rem; line-height: 1.7;";
  let marker = document.createElement("span");
  marker.innerHTML = "•";
  marker.style.cssText =
    "color: #ce871d; font-size: 1.1rem; line-height: 1; margin-top: 0.15rem;";
  let label = document.createElement("span");
  label.innerHTML = text;
  item.appendChild(marker);
  item.appendChild(label);
  return item;
}

aboutList.appendChild(buildListItem("Layered textures for everyday comfort."));
aboutList.appendChild(buildListItem("Warm wood and soft upholstery."));
aboutList.appendChild(buildListItem("Refined silhouettes with thoughtful detail."));
aboutTextPanel.appendChild(aboutList);

aboutMedia.appendChild(aboutTextPanel);
aboutSection.appendChild(aboutMedia);

let aboutActionRow = document.createElement("div");
aboutActionRow.style.cssText =
  "display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between; width: 100%;";

let aboutReadMoreButton = document.createElement("button");
aboutReadMoreButton.type = "button";
aboutReadMoreButton.innerHTML = "Read More";
aboutReadMoreButton.style.cssText =
  "border: none; background: linear-gradient(90deg, #ce871d, #eea73e); color: #111; padding: 0.95rem 1.6rem; border-radius: 999px; cursor: pointer; font-size: 1rem; font-weight: 700; min-width: 160px; box-shadow: 0 14px 30px rgba(206, 135, 29, 0.24); transition: transform 0.2s ease, background 0.2s ease;";
aboutReadMoreButton.addEventListener("mouseover", () => {
  aboutReadMoreButton.style.transform = "translateY(-2px) scale(1.02)";
});
aboutReadMoreButton.addEventListener("mouseout", () => {
  aboutReadMoreButton.style.transform = "translateY(0) scale(1)";
});
aboutActionRow.appendChild(aboutReadMoreButton);

let aboutSecondaryLink = document.createElement("a");
aboutSecondaryLink.innerHTML = "Visit showroom";
aboutSecondaryLink.href = "#";
aboutSecondaryLink.style.cssText =
  "display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; color: #ce871d; text-decoration: none; font-weight: 700; padding: 0.95rem 1.4rem; border-radius: 999px; background: rgba(206, 135, 29, 0.1); border: 1px solid rgba(206, 135, 29, 0.14);";
aboutActionRow.appendChild(aboutSecondaryLink);

aboutSection.appendChild(aboutActionRow);

let aboutExtraText = document.createElement("p");
aboutExtraText.innerHTML =
  "Our collections are designed to feel aspirational and approachable. Each design is intended to anchor your room while leaving space for your personal style.";
aboutExtraText.style.cssText =
  "margin: 0; color: #5a5a5a; font-size: 1rem; line-height: 1.8; overflow: hidden; max-height: 0px; opacity: 0; transition: max-height 0.4s ease, opacity 0.4s ease;";
aboutSection.appendChild(aboutExtraText);

aboutReadMoreButton.addEventListener("click", () => {
  const isExpanded = aboutExtraText.style.maxHeight !== "0px" && aboutExtraText.style.maxHeight !== "";
  if (isExpanded) {
    aboutExtraText.style.maxHeight = "0px";
    aboutExtraText.style.opacity = "0";
    aboutReadMoreButton.innerHTML = "Read More";
  } else {
    aboutExtraText.style.maxHeight = "220px";
    aboutExtraText.style.opacity = "1";
    aboutReadMoreButton.innerHTML = "Show Less";
  }
});

let aboutGrid = document.createElement("div");
aboutGrid.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;";

function createAboutCard(title, text) {
  let card = document.createElement("div");
  card.style.cssText =
    "padding: 1.2rem; border-radius: 24px; background: rgba(238, 167, 62, 0.09); border: 1px solid rgba(206, 135, 29, 0.14); backdrop-filter: blur(4px);";
  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = title;
  cardTitle.style.cssText = "margin: 0 0 0.6rem; color: #222; font-size: 1.05rem; font-weight: 700;";
  let cardText = document.createElement("p");
  cardText.innerHTML = text;
  cardText.style.cssText = "margin: 0; color: #5d5d5d; font-size: 0.95rem; line-height: 1.65;";
  card.appendChild(cardTitle);
  card.appendChild(cardText);
  return card;
}

aboutGrid.appendChild(
  createAboutCard(
    "Curated Collections",
    "Explore premium furniture collections designed to bring balance, comfort, and contemporary flair to every room."
  )
);
aboutGrid.appendChild(
  createAboutCard(
    "Quality Materials",
    "We blend warm wood finishes, textured fabrics, and modern metal accents for lasting style and comfort."
  )
);
aboutGrid.appendChild(
  createAboutCard(
    "Design Approach",
    "Our focus is on clean lines, layered neutrals, and thoughtful details that make each piece feel inviting and refined."
  )
);
aboutSection.appendChild(aboutGrid);
body.appendChild(aboutSection);

readMoreBtn.addEventListener("click", () => {
  aboutSection.style.display = "flex";
  aboutSection.style.pointerEvents = "auto";
  aboutSection.style.opacity = "0";
  setTimeout(() => {
    aboutSection.style.opacity = "1";
  }, 20);
  navbarSection.style.pointerEvents = "none";
  navbarSection.style.opacity = "0.2";
});

// blog section overlay

 const blogSectionMiniMediaQuery = window.matchMedia("(max-width: 335px)");

let blogSection = document.createElement("section");
blogSection.style.cssText =
  "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(98vw, 980px); max-width: 980px; max-height: calc(100vh - 90px); overflow-y: auto; display: none; flex-direction: column; gap: 1.5rem; padding: 2rem 2.2rem; background: rgba(255,255,255,0.98); border-radius: 32px; box-shadow: 0 40px 120px rgba(17, 24, 39, 0.18); border: 1px solid rgba(206, 135, 29, 0.14); z-index: 1100; transition: opacity 0.25s ease, transform 0.25s ease; backdrop-filter: blur(20px);";

let blogHeader = document.createElement("div");
blogHeader.style.cssText =
  "display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem;";

let blogTitle = document.createElement("h2");
blogTitle.innerHTML = "From the DDFurni Journal";

function responsiveBlogTitle(e) {
  if (e.matches) {
    blogTitle.style.cssText =
  "margin: 0; color: #111; font-size: 1.6rem; font-weight: 800; line-height: 1.05;";
  } else {
    blogTitle.style.cssText =
  "margin: 0; color: #111; font-size: clamp(2rem, 2.4vw, 2.8rem); font-weight: 800; line-height: 1.05;";
  }
}
responsiveBlogTitle(blogSectionMiniMediaQuery);
blogSectionMiniMediaQuery.addEventListener("change", responsiveBlogTitle);

blogHeader.appendChild(blogTitle);

let blogIntro = document.createElement("p");
blogIntro.innerHTML =
  "Designed for interiors that feel personal, our latest stories cover modern living, styling tips, and furniture moments worth sharing.";

  function responsiveBlogIntro(e) {
    if (e.matches) {
      blogIntro.style.cssText =
  "margin: 0; color: #5d5d5d; font-size: 0.9rem; max-width: 560px; line-height: 1.8;";
    } else {
      blogIntro.style.cssText =
  "margin: 0; color: #5d5d5d; font-size: 1rem; max-width: 560px; line-height: 1.8;";
    }
  }
  responsiveBlogIntro(blogSectionMiniMediaQuery);
  blogSectionMiniMediaQuery.addEventListener("change", responsiveBlogIntro);

blogHeader.appendChild(blogIntro);

let blogClose = document.createElement("button");
blogClose.innerHTML = "Close";
blogClose.style.cssText =
  "border: none; background: #ce871d; color: white; padding: 0.95rem 1.6rem; border-radius: 999px; cursor: pointer; font-size: 0.95rem; font-weight: 700; transition: transform 0.2s ease, background 0.2s ease;";
blogClose.addEventListener("mouseover", () => {
  blogClose.style.transform = "scale(1.03)";
});
blogClose.addEventListener("mouseout", () => {
  blogClose.style.transform = "scale(1)";
});
blogClose.addEventListener("click", () => {
  blogSection.style.opacity = "0";
  blogSection.style.pointerEvents = "none";
  setTimeout(() => {
    blogSection.style.display = "none";
    if (currentShopPage) {
      currentShopPage.style.display = "flex";
    }
    navbarSection.style.pointerEvents = "auto";
    navbarSection.style.opacity = "1";
  }, 220);
});
blogHeader.appendChild(blogClose);

blogSection.appendChild(blogHeader);

let blogGrid = document.createElement("div");
blogGrid.style.cssText =
  "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; width: 100%; align-items: stretch;";

function createBlogCard(title, subtitle, category, date, imageSrc) {
  let card = document.createElement("article");

  function responsiveBlogCardStyle(e) {
    if (e.matches) {
      card.style.cssText =
    "background: linear-gradient(180deg, #fff 0%, #f8f1e7 100%); border-radius: 28px; box-shadow: 0 24px 64px rgba(17, 24, 39, 0.1); display: flex; flex-direction: column; gap: 1rem; border: 1px solid rgba(206, 135, 29, 0.12); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; height: 100%; width: 97%; margin-left: -21px;";
    } else {
      card.style.cssText =
    "background: linear-gradient(180deg, #fff 0%, #f8f1e7 100%); border-radius: 28px; box-shadow: 0 24px 64px rgba(17, 24, 39, 0.1); display: flex; flex-direction: column; gap: 1rem; border: 1px solid rgba(206, 135, 29, 0.12); overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; height: 100%;";
    }
  }
  responsiveBlogCardStyle(blogSectionMiniMediaQuery);
  blogSectionMiniMediaQuery.addEventListener("change", responsiveBlogCardStyle);

  card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-6px)";
    card.style.boxShadow = "0 32px 80px rgba(17, 24, 39, 0.14)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 24px 64px rgba(17, 24, 39, 0.1)";
  });

  let imageWrapper = document.createElement("div");
  imageWrapper.style.cssText =
    "width: 100%; min-height: 220px; overflow: hidden; background: #f3ebe0; display: block;";
  let cardImage = document.createElement("img");
  cardImage.src = imageSrc;
  cardImage.alt = title;
  cardImage.style.cssText =
    "width: 100%; min-height: 220px; object-fit: cover; transition: transform 0.4s ease; display: block;";
  card.addEventListener("mouseover", () => {
    cardImage.style.transform = "scale(1.06)";
  });
  card.addEventListener("mouseout", () => {
    cardImage.style.transform = "scale(1)";
  });
  imageWrapper.appendChild(cardImage);

  let contentWrap = document.createElement("div");
  contentWrap.style.cssText = "display: flex; flex-direction: column; gap: 1rem; padding: 1.5rem 1.6rem 1.8rem; flex: 1;";

  let meta = document.createElement("div");
  meta.style.cssText =
    "display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;";
  let tag = document.createElement("span");
  tag.innerHTML = category;
  tag.style.cssText =
    "color: #ce871d; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;";
  let dateLabel = document.createElement("span");
  dateLabel.innerHTML = date;
  dateLabel.style.cssText = "color: #777; font-size: 0.85rem;";
  meta.appendChild(tag);
  meta.appendChild(dateLabel);

  let cardTitle = document.createElement("h3");
  cardTitle.innerHTML = title;
  cardTitle.style.cssText = "margin: 0; font-size: 1.45rem; color: #111; line-height: 1.2;";

  let cardText = document.createElement("p");
  cardText.innerHTML = subtitle;
  cardText.style.cssText = "margin: 0; color: #555; font-size: 1rem; line-height: 1.75;";

  let cardLink = document.createElement("a");
  cardLink.innerHTML = "Read story";
  cardLink.href = "#";
  cardLink.style.cssText =
    "color: #ce871d; text-decoration: none; font-weight: 700; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 0.35rem;";

  contentWrap.appendChild(meta);
  contentWrap.appendChild(cardTitle);
  contentWrap.appendChild(cardText);
  contentWrap.appendChild(cardLink);

  card.appendChild(imageWrapper);
  card.appendChild(contentWrap);
  return card;
}

blogGrid.appendChild(
  createBlogCard(
    "Layered Living Spaces for Every Season",
    "How to build furniture arrangements that feel light, warm, and effortless throughout the year.",
    "Interiors",
    "May 2026",
    "images/blog image 1.png"
  )
);
blogGrid.appendChild(
  createBlogCard(
    "Design Rules for Small Rooms",
    "Practical styling tips for making compact spaces feel sophisticated and spacious.",
    "Styling",
    "April 2026",
    "images/blog image 2.png"
  )
);
blogGrid.appendChild(
  createBlogCard(
    "Materials That Make a Home",
    "Why texture, finish, and tone are the quiet heroes of modern furniture design.",
    "Materials",
    "March 2026",
    "images/Wooden image 1..png"
  )
);

blogSection.appendChild(blogGrid);
body.appendChild(blogSection);

// blog section end //



// contact section start // 

const contactMiniMediaQuery = window.matchMedia("(max-width: 335px)");

let contactSection = document.createElement("section");
contactSection.id = "contactSection";

function responsiveContactStyle (e) {
  if (e.matches) {
    contactSection.style.cssText =
  "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(98vw, 1180px); max-height: calc(100vh - 91px); overflow-y: auto; display: none; gap: 2rem; align-items: start; padding: 2rem 1.5rem; background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,241,231,1) 100%); border-radius: 36px; box-shadow: 0 40px 90px rgba(17, 24, 39, 0.18); border: 1px solid rgba(206, 135, 29, 0.14); z-index: 1100; transition: opacity 0.25s ease, transform 0.25s ease; backdrop-filter: blur(12px);";
  } else {
    contactSection.style.cssText =
  "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: min(98vw, 1180px); max-height: calc(100vh - 91px); overflow-y: auto; display: none; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; align-items: start; padding: 2rem 1.5rem; background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,241,231,1) 100%); border-radius: 36px; box-shadow: 0 40px 90px rgba(17, 24, 39, 0.18); border: 1px solid rgba(206, 135, 29, 0.14); z-index: 1100; transition: opacity 0.25s ease, transform 0.25s ease; backdrop-filter: blur(12px);";
  }
}
responsiveContactStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveContactStyle);


let contactCard = document.createElement("div");
contactCard.style.cssText =
  "display: flex; flex-direction: column; gap: 1.5rem; padding: 2rem; background: rgba(255,255,255,0.95); border-radius: 32px; border: 1px solid rgba(206, 135, 29, 0.1); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.8);";

let contactHeading = document.createElement("div");
contactHeading.style.cssText = "display: flex; flex-direction: column; gap: 0.8rem";
let contactTitle = document.createElement("h2");
contactTitle.innerHTML = "Get in touch";

function responsiveContactTitleStyle (e) {
  if (e.matches) {
    contactTitle.style.cssText =
  "margin: 0; font-size: 1.9rem; color: #111; font-weight: 800;";
  } else {
    contactTitle.style.cssText =
  "margin: 0; font-size: clamp(2rem, 3vw, 2.6rem); color: #111; font-weight: 800;";
  }
}
responsiveContactTitleStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveContactTitleStyle);

let contactSubtitle = document.createElement("p");
contactSubtitle.innerHTML = "Have a project in mind? Send us a message or book a showroom visit — we’ll respond within one business day.";

function responsiveContactSubtitleStyle (e) {
  if (e.matches) {
  contactSubtitle.style.cssText =
  "margin: 0; color: #565656; line-height: 1.8; font-size: 0.9rem;";
  } else {
  contactSubtitle.style.cssText =
  "margin: 0; color: #565656; line-height: 1.8; font-size: 1rem;";
  }
}
responsiveContactSubtitleStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveContactSubtitleStyle);

contactHeading.appendChild(contactTitle);
contactHeading.appendChild(contactSubtitle);
let contactClose = document.createElement("button");
contactClose.innerHTML = "Close";
contactClose.style.cssText =
  "align-self: flex-start; border: none; background: #ce871d; color: white; padding: 0.9rem 1.3rem; border-radius: 999px; cursor: pointer; font-weight: 700; transition: transform 0.2s ease, box-shadow 0.2s ease;";
contactClose.addEventListener("mouseover", () => {
  contactClose.style.transform = "scale(1.07)";
});
contactClose.addEventListener("mouseout", () => {
  contactClose.style.transform = "scale(1)";
});
contactClose.addEventListener("click", () => {
  contactSection.style.opacity = "0";
  contactSection.style.pointerEvents = "none";
  setTimeout(() => {
    contactSection.style.display = "none";
    if (currentShopPage) {
      currentShopPage.style.display = "flex";
    }
    navbarSection.style.pointerEvents = "auto";
    navbarSection.style.opacity = "1";
  }, 220);
});
contactHeading.appendChild(contactClose);
contactCard.appendChild(contactHeading);

function ContactField(labelText, type, name, placeholder) {
  let field = document.createElement("div");
  field.style.cssText = "display: flex; flex-direction: column; gap: 0.55rem;";
  let label = document.createElement("label");
  label.innerHTML = labelText;
  label.style.cssText = "font-size: 0.95rem; font-weight: 700; color: #333;";
  let input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  input.required = true;
  input.style.cssText =
    "width: 100%; padding: 1rem 1.2rem; border-radius: 18px; border: 1px solid rgba(206, 135, 29, 0.2); background: #fff; font-size: 1rem; color: #111; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease;";
  input.addEventListener("focus", () => {
    input.style.borderColor = "#ce871d";
    input.style.boxShadow = "0 0 0 4px rgba(206, 135, 29, 0.1)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "rgba(206, 135, 29, 0.2)";
    input.style.boxShadow = "none";
  });
  field.appendChild(label);
  field.appendChild(input);
  return field;
}

let contactForm = document.createElement("form");


contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
    contactForm.reset();
  }
)

function responsiveFormStyle (e) {
  if (e.matches) {
    contactForm.style.cssText =
  "display: grid; gap: 1rem;";
  } else {
    contactForm.style.cssText =
  "display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;";
  }
}
responsiveFormStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveFormStyle);


contactForm.appendChild(ContactField("Your name", "text", "name", "Enter your name"));
contactForm.appendChild(ContactField("Email address", "email", "email", "Enter your email"));
contactForm.appendChild(ContactField("Subject", "text", "subject", "Project details"));
let messageField = ContactField("Message", "text", "message", "Tell us about your request");
let messageTextarea = document.createElement("textarea");
messageTextarea.name = "message";
messageTextarea.placeholder = "Tell us about your request";
messageTextarea.required = true;
messageTextarea.style.cssText =
  "width: 100%; min-height: 160px; padding: 1rem 1.2rem; border-radius: 18px; border: 1px solid rgba(206, 135, 29, 0.2); background: #fff; font-size: 1rem; color: #111; resize: vertical; outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease;";
messageTextarea.addEventListener("focus", () => {
  messageTextarea.style.borderColor = "#ce871d";
  messageTextarea.style.boxShadow = "0 0 0 4px rgba(206, 135, 29, 0.1)";
});
messageTextarea.addEventListener("blur", () => {
  messageTextarea.style.borderColor = "rgba(206, 135, 29, 0.2)";
  messageTextarea.style.boxShadow = "none";
});
messageField.removeChild(messageField.lastChild);
messageField.appendChild(messageTextarea);
messageField.style.gridColumn = "1 / -1";
contactForm.appendChild(messageField);

let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerHTML = "Send message";
submitButton.style.cssText =
  "grid-column: 1 / -1; padding: 1rem 1.6rem; border-radius: 999px; border: none; background: linear-gradient(90deg, #ce871d, #eea73e); color: #111; font-size: 1rem; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;";
submitButton.addEventListener("mouseover", () => {
  submitButton.style.transform = "translateY(-2px)";
  submitButton.style.boxShadow = "0 18px 30px rgba(206, 135, 29, 0.2)";
});
submitButton.addEventListener("mouseout", () => {
  submitButton.style.transform = "translateY(0)";
  submitButton.style.boxShadow = "none";
});
contactForm.appendChild(submitButton);

contactCard.appendChild(contactForm);

let contactDetails = document.createElement("div");

function responsiveDetailsStyle (e) {
  if (e.matches) {
    contactDetails.style.cssText =
  "display: grid; gap: 1rem;";
  } else {
    contactDetails.style.cssText =
  "display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;";
  }
} 
responsiveDetailsStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveDetailsStyle);

function infoCard(icon, label, value) {
  let box = document.createElement("div");
  box.style.cssText =
    "padding: 1rem 1.2rem; border-radius: 22px; background: #fff; border: 1px solid rgba(206, 135, 29, 0.12); box-shadow: 0 16px 30px rgba(17, 24, 39, 0.05); display: flex; flex-direction: column; gap: 0.5rem;";
  let iconTag = document.createElement("span");
  iconTag.innerHTML = icon;
  iconTag.style.cssText =
    "display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 16px; background: rgba(206, 135, 29, 0.1); color: #ce871d; font-size: 1.1rem;";
  let labelTag = document.createElement("span");
  labelTag.innerHTML = label;
  labelTag.style.cssText = "font-size: 0.85rem; font-weight: 700; color: #777; text-transform: uppercase; letter-spacing: 0.08em;";
  let valueTag = document.createElement("span");
  valueTag.innerHTML = value;
  valueTag.style.cssText = "font-size: 0.98rem; color: #222; line-height: 1.6;";
  box.appendChild(iconTag);
  box.appendChild(labelTag);
  box.appendChild(valueTag);
  return box;
}
contactDetails.appendChild(
  infoCard("📍", "Visit us", "123 Modern Ave, Studio 4B\nCity Center, CA 90210")
);
contactDetails.appendChild(
  infoCard("✉️", "Email", "hello@ddfurni.com")
);
contactDetails.appendChild(
  infoCard("📞", "Call", "+1 800 123 4567")
);
contactDetails.appendChild(
  infoCard("⏰", "Hours", "Mon – Fri: 9am – 6pm\nSat: 10am – 4pm")
);
contactCard.appendChild(contactDetails);

contactSection.appendChild(contactCard);

let mapCard = document.createElement("div");
mapCard.style.cssText =
  "display: flex; flex-direction: column; gap: 1.5rem; min-height: 100%; padding: 1rem;";
let mapTitle = document.createElement("div");
mapTitle.style.cssText = "display: flex; flex-direction: column; gap: 0.6rem;";
let mapCardHeading = document.createElement("h2");
mapCardHeading.innerHTML = "Find us on the map";

function responsiveMapHeadingStyle (e) {
  if (e.matches) {
    mapCardHeading.style.cssText =
  "margin: 0; font-size: 1.4rem; color: #111; font-weight: 800;";
  } else {
    mapCardHeading.style.cssText =
  "margin: 0; font-size: clamp(1.8rem, 2.4vw, 2.4rem); color: #111; font-weight: 800;";
  }
}
responsiveMapHeadingStyle(contactMiniMediaQuery);
contactMiniMediaQuery.addEventListener("change", responsiveMapHeadingStyle);

let mapDescription = document.createElement("p");
mapDescription.innerHTML =
  "Our showroom and design studio are easy to reach — explore the neighborhood and plan your visit.";

  function responsiveMapDescriptionStyle (e) {
    if (e.matches) {
      mapDescription.style.cssText =
     "margin: 0; color: #565656; line-height: 1.8; font-size: 0.9rem;";
    } else {
      mapDescription.style.cssText =
     "margin: 0; color: #565656; line-height: 1.8; font-size: 0.9rem;";
    }
  }
  responsiveMapDescriptionStyle(contactMiniMediaQuery);
  contactMiniMediaQuery.addEventListener("change", responsiveMapDescriptionStyle);

mapTitle.appendChild(mapCardHeading);
mapTitle.appendChild(mapDescription);
mapCard.appendChild(mapTitle);

let mapFrame = document.createElement("iframe");
mapFrame.src =
  "https://maps.google.com/maps?q=modern%20furniture%20studio&t=&z=13&ie=UTF8&iwloc=&output=embed";
mapFrame.style.cssText =
  "width: 100%; min-height: 520px; border: 0; border-radius: 28px; box-shadow: 0 24px 60px rgba(17, 24, 39, 0.12);";
mapFrame.loading = "lazy";
mapFrame.allowFullscreen = true;
mapCard.appendChild(mapFrame);

contactSection.appendChild(mapCard);
body.appendChild(contactSection);


function NavbarStyle(css) {
  css.style.cssText =
    "text-decoration: none; color: #ce871d; font-size: 20px; font-weight: 600;";
}
function NavbarHoverStyle(css) {
  css.style.cssText =
    "text-decoration: none; color: #eea73e;  font-size: 20px; font-weight: 600; padding: 0px;";
}
// navbar end //

// login section start //
let loginSection = document.createElement("div");
loginSection.style.cssText = "position: fixed; top: 55px; width: 340px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 121%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;" 

let loginForm = document.createElement("form");
loginForm.style.cssText =
  "display: flex; flex-direction: column; align-items: start; gap: 15px; border: rgb(233 174 87) 1px solid; border-radius: 30px; padding: 20px;";
loginSection.appendChild(loginForm);

let loginHeading = document.createElement("h3");
loginHeading.innerHTML = "Login Form";
loginHeading.style.cssText =
  "font-size: 24px; font-weight: 600; color: #ce871d;";
loginForm.appendChild(loginHeading);

//login form Email
let EmailBox = document.createElement("div");
EmailBox.style.cssText = "width: 100%; position: relative;";
loginForm.appendChild(EmailBox);

let loginInputEmail = document.createElement("input");
LoginFormInputStyle(loginInputEmail);
EmailBox.appendChild(loginInputEmail);

let loginEmailLable = document.createElement("label");
loginEmailLable.innerHTML = "Email";
LoginFormLabelStyle(loginEmailLable);

loginInputEmail.addEventListener("focus", () => {
  let label = loginInputEmail.nextElementSibling;
  LoginFormFocusStyle(label);
});
loginInputEmail.addEventListener("blur", () => {
  let label = loginInputEmail.nextElementSibling;
  LoginFormLabelStyle(label);
});

EmailBox.appendChild(loginEmailLable);

//login form password
let PasswordBox = document.createElement("div");
PasswordBox.style.cssText = "width: 100%; position: relative;";
loginForm.appendChild(PasswordBox);

let loginInputPassword = document.createElement("input");
loginInputPassword.type = "Password";
loginInputPassword.required = "true";
loginInputPassword.autocomplete = "off";
LoginFormInputStyle(loginInputPassword);
PasswordBox.appendChild(loginInputPassword);

let loginPasswordLabel = document.createElement("label");
loginPasswordLabel.innerHTML = "Password";
LoginFormLabelStyle(loginPasswordLabel);

loginInputPassword.addEventListener("focus", () => {
  let label = loginInputPassword.nextElementSibling;
  LoginFormFocusStyle(label);
});
loginInputPassword.addEventListener("blur", () => {
  let label = loginInputPassword.nextElementSibling;
  LoginFormLabelStyle(label);
});

PasswordBox.appendChild(loginPasswordLabel);

function LoginFormInputStyle(css) {
  css.style.cssText =
    "padding: 10px; width: 240px; border: 1px solid #ce871d; border-radius: 20px; outline: none;";
}

function LoginFormLabelStyle(css) {
  css.style.cssText =
    "position: absolute; top: 20px; left: 13px; font-size: 13px; font-weight: 500; transition: .5s ease; background-color: white; z-index: -1px; padding: 0; margin: 0; transform: translateY(-50%);";
}

function LoginFormFocusStyle(css) {
  css.style.cssText =
    "position: absolute; top: 1px; left: 13px; font-size: 13px; font-weight: 500; transition: .5s; background-color: white; z-index: -1px; padding: 0; margin: 0; transform: translateY(-50%);";
}

let loginDiv = document.createElement("div");
loginDiv.style.cssText =
  "display: flex; align-items: center; gap: 10px; margin-left: 4px";
loginForm.appendChild(loginDiv);

let loginInputCheckbox = document.createElement("input");
loginInputCheckbox.type = "checkbox";
loginDiv.appendChild(loginInputCheckbox);

let loginLabelCheckbox = document.createElement("label");
loginLabelCheckbox.innerHTML = "Remember me";
loginLabelCheckbox.style.cssText = "font-size: 14px; color: #ce871d;";
loginDiv.appendChild(loginLabelCheckbox);

let loginInputSubmit = document.createElement("input");
loginInputSubmit.type = "submit";
loginInputSubmit.value = "Login";
loginInputSubmit.style.cssText =
  "padding: 10px 46px; background-color: #eea73e; color: white; border: none; border-radius: 20px; cursor: pointer; box-shadow: 0 18px 40px rgba(238, 56%, 56%, .4); overflow: hidden; font-size: 15px; width: 100%;";

loginInputSubmit.addEventListener("click", () => {
  loginInputSubmit.style.cssText =
    "padding: 10px 56px; background-color: #eea73e; color: white; border: none; cursor: pointer; transition: all 0.2s ease; overflow: hidden; font-size: 15px; width:100%;";
});

loginInputSubmit.addEventListener("mouseover", () => {
  loginInputSubmit.style.cssText =
    "padding: 10px 46px; background-color: #ce871d; color: white; border: none; border-radius: 20px; cursor: pointer; box-shadow: 0 18px 40px rgba(238, 56%, 56%, .4); overflow: hidden; font-size: 15px; width: 100%;";
});
loginInputSubmit.addEventListener("mouseout", () => {
  loginInputSubmit.style.cssText =
    "padding: 10px 46px; background-color: #eea73e; color: white; border: none; border-radius: 20px; cursor: pointer; box-shadow: 0 18px 40px rgba(238, 56%, 56%, .4); overflow: hidden; font-size: 15px; width: 100%;";
});

loginForm.appendChild(loginInputSubmit);

let loginPText1 = document.createElement("p");
LoginLinkHTML(loginPText1, "forget password");
loginForm.appendChild(loginPText1);

let loginAlink1 = document.createElement("a");
LoginLink(loginAlink1);
loginPText1.appendChild(loginAlink1);

let loginPText2 = document.createElement("p");
LoginLinkHTML(loginPText2, `don't have an account`);
loginForm.appendChild(loginPText2);

let loginAlink2 = document.createElement("a");
LoginLink(loginAlink2);
loginPText2.appendChild(loginAlink2);

body.appendChild(loginSection);

function LoginLink(cssHTML) {
  cssHTML.setAttribute("href", "#");
  cssHTML.style.cssText = "margin-left: 7px; text-decoration: none;";
  cssHTML.innerHTML = "Click here";
}
function LoginLinkHTML(html, content) {
  html.innerHTML = content;
  html.style.fontSize = "12px";
}
// login section end //


// Hero section start //
const heroSectionMediaQuery = window.matchMedia("(max-width: 335px)");

let HeroSection = document.createElement("section");

function responsiveHeroSection(e) {
  if (e.matches) {
    HeroSection.style.cssText =
  "position: relative; margin: 5%; border-radius: 3rem; background-color: rgb(234 220 198); width: auto; height: 130vh;";
  } else {
    HeroSection.style.cssText =
  "position: relative; margin: 5%; border-radius: 3rem; background-color: rgb(234 220 198); width: auto;";
  }
}

responsiveHeroSection(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroSection(e);
});

let slidesContainer = document.createElement("div");

function responsiveSlidesContainer(e) {
  if (e.matches) {
     slidesContainer.style.cssText =
  "width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 144px;";
  } else {
     slidesContainer.style.cssText =
  " height: 74vh; width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 144px;";
  }
}

responsiveSlidesContainer(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveSlidesContainer(e);
});

HeroSection.appendChild(slidesContainer);


//slide1

let slide = document.createElement("div");

function responsiveSlide1(e) {
  if (e.matches) {
    slide.style.cssText = "display: flex; align-items: center; gap: 1.5rem; width: 69%; flex-direction: column; margin-top: 36px;";
  } else {
    slide.style.cssText = "display: flex; align-items: center; gap: 1.5rem; width: 69%;";
  }
}
responsiveSlide1(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveSlide1(e);
});

slidesContainer.appendChild(slide);

let heroContent = document.createElement("div");
heroContent.style.width = "164%";

function responsiveHeroContent(e) {
  if (e.matches) {
    heroContent.style.cssText = "display: flex; flex-direction: column; align-items: start; gap: 1.5rem; width: 96%; text-align: start; justify-content: start;"; 
  } else {
    heroContent.style.cssText = "width: 164%;";
  }
}

responsiveHeroContent(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroContent(e);
});
slide.appendChild(heroContent);

//span
let contentSpan = document.createElement("span");
contentSpan.innerHTML = "new arrivals";

function responsiveContentSpan(e) {
  if (e.matches) {
    contentSpan.style.cssText = "font-size: 1.6rem; margin-top: 5px; font-family: cursive; margin-left: 15px;"
  } else {
    contentSpan.style.cssText = "font-size: 2.5rem;";
  }
}
responsiveContentSpan(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentSpan(e);
});

heroContent.appendChild(contentSpan);

// h3
let contentH3 = document.createElement("h3");
contentH3.innerHTML = "flexible chair";

function responsiveContentH3(e) {
  if (e.matches) {
    contentH3.style.cssText = "font-size: 2.4rem; color: #ce871d; margin-left: -37px; width: 261px;";
  } else {
    contentH3.style.cssText = "font-size: 5.1rem; color: #ce871d;";
  }
}
responsiveContentH3(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentH3(e);
});
heroContent.appendChild(contentH3);

// p
let contentP = document.createElement("p");
contentP.innerHTML =
  "totally worth it, because fully menufecturing in wooden. and also it is flexible, it is polish, color, design amazing..even it is hard..";

  function responsiveContentP(e) {
    if (e.matches) {
      contentP.style.cssText =
        "margin-left: -36px; font-size: 15px; line-height: 1.6; width: 137%;";
    } else {
      contentP.style.cssText =
  "font-size: 1.1rem; padding: .5rem 0; line-height: 1.8; width: 132%;";
    }
  }
 responsiveContentP(heroSectionMediaQuery);
 heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentP(e);
 });

heroContent.appendChild(contentP);

// a
let rightArrowIcon = document.createElement("img");
rightArrowIcon.setAttribute("src", "right-arrow -con.png");

let contentBtn = document.createElement("a");
contentBtn.setAttribute("href", "#");
contentBtn.setAttribute("src", rightArrowIcon);
contentBtn.innerHTML = `shop now `;
heroContentBtnStyle(contentBtn);

contentBtn.addEventListener("mouseover", () => {
  heroContentBtnHover(contentBtn);
  heroImage1.style.transform = "scale(1.05)";
  heroImage1.style.transition = "transform 0.3s ease";
});
contentBtn.addEventListener("mouseout", () => {
  heroContentBtnStyle(contentBtn);
  heroImage1.style.transform = "scale(1)";
  heroImage1.style.transition = "transform 0.3s ease";
});
heroContent.appendChild(contentBtn);
contentBtn.appendChild(rightArrowIcon);


// image
const heroImageMediaQuery = window.matchMedia("(max-width: 335px)");

let heroImages = document.createElement("div");
slide.appendChild(heroImages);

let heroImage1 = document.createElement("img");
heroImage1.setAttribute("src", "furniture image 2..png");
function responsiveHeroImage3(e) {
  if (e.matches) {
    heroImage1.style.cssText = "width: 78%; margin-top: 89%; margin-left: 15px;";
  } else {
    heroImage1.style.cssText = "padding: 3rem 0; width: 55%; margin-left: 225px;";
  }
}
responsiveHeroImage3(heroImageMediaQuery);
heroImageMediaQuery.addEventListener("change", (e) => {
  responsiveHeroImage3(e);
});
heroImages.appendChild(heroImage1);



// slide2
let slide2 = document.createElement("div");

function responsiveSlide2(e) {
  if (e.matches) {
    slide2.style.cssText = "display: flex; align-items: center; gap: 1.5rem; width: 69%; flex-direction: column; margin-top: 36px; display: none;";
  } else {
    slide2.style.cssText =
  "display: flex; align-items: center; gap: 1.5rem; width: 69%; display: none;";
  }
}
responsiveSlide2(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveSlide2(e);
});

slidesContainer.appendChild(slide2);

let heroContent2 = document.createElement("div");

function responsiveHeroContent2(e) {
  if (e.matches) {
    heroContent2.style.cssText = "display: flex; flex-direction: column; align-items: start; gap: 1.5rem; width: 96%; text-align: start; justify-content: start;"; 
  } else {
    heroContent2.style.cssText = "width: 164%;";
  }
}

responsiveHeroContent2(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroContent2(e);
});

slide2.appendChild(heroContent2);

//span
let contentSpan2 = document.createElement("span");
contentSpan2.innerHTML = "new arrivals";

function responsiveContentSpan2(e) {
  if (e.matches) {
    contentSpan2.style.cssText = "font-size: 1.6rem; margin-top: 5px; font-family: cursive; margin-left: 15px;"
  } else {
    contentSpan2.style.cssText = "font-size: 2.5rem;";
  }
}
responsiveContentSpan2(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentSpan2(e);
});
heroContent2.appendChild(contentSpan2);


// h3
let contentH3Tag2 = document.createElement("h3");
contentH3Tag2.innerHTML = "Moderan Furniture";

function responsiveContentH3Tag2(e) {
  if (e.matches) {
    contentH3Tag2.style.cssText = "font-size: 1.7rem; color: #ce871d; margin-left: -37px; width: 261px;";
  } else {
    contentH3Tag2.style.cssText = "font-size: 5.1rem; color: #ce871d;";
  }
}
responsiveContentH3Tag2(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentH3Tag2(e);
});
heroContent2.appendChild(contentH3Tag2);


// p
let contentPTag2 = document.createElement("p");
contentPTag2.innerHTML =
  "totally worth it, because fully menufecturing in wooden. and also it is flexible, it is polish, color, design amazing..even it is hard..";


    function responsiveContentPTag2(e) {
    if (e.matches) {
      contentPTag2.style.cssText =
        "margin-left: -36px; font-size: 15px; line-height: 1.6; width: 137%;";
    } else {
      contentPTag2.style.cssText =
  "font-size: 1.1rem; padding: .5rem 0; line-height: 1.8; width: 70%;";
    }
  }
 responsiveContentPTag2(heroSectionMediaQuery);
 heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveContentPTag2(e);
 });
heroContent2.appendChild(contentPTag2);


// a
let rightArrowIcon2 = document.createElement("img");
rightArrowIcon2.setAttribute("src", "right-arrow -con.png");

let contentBtn2 = document.createElement("a");
contentBtn2.setAttribute("href", "#");
contentBtn2.setAttribute("src", rightArrowIcon2);
contentBtn2.innerHTML = `shop now `;
heroContentBtnStyle(contentBtn2);

contentBtn2.addEventListener("mouseover", () => {
  heroContentBtnHover(contentBtn2);
  heroImage2.style.transform = "scale(1.05)";
  heroImage2.style.transition = "transform 0.3s ease";
});
contentBtn2.addEventListener("mouseout", () => {
  heroContentBtnStyle(contentBtn2);
  heroImage2.style.transform = "scale(1)";
  heroImage2.style.transition = "transform 0.3s ease";
});
heroContent2.appendChild(contentBtn2);
contentBtn2.appendChild(rightArrowIcon2);

// image
let heroImages2 = document.createElement("div");
slide2.appendChild(heroImages2);

let heroImage2 = document.createElement("img");
heroImage2.setAttribute("src", "Furniture image 8..png");

function responsiveHeroImage2(e) {
  if (e.matches) {
    heroImage2.style.cssText = "width: 113%; margin-top: 103%; margin-left: -15px;";
  } else {
    heroImage2.style.cssText = "padding: 3rem 0; width: 150%;";
  }
}
responsiveHeroImage2(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroImage2(e);
});
heroImages2.appendChild(heroImage2);

// const heroBackButtonMediaQuery = window.matchMedia("(max-width: 335px)");

// hero back button
let heroBackBtn = document.createElement("div");

function responsiveHeroBackButton(e) {
  if (e.matches) {
    heroBackBtn.style.cssText =
      "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; left: 1rem;";
  } else {
    heroBackButtonStyle(heroBackBtn);
  }
}
responsiveHeroBackButton(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroBackButton(e);
});



heroBackBtn.addEventListener("mouseover", () => {
  function responsiveHeroBackButtonHover(e) {
    if (e.matches) {
      heroBackBtn.style.cssText =
    "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: black; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s;  left: 1rem;";
    } else {
      heroBackBtn.style.cssText =
    "position: absolute; top: 50%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: black; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s;  left: 2rem;";
    }
  }
  responsiveHeroBackButtonHover(heroSectionMediaQuery);
  heroSectionMediaQuery.addEventListener("change", (e) => {
    responsiveHeroBackButtonHover(e);
  });
});
heroBackBtn.addEventListener("mouseout", () => {

  function responsiveHeroBackButtonOut(e) {
    if (e.matches) {
       heroBackBtn.style.cssText =
    "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; left: 1rem;";
    } else {
      
      heroBackButtonStyle(heroBackBtn);
    }
  }
  responsiveHeroBackButtonOut(heroSectionMediaQuery);
  heroSectionMediaQuery.addEventListener("change", (e) => {
    responsiveHeroBackButtonOut(e);
  });
});

HeroSection.appendChild(heroBackBtn);

let BackIcon = document.createElement("img");
BackIcon.setAttribute("src", "LeftArrow.png");
BackIcon.style.cssText = "position: absolute; top: 11px; left: 18px";
heroBackBtn.appendChild(BackIcon);

// hero next button
let heroNextBtn = document.createElement("div");

function responsiveHeroNextButton(e) {
  if (e.matches) {
     heroNextBtn.style.cssText =
    "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; right: 1rem;";
  } else {
    heroNextButtonStyle(heroNextBtn);
  }
}
responsiveHeroNextButton(heroSectionMediaQuery);
heroSectionMediaQuery.addEventListener("change", (e) => {
  responsiveHeroNextButton(e);
});

heroNextBtn.addEventListener("mouseover", () => {

  function responsiveHeroNextButtonHover(e) {
    if (e.matches) {
    heroNextBtn.style.cssText =
    "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: black; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s;  right: 1rem;";
    } else {
    heroNextBtn.style.cssText =
    "position: absolute; top: 50%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: black; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s;  right: 2rem;";
    }
  }
  responsiveHeroNextButtonHover(heroSectionMediaQuery);
  heroSectionMediaQuery.addEventListener("change", (e) => {
    responsiveHeroNextButtonHover(e);
  });

});
heroNextBtn.addEventListener("mouseout", () => {

  function responsiveHeroNextButtonOut(e) {
    if (e.matches) {
    heroNextBtn.style.cssText =
    "position: absolute; top: 48%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; right: 1rem;";
    } else {
      heroNextButtonStyle(heroNextBtn);
    }
  }
  responsiveHeroNextButtonOut(heroSectionMediaQuery);
  heroSectionMediaQuery.addEventListener("change", (e) => {
    responsiveHeroNextButtonOut(e);
  });
  
});

HeroSection.appendChild(heroNextBtn);

let NextIcon = document.createElement("img");
NextIcon.setAttribute("src", "RightArrow.png");
NextIcon.style.cssText = "position: absolute; top: 11px; left: 12px;";
heroNextBtn.appendChild(NextIcon);

// next previous button control
let sliders = [slide, slide2];
let currentIndex = 0;

heroBackBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + sliders.length) % sliders.length;
  showSlide(currentIndex);

  heroContent.animate([{ transform: "scale(0.3)" }, { opacity: "2" }], {
    duration: 1000,
    direction: "alternate",
  });

  // contentH3 animation
  contentH3.animate([{ transform: "scale(0.3)" }, { opacity: "2" }], {
    duration: 1500,
    direction: "alternate",
  });
  
  // heroImage animation 
  heroImage2.animate(
    [{ transform: "translateY(-20px)" }, { transform: "translateY(50px)" }],
    {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
    },
  );

  heroContent2.animate(
    [{ transform: "translateX(-90px)" }, { transform: "translateX(0px)" }],
    {
      duration: 1400,
      direction: "alternate",
    },
  );
});

heroNextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % sliders.length;
  showSlide(currentIndex);

  heroContent.animate([{ transform: "scale(0.3)" }, { opacity: "2" }], {
    duration: 1000,
    direction: "alternate",
  });

  // contentH3 animation
  contentH3.animate([{ transform: "scale(0.3)" }, { opacity: "2" }], {
    duration: 1500,
    direction: "alternate",
  });
  
  // heroImage animation 
  heroImage2.animate(
    [{ transform: "translateY(-20px)" }, { transform: "translateY(50px)" }],
    {
      duration: 1500,
      iterations: Infinity,
      direction: "alternate",
    },
  );

  heroContent2.animate(
    [{ transform: "translateX(-90px)" }, { transform: "translateX(0px)" }],
    {
      duration: 1400,
      direction: "alternate",
    },
  );


});


function showSlide(index) {
  sliders.forEach((slide, i) => {
    slide.style.display = i === index ? "flex" : "none";
  });
}

body.appendChild(HeroSection);

function heroContentBtnHover(css) {
  css.style.cssText =
    "background: linear-gradient(90deg, #eea73e, #ce871d); transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.1); display: inline-block; padding: 10px 20px; border-radius: 20px; text-decoration: none; color: black; font-weight: 600; transition: all 0.3s ease; width: fit-content; display: flex; justify-content: center; text-align: center; gap: 5px; ";
}

function heroContentBtnStyle(css) {
  css.style.cssText =
    "display: inline-block; padding: 10px 20px; border-radius: 20px; text-decoration: none; color: black; font-weight: 600; transition: all 0.3s ease; width: fit-content; display:flex; justify-content: center; text-align: center; gap: 5px; background: linear-gradient(90deg, #ce871d, #eea73e);";
}
function heroBackButtonStyle(css) {
  css.style.cssText =
    "position: absolute; top: 50%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; left: 2rem;";
}
function heroNextButtonStyle(css) {
  css.style.cssText =
    "position: absolute; top: 50%; transform: translateY(-50%); height: 4rem; width: 4rem; border-radius: 50%; background: transparent; border: 1px solid transparent; text-align: center; align-items: center; line-height: 5rem; cursor: pointer; transition: .4s; right: 2rem;";
}

// Hero section end //


// Shop section start // 
const shopSectionMediaQuery = window.matchMedia("(max-width: 335px)");
let shopSection = document.createElement("section");

function responsiveShopSection(e) {
  if (e.matches) {
    shopSection.style.cssText = "border-radius: 3rem; overflow: hidden; position: relative; background-color: #f5f5f5; justify-content: space-around; display: grid; grid-template-columns: max-content; gap: 20px; margin-left: -132px;";
  } else {
    shopSection.style.cssText = "margin: 5%; border-radius: 3rem; overflow: hidden; position: relative; background-color: #f5f5f5; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around; gap: 20px;";
  }
}
responsiveShopSection(shopSectionMediaQuery);
shopSectionMediaQuery.addEventListener("change", (e) => {
  responsiveShopSection(e);
});
body.appendChild(shopSection);

// fetch and display products from product.json

// allProducts();
// shopSection.addEventListener("DOMContentLoaded", allProducts);
document.addEventListener("DOMContentLoaded",allProducts);

async function allProducts() {
  try{
    const response = await fetch('product.json');
    const products = await response.json();

    products.forEach(product => {
      let shopBanner = document.createElement("div");
      shopBanner.style.cssText = "position: relative; width: 30%; height: 42vh; overflow: hidden; display: flex; flex-direction: column; align-items: center; text-align: center; padding: 20px;";
      shopSection.appendChild(shopBanner);

      let shopBannerImage = document.createElement("img");
      shopBannerImage.setAttribute("src", product.image);
      shopBannerImage.setAttribute("alt", product.name);

      function responsiveShopBannerImage(e) {
        if (e.matches) {
          shopBannerImage.style.cssText = "width: 29%; object-fit: cover; transition: 0.3s ease; z-index: 1; touch-action: pan-up;"
        } else {
           shopBannerImage.style.cssText = "width: 56%; object-fit: cover; transition: transform 0.3s ease; z-index: 1; touch-action: pan-up;";
        }
      }
      responsiveShopBannerImage(shopSectionMediaQuery);
      shopSectionMediaQuery.addEventListener("change", (e) => {
        responsiveShopBannerImage(e);
      });
     
      shopBanner.appendChild(shopBannerImage);


      let shopBannerContent = document.createElement("div");

      function responsiveShopBannerContent(e) {
        if (e.matches) {
           shopBannerContent.style.cssText = "position: absolute; top: 63%; left: 48.2%; transform: translate(-50%, -50%); text-align: center; color: white; background: rgba(0, 0, 0, 0.6); padding: 20px; border-radius: 20px; max-width: 300px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; transition: .4s ease; z-index: 2;";
        } else {
          shopBannerContent.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white; background: rgba(0, 0, 0, 0.6); padding: 20px; border-radius: 20px; width: 80%; max-width: 300px; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; transition: .4s ease; z-index: 2;";
        }}
        responsiveShopBannerContent(shopSectionMediaQuery);
        shopSectionMediaQuery.addEventListener("change", (e) => {
          responsiveShopBannerContent(e);
        });
        
      shopBanner.appendChild(shopBannerContent);



      let shopBannerSpanName = document.createElement("span");
      shopBannerSpanName.innerHTML = product.name;
      shopBannerSpanName.style.cssText = "display: block; font-size: 1.2rem; font-weight: 700; margin-bottom: 10px;";
      shopBannerContent.appendChild(shopBannerSpanName);

      let shopBannerPriceH3 = document.createElement("h3");
      shopBannerPriceH3.innerHTML = `$${product.price}`;
      shopBannerPriceH3.style.cssText = "font-size: 1.5rem; color: #ce871d; font-weight: 700; margin-bottom: 15px;";
      shopBannerContent.appendChild(shopBannerPriceH3);

     let shopBannerButton = document.createElement("button");
     shopBannerButton.innerHTML = "Shop Now";
     shopBannerButton.style.cssText = "display: inline-block; padding: 10px 20px; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; text-decoration: none; border-radius: 20px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);";

     shopBannerButton.addEventListener("click", () => {
        addToCartItems(product);
        cartTotalQuantity()
     })
     shopBannerButton.addEventListener("mouseover", () => {
     shopBannerButton.style.cssText += " transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.3);";
     function responsiveShopBannerImageHover(e) {
      if (e.matches) {
           shopBannerImage.style.cssText = "position:absolute; top: 15px; width: 29%; object-fit: cover; transition: all 0.3s ease; z-index: 1; touch-action: pan-up; transform: scale(1.3);";
      } else {
         shopBannerImage.style.cssText = "position:absolute; top: -18px; width: 56%; object-fit: cover; transition: all 0.3s ease; z-index: 1; touch-action: pan-up; transform: scale(1.05);";
      }
     }
     responsiveShopBannerImageHover(shopSectionMediaQuery);
     shopSectionMediaQuery.addEventListener("change", (e) => {
      responsiveShopBannerImageHover(e);
     });
    
  });
    shopBannerButton.addEventListener("mouseout", () => {
    shopBannerButton.style.cssText = "display: inline-block; padding: 10px 20px; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; text-decoration: none; border-radius: 20px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);";

    function responsiveShopBannerImageOut(e) {
      if (e.matches) {
        shopBannerImage.style.cssText = "width: 29%; object-fit: cover; transition: all 0.3s ease; z-index: 1; touch-action: pan-up; transform: scale(1);";
      } else {
        shopBannerImage.style.cssText = "width: 56%; object-fit: cover; transition: all 0.3s ease; z-index: 1; touch-action: pan-up; transform: scale(1);";
      }
    }

    responsiveShopBannerImageOut(shopSectionMediaQuery);
    shopSectionMediaQuery.addEventListener("change", (e) => {
      responsiveShopBannerImageOut(e);
     });
    
  });
    shopBannerContent.appendChild(shopBannerButton);
    });
  } catch(error) {
    console.error("Error loading products: ", error);
  }
}

// Shop section end //


// add to cart section //

let cartSection = document.createElement("div");
cartSection.style.cssText = "position: fixed; top: 55px; width: 380px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 121%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;"

body.appendChild(cartSection)

let cartList = document.createElement("div");
cartList.style.cssText = "flex: 1; width: 100%; overflow-y: auto; overflow-x: hidden;"
cartSection.appendChild(cartList);


let cartProduct = []; // cartAddedOnlyOneTIme


function cartTotalQuantity () {
  cartQuantity = cartProduct.length;
  cartQuantitySpan.innerHTML = cartQuantity;
  cartQuantitySpan.style.display = cartQuantity >= 1 ? "flex" : "none";
  return cartQuantity;
};



let quantity = 1;
const addToCartItems = (product) => {
 

  const existingProduct = cartProduct.find(item => item.id === product.id);
  if(existingProduct) {
    alert("Item already in your cart!")
    return;
  }  else {
     cartProduct.push({...product, quantity: 1})
  }

let cartListItems = document.createElement("div");
cartListItems.setAttribute("data-product-id", product.id);
cartListItems.style.cssText = "display: flex; align-items: center; gap: .8rem; padding: .8rem; overflow: auto; border-radius: 10px; transition: all .4s ease-in-out;"

cartListItems.style.cssText = product.id % 2 === 1 ? cartListItems.style.cssText + "background: white;" : cartListItems.style.cssText + "background: black;"

cartList.appendChild(cartListItems);


let cartListItemImage = document.createElement("img");
cartListItemImage.setAttribute("src", product.image) 
cartListItemImage.style.cssText = "width: 5rem;"
cartListItems.appendChild(cartListItemImage);


let cartListItemDiv = document.createElement("div")
cartListItems.appendChild(cartListItemDiv);

let cartListItemDivH4First = document.createElement("h4");
cartListItemDivH4First.innerHTML = product.name
cartListItemDivH4First.style.color = product.id % 2 === 1 ? "black" : "white";

cartListItemDiv.appendChild(cartListItemDivH4First);

let cartListItemDivH4Second = document.createElement("h4");
cartListItemDivH4Second.setAttribute("data-item-price", product.price);
cartListItemDivH4Second.innerHTML = `${product.price}`

cartListItemDivH4Second.style.color = product.id % 2 === 1 ? "black" : "white";

cartListItemDiv.appendChild(cartListItemDivH4Second);
let priceSet = parseFloat(product.price.replace('$', ''));


//Plus Minus Quantity
let cartListPlusMinusQuantity = document.createElement("div");
cartListPlusMinusQuantity.style.cssText = "display: flex; align-item: center; gap: 5px; "
cartListItems.appendChild(cartListPlusMinusQuantity);


let cartListItemMinusIcon = document.createElement("img");
cartListItemMinusIcon.setAttribute("src", "images/Minus Icon.png")
cartListItemMinusIcon.style.cssText = "background: black; width: 1.7rem; aspect-ratio: 1; border-radius: 100vw; text-align: center; line-height: 1.7rem; cursor: pointer;"

cartListItemMinusIcon.style.background = product.id % 2 === 1 ? "black" : "white";

cartListItemMinusIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const cartItem = cartProduct.find(item => item.id === product.id);
  if (!cartItem.payload) return;
  if (cartItem.quantity > 1) {
    cartItem.quantity -= 1;
    cartListItemQuantityValue.innerHTML = cartItem.quantity;
    cartListItemDivH4Second.innerHTML = `$${(priceSet * cartItem.quantity).toFixed(2)}`;
    cartTotalPriceContainer.innerHTML = "$" + updateTotals();
    cartTotalQuantity();
  } else {
    cartListItems.style.cssText += "transform: translateX(100px);";
    setTimeout(() => {
      cartListItems.remove();
      cartProduct = cartProduct.filter(item => item.id !== product.id);
      cartTotalPriceContainer.innerHTML = "$" + updateTotals();
      cartTotalQuantity();
    }, 300);
  }
});

cartListPlusMinusQuantity.appendChild(cartListItemMinusIcon);


let cartListItemQuantityValue = document.createElement("h4");
cartListItemQuantityValue.innerHTML = cartProduct.find(item => item.id === product.id).quantity;
cartListItemQuantityValue.style.cssText = "font-size: 1.2rem; font-weight: 400; margin-inline: .7rem;"

cartListItemQuantityValue.style.color = product.id % 2 === 1 ? "black" : "white";

cartListPlusMinusQuantity.appendChild(cartListItemQuantityValue)



let cartListItemPlusIcon = document.createElement("img");
cartListItemPlusIcon.setAttribute("src", "images/Plus Icon.png")
cartListItemPlusIcon.style.cssText = "background: black; width: 1.7rem; aspect-ratio: 1; border-radius: 100vw; text-align: center; line-height: 1.7rem;  cursor: pointer;"

cartListItemPlusIcon.style.background = product.id % 2 === 1 ? "black" : "white";

cartListItemPlusIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const cartItem = cartProduct.find(item => item.id === product.id);
  if (!cartItem) return;
  cartItem.quantity += 1;
  cartListItemQuantityValue.innerHTML = cartItem.quantity;
  cartListItemDivH4Second.innerHTML = `$${(priceSet * cartItem.quantity).toFixed(2)}`;
  cartTotalPriceContainer.innerHTML = "$" + updateTotals();
  cartTotalQuantity();
});
cartListPlusMinusQuantity.appendChild(cartListItemPlusIcon);
}


//cart container
let cartTotalContainer = document.createElement("div");
cartTotalContainer.style.cssText = "width: 100%; background: #ce871d; text-align: center; margin-block: 1rem; padding-block: 1rem; display: flex; justify-content: center; gap: 10px;"
cartSection.appendChild(cartTotalContainer);

let cartH4Container = document.createElement("h4");
cartH4Container.innerHTML = "Total:"
cartH4Container.style.cssText = "display: inline-block; font-size: 1.3rem; font-weight: 600;"
cartTotalContainer.appendChild(cartH4Container);

const updateTotals = () => {
  let totalPrice = 0;
  cartProduct.forEach(item => {
    const price = parseFloat(item.price.replace('$', ''));
    const quantity = item.quantity || 1;
    totalPrice += price * quantity;
  });
  return totalPrice.toFixed(2);
};

let cartTotalPriceContainer = document.createElement("h4");
cartTotalPriceContainer.innerHTML = "$" + updateTotals();
cartTotalPriceContainer.style.cssText = "display: inline-block; font-size: 1.3rem; font-weight: 600;"
cartTotalContainer.appendChild(cartTotalPriceContainer);

let cartBtnContainer = document.createElement("div");
cartBtnContainer.style.cssText = "display: flex; gap: 15px;"
cartSection.appendChild(cartBtnContainer);

let cartCloseBtn = document.createElement("a");
cartCloseBtn.innerHTML = "close"
cartCloseBtn.style.cssText = "display: inline-block; padding: 10px 20px; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; text-decoration: none; border-radius: 20px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"

cartCloseBtn.addEventListener("click", () => {

   cartSection.style.cssText = "position: fixed; top: 55px; width: 380px; height: 85vh; background-color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; z-index: 1000; margin: 0px; border-radius: 50px; box-align: center; box-orient: vertical; box-direction: wait; flex-flow: column; left: 73%; opacity: 0; pointer-events: none; overflow-x: hidden; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); padding-block: 5rem; transition: left 0.5s ease 0.1s, opacity 0.5s ease 0.1s;"

  setTimeout(() => {
    cartSection.style.display = "flex";
    cartSection.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.5)"
    cartSection.style.left = "121%";
    cartSection.style.opacity = "1";
    cartSection.style.pointerEvents = "auto";
  }, 100)
})

cartCloseBtn.addEventListener("mouseover", () => {
  cartCloseBtn.style.cssText += "transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,0.6);"
})
cartCloseBtn.addEventListener("mouseout", () => {
  cartCloseBtn.style.cssText = "display: inline-block; padding: 10px 20px; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; text-decoration: none; border-radius: 20px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
})
cartBtnContainer.appendChild(cartCloseBtn);

let cartCheckoutBtn = document.createElement("a");
cartCheckoutBtn.innerHTML = "check out"
cartCheckoutBtn.style.cssText = "display: inline-block; padding: 10px 20px; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; text-decoration: none; border-radius: 20px; font-weight: 600; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"

cartCheckoutBtn.addEventListener("mouseover", () => {
  cartCheckoutBtn.style.transform = "translateY(-5px)";
  cartCheckoutBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.6)";
})
cartCheckoutBtn.addEventListener("mouseout", () => {
  cartCheckoutBtn.style.transform = "translateY(0)";
  cartCheckoutBtn.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
})



cartBtnContainer.appendChild(cartCheckoutBtn);


// product shop start //

const productShopSectionMediaQuery = window.matchMedia("(max-width: 335px)");

async function createShopPage() {
  let shopDetails = document.createElement("section");
  shopDetails.style.cssText = "padding: 0px 40px 40px; display: flex; flex-direction: column; gap: 24px;";
  shopDetails.appendChild(createShopTitle());
  shopDetails.appendChild(await shopProducts());
  return shopDetails;
}

function createShopTitle() {
  let shopTitle = document.createElement("div");
  shopTitle.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 12px;";

  let titleText = document.createElement("h1");

  function responsiveShopTitle(e) {
    if (e.matches) {
      titleText.innerHTML = "our products"
      titleText.style.cssText = "font-size: 1.9rem; text-transform: capitalize; margin-bottom: 47px; margin-top: -44px; margin-left: 17px;";
    } else {
       titleText.innerHTML = "our product";
       titleText.style.cssText = "margin: 0; font-size: 2rem; text-transform: capitalize;";
    }
  }
  responsiveShopTitle(productShopSectionMediaQuery);
  productShopSectionMediaQuery.addEventListener("change", (e) => {
    responsiveShopTitle(e);
  });

  shopTitle.appendChild(titleText);

  let shopTitleAnchorTag = document.createElement("a");

  function responsiveShopTitleAnchorTag(e) {
    if (e.matches) {
      shopTitleAnchorTag.innerHTML = "";
      shopTitleAnchorTag.href = "";
    } else {
      shopTitleAnchorTag.innerHTML = "view all";
      shopTitleAnchorTag.href = "#";
      shopTitleAnchorTag.style.cssText = "color: #ce871d; text-decoration: none; font-weight: 600;";
    }
  }
  responsiveShopTitleAnchorTag(productShopSectionMediaQuery);
  productShopSectionMediaQuery.addEventListener("change", (e) => {
    responsiveShopTitleAnchorTag(e);
  });

  shopTitle.appendChild(shopTitleAnchorTag);

  return shopTitle;
}

async function shopProducts() {
  let shopProductBoxContainer = document.createElement("div");
  shopProductBoxContainer.style.cssText = "display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;";

  try {
    let response = await fetch("shopProducts.json");
    let products = await response.json();

    products.forEach(product => {
      let shopProductBox = document.createElement("article");
      shopProductBox.style.cssText = "background: white; border-radius: 20px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); display: flex; flex-direction: column; gap: 18px; position: relative; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;";
      shopProductBoxContainer.appendChild(shopProductBox);

      let shopProductBadge = document.createElement("span");
      shopProductBadge.innerHTML = product.id % 2 === 0 ? "new" : "sale";
      shopProductBadge.style.cssText = "position: absolute; top: 18px; left: 18px; background: linear-gradient(135deg, #ce871d, #eea73e); color: white; padding: 6px 12px; border-radius: 999px; font-size: 0.75rem; letter-spacing: 0.05em; text-transform: uppercase;";
      shopProductBox.appendChild(shopProductBadge);

      let shopProductBoxIcons = document.createElement("div");
      shopProductBoxIcons.style.cssText = "position: absolute; top: 18px; right: 18px; z-index: 2; display: flex; gap: 10px; align-items: center; padding: 10px 12px; border-radius: 18px; background: rgba(255,255,255,0.97); box-shadow: 0 10px 20px rgba(0,0,0,0.08); opacity: 0; visibility: hidden; transition: opacity 0.2s ease, visibility 0.2s ease;";
      shopProductBoxIcons.setAttribute("id", `sym:shopProductBoxIcons-${product.id}`);
      shopProductBoxIcons.setAttribute("data-sym", "shopProductBoxIcons");
      shopProductBox.appendChild(shopProductBoxIcons);

      shopProductBox.addEventListener("mouseover", () => {
        shopProductBoxIcons.style.opacity = "1";
        shopProductBoxIcons.style.visibility = "visible";
        shopProductBox.style.boxShadow = "0 10px 24px rgba(0,0,0,0.16)";
        shopProductBox.style.transform = "translateY(-4px)";
      });
      shopProductBox.addEventListener("mouseout", () => {
        shopProductBoxIcons.style.opacity = "0";
        shopProductBoxIcons.style.visibility = "hidden";
        shopProductBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
        shopProductBox.style.transform = "translateY(0)";
      });

      let shopProductBoxIcon1 = document.createElement("img");
      shopProductBoxIcon1.setAttribute("src", "images/shopping icon.png");
      shopProductBoxIcon1.alt = "shopping";
      shopProductBoxIcon1.style.cssText = "width: 24px; height: 24px; display: block; cursor: pointer;";
      shopProductBoxIcon1.addEventListener("click", (event) => {
        event.stopPropagation();
        addToCartItems(product);
        cartTotalQuantity();
      });
      shopProductBoxIcons.appendChild(shopProductBoxIcon1);

      let shopProductBoxIcon2 = document.createElement("img");
      shopProductBoxIcon2.setAttribute("src", "images/heart icon.png");
      shopProductBoxIcon2.alt = "favorite";
      shopProductBoxIcon2.style.cssText = "width: 24px; height: 24px; display: block; cursor: pointer;";
      shopProductBoxIcon2.addEventListener("click", (event) => {
        event.stopPropagation();
        shopProductBoxIcon2.style.filter = shopProductBoxIcon2.style.filter === "invert(27%) sepia(54%) saturate(3710%) hue-rotate(339deg) brightness(103%) contrast(101%)" ? "none" : "invert(27%) sepia(54%) saturate(3710%) hue-rotate(339deg) brightness(103%) contrast(101%)";
      });
      shopProductBoxIcons.appendChild(shopProductBoxIcon2);

      let shopProductBoxIcon3 = document.createElement("img");
      shopProductBoxIcon3.setAttribute("src", "images/visible icon.png");
      shopProductBoxIcon3.alt = "view";
      shopProductBoxIcon3.style.cssText = "width: 24px; height: 24px; display: block; cursor: pointer;";
      shopProductBoxIcon3.addEventListener("click", (event) => {
        event.stopPropagation();
        alert(`Quick view: ${product.name} — ${product.price}`);
      });
      shopProductBoxIcons.appendChild(shopProductBoxIcon3);

      let shopProductImageContainer = document.createElement("div");
      shopProductImageContainer.style.cssText = "border-radius: 20px; overflow: hidden; background: #f9f9f9;";
      shopProductBox.appendChild(shopProductImageContainer);

      let shopProductImage = document.createElement("img");
      shopProductImage.setAttribute("src", product.image);
      shopProductImage.alt = product.name;
      shopProductImage.style.cssText = "width: 100%; display: block;";
      shopProductImageContainer.appendChild(shopProductImage);

      let shopProductContents = document.createElement("div");
      shopProductContents.style.cssText = "display: flex; flex-direction: column; gap: 8px;";
      shopProductBox.appendChild(shopProductContents);

      let shopProductContentPrice = document.createElement("div");
      shopProductContentPrice.innerHTML = product.price;
      shopProductContentPrice.style.cssText = "font-size: 1.2rem; font-weight: 700; color: #333;";
      shopProductContents.appendChild(shopProductContentPrice);

      let shopProductContentTitle = document.createElement("h3");
      shopProductContentTitle.innerHTML = product.name;
      shopProductContentTitle.style.cssText = "margin: 0; font-size: 1.1rem; text-transform: capitalize;";
      shopProductContents.appendChild(shopProductContentTitle);

      let shopProductActions = document.createElement("div");
      shopProductActions.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 8px;";
      shopProductContents.appendChild(shopProductActions);

      let shopProductAddButton = document.createElement("button");
      shopProductAddButton.innerHTML = "Add to cart";
      shopProductAddButton.style.cssText = "border: none; background: linear-gradient(90deg, #ce871d, #eea73e); color: black; padding: 10px 14px; border-radius: 18px; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;";
      shopProductAddButton.addEventListener("click", (event) => {
        event.stopPropagation();
        addToCartItems(product);
        cartTotalQuantity();
        shopProductAddButton.innerHTML = "Added";
        shopProductAddButton.style.background = "#b38b15";
      });
      shopProductAddButton.addEventListener("mouseover", () => {
        shopProductAddButton.style.transform = "translateY(-1px)";
        shopProductAddButton.style.boxShadow = "0 6px 12px rgba(0,0,0,0.12)";
      });
      shopProductAddButton.addEventListener("mouseout", () => {
        shopProductAddButton.style.transform = "translateY(0)";
        shopProductAddButton.style.boxShadow = "none";
      });
      shopProductActions.appendChild(shopProductAddButton);

      let shopProductRating = document.createElement("span");
      // shopProductRating.innerHTML = "★★★★☆";
      shopProductRating.innerHTML = product.id % 2 === 0 ? "★★★★☆" : "★★★☆☆";

      shopProductRating.style.cssText = "font-size: 0.85rem; color: #ce871d; letter-spacing: 0.05em;";
      shopProductActions.appendChild(shopProductRating);
    });
  } catch (error) {
    console.error("Error loading products: ", error);
  }

  return shopProductBoxContainer;
}
// product shop end // 


// footer section start //
let footerSection = document.createElement("footer");
footerSection.style.cssText =
  "background: radial-gradient(circle at top left, rgba(255,214,121,0.14), transparent 24%), linear-gradient(135deg, #111017 0%, #22140b 55%, #3b2612 100%); color: #fff; padding: 4rem 2rem 2.5rem;";

let footerInner = document.createElement("div");
footerInner.style.cssText =
  "max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem; align-items: start;";

let footerBrand = document.createElement("div");
let footerBrandTitle = document.createElement("h2");
footerBrandTitle.innerHTML = "DDFurni";
footerBrandTitle.style.cssText =
  "margin: 0 0 1rem; font-size: clamp(1.9rem, 3vw, 2.6rem); letter-spacing: 0.08em; text-transform: uppercase; color: #ffe7ab;";
let footerBrandText = document.createElement("p");
footerBrandText.innerHTML =
  "Modern furniture crafted for warm, layered living. Explore design-forward pieces built to make every room feel personal.";
footerBrandText.style.cssText =
  "margin: 0; color: rgba(255,255,255,0.78); line-height: 1.8; font-size: 1rem; max-width: 320px;";
footerBrand.appendChild(footerBrandTitle);
footerBrand.appendChild(footerBrandText);

function createFooterLink(text, href) {
  let link = document.createElement("a");
  link.innerHTML = text;
  link.href = href;
  link.style.cssText =
    "display: block; color: rgba(255,255,255,0.78); text-decoration: none; margin-bottom: 0.85rem; font-size: 0.97rem; transition: color 0.2s ease;";
  link.addEventListener("mouseover", () => {
    link.style.color = "#ffe7ab";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "rgba(255,255,255,0.78)";
  });
  return link;
}

let footerLinks = document.createElement("div");
let footerLinksTitle = document.createElement("h3");
footerLinksTitle.innerHTML = "Explore";
footerLinksTitle.style.cssText =
  "margin: 0 0 1rem; font-size: 1.1rem; color: #fff; letter-spacing: 0.08em; text-transform: uppercase;";
footerLinks.appendChild(footerLinksTitle);
footerLinks.appendChild(createFooterLink("New arrivals", "#"));
footerLinks.appendChild(createFooterLink("Best sellers", "#"));
footerLinks.appendChild(createFooterLink("Journal", "#"));
footerLinks.appendChild(createFooterLink("Showroom", "#"));

let footerSupport = document.createElement("div");
let footerSupportTitle = document.createElement("h3");
footerSupportTitle.innerHTML = "Support";
footerSupportTitle.style.cssText =
  "margin: 0 0 1rem; font-size: 1.1rem; color: #fff; letter-spacing: 0.08em; text-transform: uppercase;";
footerSupport.appendChild(footerSupportTitle);
footerSupport.appendChild(createFooterLink("Contact us", "#contactSection"));
footerSupport.appendChild(createFooterLink("Shipping", "#"));
footerSupport.appendChild(createFooterLink("Returns", "#"));
footerSupport.appendChild(createFooterLink("FAQ", "#"));

let footerSubscribe = document.createElement("div");
let footerSubscribeTitle = document.createElement("h3");
footerSubscribeTitle.innerHTML = "Stay in the loop";
footerSubscribeTitle.style.cssText =
  "margin: 0 0 1rem; font-size: 1.1rem; color: #fff; letter-spacing: 0.02em;";
let footerSubscribeText = document.createElement("p");
footerSubscribeText.innerHTML =
  "Get design notes, collection previews, and special events delivered straight to your inbox.";
footerSubscribeText.style.cssText =
  "margin: 0 0 1.5rem; color: rgba(255,255,255,0.78); line-height: 1.8; font-size: 0.98rem;";
let subscribeForm = document.createElement("form");
subscribeForm.style.cssText =
  "display: grid; gap: 0.85rem;";
let subscribeInput = document.createElement("input");
subscribeInput.type = "email";
subscribeInput.placeholder = "Enter your email";
subscribeInput.style.cssText =
  "width: 100%; padding: 1rem 1.2rem; border-radius: 18px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); color: #fff; outline: none; font-size: 0.98rem;";
let subscribeButton = document.createElement("button");
subscribeButton.type = "submit";
subscribeButton.innerHTML = "Subscribe";
subscribeButton.style.cssText =
  "padding: 1rem 1.4rem; border-radius: 999px; border: none; background: linear-gradient(90deg, #ffe7ab, #ce871d); color: #111; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;";
subscribeButton.addEventListener("mouseover", () => {
  subscribeButton.style.transform = "translateY(-2px)";
  subscribeButton.style.boxShadow = "0 18px 28px rgba(0,0,0,0.15)";
});
subscribeButton.addEventListener("mouseout", () => {
  subscribeButton.style.transform = "translateY(0)";
  subscribeButton.style.boxShadow = "none";
});
subscribeForm.appendChild(subscribeInput);
subscribeForm.appendChild(subscribeButton);
footerSubscribe.appendChild(footerSubscribeTitle);
footerSubscribe.appendChild(footerSubscribeText);
footerSubscribe.appendChild(subscribeForm);

footerInner.appendChild(footerBrand);
footerInner.appendChild(footerLinks);
footerInner.appendChild(footerSupport);
footerInner.appendChild(footerSubscribe);
footerSection.appendChild(footerInner);

let footerBottom = document.createElement("div");
footerBottom.style.cssText =
  "margin-top: 3rem; padding-top: 1.8rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; font-size: 0.92rem; color: rgba(255,255,255,0.72);";
let copyright = document.createElement("span");
copyright.innerHTML = `© ${new Date().getFullYear()} DDFurni. Crafted for modern living.`;
let socialWrap = document.createElement("div");
socialWrap.style.cssText = "display: flex; align-items: center; gap: 0.85rem;";
function socialIcon(symbol, label) {
  let icon = document.createElement("a");
  icon.href = "#";
  icon.setAttribute("aria-label", label);
  icon.innerHTML = symbol;
  icon.style.cssText =
    "display: inline-flex; align-items: center; justify-content: center; width: 2.6rem; height: 2.6rem; border-radius: 50%; background: rgba(255,255,255,0.08); color: #fff; text-decoration: none; transition: transform 0.2s ease, background 0.2s ease;";
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "translateY(-2px)";
    icon.style.background = "rgba(255,231,171,0.22)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.transform = "translateY(0)";
    icon.style.background = "rgba(255,255,255,0.08)";
  });
  return icon;
}
socialWrap.appendChild(socialIcon("�", "Facebook"));
socialWrap.appendChild(socialIcon("📸", "Instagram"));
socialWrap.appendChild(socialIcon("🐦", "Twitter"));
footerBottom.appendChild(copyright);
footerBottom.appendChild(socialWrap);
footerSection.appendChild(footerBottom);

body.appendChild(footerSection);

// about section start 
