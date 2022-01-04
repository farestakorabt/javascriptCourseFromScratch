// SELECTERUS

// document.querySelector("h4").style.background ="yellow" ;

// const baliseHTML = document.querySelector("h4");

// console.log("baliseHTML:", baliseHTML);

// CLICK events

const questionContain = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(btn1, btn2);

questionContain.addEventListener("click", () => {
  questionContain.classList.toggle("question-clicked");
  questionContain.classList.toggle("box");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("showResponse");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.toggle("showResponse");
  response.style.background = "red";
});

// id est superieur a la class
// en cas de conflit l'id prend toujours l'ascendant

// priorités en css =>  <div> > #id > .class > baliseHTML ex(<h1>)

// -------------------------------------------------------------------

// Mouse events
// window > DOM > document > html(head) > element(title) > ...

const mousemove = document.querySelector(".mousemove");
// console.log("mousemove:", mousemove);

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(1.2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid yellow";
});

questionContain.addEventListener("mouseenter", () => {
  questionContain.style.background = "rgba(0,0,0,0.6)";
});

questionContain.addEventListener("mouseout", () => {
  questionContain.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(15deg)";
});

// -------------------------------------------------------------------

// Key press

const keypressContain = document.querySelector(".keypress");

const MyKey = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
  console.log(audio.src);
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContain.style.background = "brown";
  } else if (e.key === "m") {
    keypressContain.style.background = "green";
  } else {
    keypressContain.style.background = "yellow";
  }

  if (e.key === "u") {
    ring(e.key);
  }
});

// -------------------------------------------------------------------
// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// -------------------------------------------------------------------

// Form events

const inputName = document.querySelector("input[type='text']");
const inputSelect = document.querySelector("select");
const form = document.querySelector("form");
// console.log('form:', form)
// console.log("inputSelect:", inputSelect);

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log("pseudo:", pseudo);
});

inputSelect.addEventListener("input", (e) => {
  language = e.target.value;
  console.log("language:", language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("yes !!!");

  // console.log(cgv.checked);

  if (cgv.checked) {
    
  }else{
    alert('Veuillez accepter les CGV !')
  }
});
