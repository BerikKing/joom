let left_section_wrapper = document.querySelector(".left_section_wrapper");

left_section_wrapper.addEventListener("click", function () {
  document.querySelector(".languageList").classList.toggle("show");
  document.querySelector(".moneyList").classList.remove("show");
});

let left_section_wrapper_money = document.querySelector(
  ".left_section_wrapper_money"
);

left_section_wrapper_money.addEventListener("click", function () {
  document.querySelector(".moneyList").classList.toggle("show");
  document.querySelector(".languageList").classList.remove("show");
});

//modal
let buttonConShow = document.querySelector(".buttonConShow");
let modal_close = document.querySelector(".modal_close");
// buttonConShow.addEventListener("click", function () {
//   document.querySelector(".overlay").classList.toggle("show");
// });
handleClick(modal_close, document.querySelector(".overlay"), "remove", "show");
handleClick(buttonConShow, document.querySelector(".overlay"), "add", "show");

function handleClick(tag, addClass, str, string) {
  if (str === "remove") {
    tag.addEventListener("click", () => {
      addClass.classList.remove(string);
      /*scrool*/ if (document.body.classList[0] === "no-scroll") {
        document.body.classList.remove("no-scroll");
      }
    });
  } else if (str === "add") {
    tag.addEventListener("click", () => {
      addClass.classList.add(string);
    });
  } else if (str === "toggle") {
    tag.addEventListener("click", () => {
      addClass.classList.toggle(string);
    });
  }

  return null;
}


// таймер для выхода
setTimeout(function () {
  document.querySelector(".overlay").classList.add("show");
  document.body.classList.add("no-scroll");
}, 3000);

//new Date

let day = document.querySelector(".day");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

//24 day

let d = new Date("May 28 2023 00:00:00");

function countDown() {
  let today = new Date();

  let diff = d - today;

  let MathDay = Math.floor(diff / 1000 / 60 / 60 / 24);
  let MathHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  let MathMinutes = Math.floor(diff / 1000 / 60) % 24;
  let MathSecunds = Math.floor(diff / 1000) % 60;

  day.innerHTML = `${MathDay < 10 ? `0${MathDay} : ` : `${MathDay} : `}`;
  hours.innerHTML = `${
    MathHours < 10 ? `0${MathHours} : ` : `${MathHours} : `
  }`;
  minutes.innerHTML = `${
    MathMinutes < 10 ? `0${MathMinutes} : ` : `${MathMinutes} : `
  }`;
  seconds.innerHTML = `${
    MathSecunds < 10 ? `0${MathSecunds} ` : `${MathSecunds}`
  }`;
}
setInterval(countDown, 1000);
//setTimeout

//setInterval

// JSON

let cards = document.querySelector(".cards");

async function getData() {
  const data = await fetch("./data.json");
  const res = await data.json();
  for (let item of Object.values(res.cards)) {
    cards.innerHTML += `<div class="card">
    <div class = "card_img">
      <img class="shoes" src="${item.src}">
    </div>
    <div class="disName">
      <div class="discount">${item.discount}</div>
      <div class="name" style="display: ${
        item.name === "" ? "none" : "block"
      }">${item.name}</div>
    </div>
    <div class="price">${item.price}</div>
    <div class="stars">
      <img  src="${item.star}">
      <img  src="${item.star}">
      <img  src="${item.star}">
      <img  src="${item.star}">
      <img  src="${item.star}">
    </div>
    <div class="descr">${item.descr}</div>

    </div>`;
  }
}
getData();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  cssMode: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// BD
