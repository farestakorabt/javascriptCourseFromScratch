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
  e.preventDefault(); // cette fonction permet de stopper la propagation de l'evenement
  console.log("yes !!!");

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo} </h3>
    <h4>Langage préféré : ${language} </h4>
    `;
  } else {
    alert("Veuillez accepter les CGV !");
  }
});

// -------------------------------------------------------------------

// Load event

window.addEventListener("load", () => {
  // console.log("Document chargé");
});

// -------------------------------------------------------------------

// froEach event

const boxes = document.querySelectorAll(".box");
// console.log("boxes:", boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// -------------------------------------------------------------------

// addEventListener vs onclick

// document.body.onclick = () => {
//   console.log("click ");
// };

// bubbling => declencher à la fin (de base l'eventlistener est paramétré enn mode bubbling)
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("click 1 !");
//   }
//   // false (pas la peine de mettre le false, car il est par default)
// );

// // usecapture
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("click 2 !");
//   },
//   true
// );

// ----------------------------------------------------------------------------------
// stop propagation

questionContain.addEventListener("click", (e) => {
  // alert("test! ");
  e.stopPropagation();
});

// remove addEvenetListener

// ----------------------------------------------------------------------------------

//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.fr", "cours js", "height=600", "with=500");
// window.close();

// Evenements addossés a (window)
// alert("hello !");

// confirme

btn2.addEventListener("click", (e) => {
  confirm("Voulez voud vraiment voud tromper ?");
  e.stopPropagation(e);
});

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  // console.log("answer:", answer);
  questionContain.innerHTML += "<h3> Bravo " + answer + " </h3>";
});

// Timer, compte à rebours
// setTimeout(() => {
//   // logique à executer
//   questionContain.style.borderRadius = "300px";
// }, 2000); // "temps en milisecondes "

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//           <div classe='box'>
//             <h2>Nouvelle boite !</h2>
//           </div>
//         `;
// }, 1500);

// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("https://www.eurosport.fr/");

// window.onload = () => {
//   location.href = "https://github.com/";
// };

// Navigator
// console.log(navigator.userAgent);

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log('Votre position actuelle est :');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// History

// console.log(window.history);
// window.history.back();

// history.go(-1);

// ------------------------------------------------------------------------

// setProperty

window.addEventListener("mousemove", (e) => {
  console.log("e:", e);
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
