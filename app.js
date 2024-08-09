// import {
//   AC,
//   plus,
//   minus,
//   zarb,
//   tagsim,
//   dat,
//   sevaen,
//   eight,
//   nine,
//   four,
//   five,
//   six,
//   one,
//   two,
//   three,
//   zero,
//   zz,
//   equak,
//   displya,
// } from "./module.js";

function cleaerAc() {
  let display = document.getElementById("displya");
  let p = document.querySelector("p");
  display.value = "";
}
function plus() {
  let display = document.getElementById("displya");
  display.value += "+";
}
function minus() {
  let display = document.getElementById("displya");
  display.value += "-";
}
function zarb() {
  let display = document.getElementById("displya");
  display.value += "*";
}
function tagsim() {
  let display = document.getElementById("displya");
  display.value += "%";
}
function dat() {
  let display = document.getElementById("displya");
  display.value += ".";
}
function seaven() {
  let display = document.getElementById("displya");
  display.value += "7";
}

function eight() {
  let display = document.getElementById("displya");
  display.value += "8";
}
function nine() {
  let display = document.getElementById("displya");
  display.value += "9";
}
function four() {
  let display = document.getElementById("displya");
  display.value += "4";
}
function five() {
  let display = document.getElementById("displya");
  display.value += "5";
}

function six() {
  let display = document.getElementById("displya");
  display.value += "6";
}
function one() {
  let display = document.getElementById("displya");
  display.value += "1";
}
function two() {
  let display = document.getElementById("displya");
  display.value += "2";
}
function three() {
  let display = document.getElementById("displya");
  display.value += "3";
}
function zero() {
  let display = document.getElementById("displya");
  display.value += "0";
}
function zerozero() {
  let display = document.getElementById("displya");
  display.value += "00";
}
function cClick() {
  let display = document.getElementById("displya");
  display.value = display.value.slice(0, -1);
}
function equalCal() {
  let display = document.getElementById("displya");
  try {
    let Cal_item = eval(display.value);
    display.value = Cal_item;
  } catch (error) {
    display.value = ''
  }
}

let darkMode = document.querySelector(".darkMode");

darkMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("load", () => {
  let getLocal = localStorage.getItem("theme");

  if (getLocal === "dark") {
    document.documentElement.classList.add("dark");
  }
});
