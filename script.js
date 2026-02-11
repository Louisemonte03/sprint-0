/* ==========
API STUDENTS
=============*/

let base = "https://fdnd.directus.app/items";
let endpoint =
  "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_tag][_nempty]";
let url = base + endpoint;

const theList = document.querySelector(".student-list");
const btn = document.querySelector("#random-btn");
const display = document.querySelector("#student-display");

let minorPeople = [];

async function getMinorPeople() {
  let response = await fetch(url);
  let responseJSON = await response.json();
  minorPeople = responseJSON.data;

  minorPeople.forEach((minorPerson) => {
    let minorPersonHTML = `
            <li class="student-card">
                <h4>${minorPerson.name}</h4>
                <p><strong>${minorPerson.fav_emoji}</strong></p>
            </li>`;
    if (theList) {
      theList.insertAdjacentHTML("beforeend", minorPersonHTML);
    }

    if (minorPerson.fav_emoji === null) {
      minorPerson.fav_emoji = "This one has no emoji";
    }
  });
}

// Button for the random student
btn.addEventListener("click", () => {
  if (minorPeople.length > 0) {
    let random = minorPeople[Math.floor(Math.random() * minorPeople.length)];
    display.innerHTML = `
            <h4>${random.name}</h4>
            <p>${random.fav_emoji}</p>`;
  }
});

getMinorPeople();

/* ==============
LIGHT DARK MODE
===============*/
const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme");

    document.body.classList.remove("dark-mode");

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    }
  });
});

/* ===============
MY DATA PICTURE
================*/

const title = document.querySelector("h1");

const theAvatar = document.querySelector(".avatar");

insertText();

async function insertText() {
  const URL = "https://fdnd.directus.app/items/person/304";

  let response = await fetch(URL);

  let personData = await response.json();

  console.log(personData.data.name);

  title.textContent = personData.data.name;

  theAvatar.src = personData.data.avatar;
}
