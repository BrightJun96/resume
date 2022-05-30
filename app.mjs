import modalContent from "./util/content.mjs";

/*--DOM Selector-- */
// DOM ID Selector Function
function domIDSelector(element) {
  return document.getElementById(element);
}

// DOM QuerySelector Function
function domQuerySelector(selector) {
  return document.querySelector(selector);
}

/*menuBar toggle(모바일을 위한 햄버거 바)*/
domIDSelector("hamburger-bar").addEventListener("click", () => {
  domIDSelector("menu").classList.toggle("visible");
});

/*-- scroll code --*/
const navBarHeight = domIDSelector("navbar").scrollHeight; // offsetHeight, scrollHeight,clientHeight

// 높이 값을 반환해주는 함수
function sectionHeight(section) {
  return section.offsetTop - navBarHeight;
}

//scroll function
domIDSelector("moreWatch").addEventListener("click", () => {
  scrollTo(0, sectionHeight(domIDSelector("qulifications")));
});

// To Top
domIDSelector("scrollToTop").addEventListener("click", () => {
  scrollTo(0, 0);
});

// 각 세션으로 이동할 수 있게 하는 함수
function switchScrollToSection(event, sectionName) {
  switch (event.target.textContent) {
    case "qulifications":
      scrollTo(0, sectionHeight(domIDSelector(sectionName)));
      break;
    case "experience":
      scrollTo(0, sectionHeight(domIDSelector(sectionName)));
      break;
  }
}
const categorys = document.querySelectorAll(".category");

for (let i = 0; i < categorys.length; i++) {
  categorys[i].addEventListener("click", (e) => {
    switchScrollToSection(e, categorys[i].textContent);
  });
}

/*-- modal code --*/
//modal content Selector
const qulifyBoxes = document.querySelectorAll(".qulify-box");
const modal = domQuerySelector(".modal");
[
  { name: domIDSelector("title"), option: "title" },
  { name: domIDSelector("description"), option: "description" },
];

const modalDomCollection = [
  domIDSelector("title"),
  domIDSelector("description"),
];

console.log(domIDSelector("title").id);
// modal content paint function
function elementPaint(domCollection, index) {
  domCollection.forEach((element) => {
    element.innerHTML = modalContent[index][element.id]; //modalContent[index][element.name.id]
  });
}
for (let i = 0; i < qulifyBoxes.length; i++) {
  qulifyBoxes[i].addEventListener("click", () => {
    modal.classList.add("open-modal");
    elementPaint(modalDomCollection, i);
  });
}

// remove modal
domIDSelector("modal-removeBtn").addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("open-modal");
  }
});
